class SokBostadPage extends Base {

    async mount() {
        this.filter = this.createFilterObject();

        await this.search();
    }

    createFilterObject() {
        return {
            typ: [{
                    key: 'Alla',
                    value: "'Villa', 'Radhus', 'Lägenhet'"
                },
                {
                    key: 'Villa',
                    value: "'Villa'"
                },
                {
                    key: 'Radhus',
                    value: "'Radhus'"
                },
                {
                    key: 'Lägenhet',
                    value: "'Lägenhet'"
                }
            ],
            priceMin: this.createList(0, 10000000, 500000, false),
            priceMax: this.createList(0, 10000000, 500000, true),
            roomsMin: this.createList(1, 10, 1, false),
            roomsMax: this.createList(1, 10, 1, true),
            rent: this.createList(1000, 10000, 1000, true),
            livingAryaMin: this.createList(5, 300, 5, false),
            livingAryaMax: this.createList(5, 300, 5, true),
            lotSizeMin: this.createList(0, 700, 100, false),
            lotSizeMax: this.createList(0, 700, 100, true),
        };
    }

    createList(start, max, counter, sortDescending) {
        let data = [];
        for (let value = start; value <= max; value += counter) {
            data.push(value);
        }

        if (!sortDescending)
            return data;
        else
            return data.sort(function(a, b) {
                return b - a
            });
    }

    async search() {
        this.userChoices = {
                // t.ex. kvadradmeter, pris etc
                chosenCity: ''
            }
            // sokBar sets the app.chosenCity and we
            // just add this to userChoices
        this.userChoices.chosenCity = app.chosenCity || "";
        // console.log("this.userChoices", this.userChoices)

        this.housing = await sql( /*sql*/ `
       SELECT Housing.*, Address.postalArea AS postalArea, Address.city AS city,
         GROUP_CONCAT(HousingImages.ordinaryUrl) AS imageUrls
       FROM Housing, HousingImages, Address
       WHERE Housing.id = HousingImages.housingId
       AND Housing.addressId = Address.id
       AND (city = $chosenCity OR $chosenCity = "")
       GROUP BY Housing.id
    `, this.userChoices);

        // console.log("this.housing  (after search in DB)", this.housing)

        if (this.housing.length === 0) {
            setTimeout(function() {
                app.goto('/');
            }, 1000);
        }
        // convert imageUrls to an array
        for (let house of this.housing) {
            house.imageUrls = house.imageUrls.split(',');
        }
        this.render();

        // console.log(this.housing)
    }

    async getFilterHousing(e) {
        e.preventDefault();

        let filter = {};
        for (let element of[...e.target.closest('form').elements]) {
            if (element.id !== '') {
                if (element.id !== 'Bostadstyp')
                    filter[element.id] = Number(element.selectedOptions[0].value);
                else
                    filter[element.id] = element.selectedOptions[0].value;
            }
      }
      
      console.log('Filter data', filter);
      this.housing = [];
        this.housing = await sql( /*sql*/ `
       SELECT Housing.*, Address.postalArea AS postalArea, Address.city AS city, GROUP_CONCAT(HousingImages.ordinaryUrl) AS imageUrls 
       FROM Housing
       JOIN Address ON Housing.addressId = Address.id
       JOIN HousingImages ON Housing.Id = HousingImages.housingId
       WHERE (price >= ${filter.PriceMin} AND price <= ${filter.PriceMax}) 
       AND type IN (${filter.Bostadstyp})
       AND (livingArea >= ${filter.livingAryaMin} AND livingArea <= ${filter.livingAryaMax})
       AND(totalRooms >= ${filter.RoomsMin} AND totalRooms <= ${filter.RoomsMax}) 
       AND rent <= ${filter.Rent}
       AND (lotSize >= ${filter.lotSizeMin} AND lotSize <= ${filter.lotSizeMax})
       GROUP BY Housing.id
    `);

        for (let house of this.housing) {
            house.imageUrls = house.imageUrls.split(',');
        }
      console.log('Filter result', this.housing)
        this.render();
    }

    render() {
            return /*html*/ `
    <div route="/sok-bostad" page-title="Sök Bostad">
        
         <form submit="getFilterHousing">
          <div class="form-group">
          <div class="col-sm-3">
          <div class="mb-3  mt-3">
              <label for="Bostadstyp">Bostadstyp</label>
              <select class="form-control" id="Bostadstyp">
                ${this.filter.typ.map(e => /*html*/` <option value="${e.value}">${e.key}</option> `)}
              </select>
          </div>
          </div>
          <div class="col-sm-3">
          <div class="mb-3  mt-3">
              <label for="PriceMin">Pris (min)</label>
              <select class="form-control" id="PriceMin">
                ${this.filter.priceMin.map(e => /*html*/` <option value="${e}">${e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</option> `)}
              </select>
          </div>
          </div>
            <div class="col-sm-3">
            <div class="mb-3  mt-3">
              <label for="PriceMax">Pris (max)</label>
              <select class="form-control" id="PriceMax">
                ${this.filter.priceMax.map(e => /*html*/` <option value="${e}">${e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</option> `)}
              </select>
            </div>
            </div>

              <div class="col-sm-3">
              <div class="mb-3  mt-3">
              <label for="Rent">Avgift (max)</label>
              <select class="form-control" id="Rent">
                ${this.filter.rent.map(e => /*html*/` <option value="${e}">${e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</option> `)}
              </select>
          </div>
          </div>
                <div class="col-sm-3">
                <div class="mb-3  mt-3">
              <label for="RoomsMin">Rum (min)</label>
              <select class="form-control" id="RoomsMin">
                ${this.filter.roomsMin.map(e => /*html*/` <option value="${e}">${e}</option> `)}
              </select>
            </div>
            </div>
                  <div class="col-sm-3">
                  <div class="mb-3  mt-3">
              <label for="RoomsMax">Rum (max)</label>
              <select class="form-control" id="RoomsMax">
                ${this.filter.roomsMax.map(e => /*html*/` <option value="${e}">${e}</option> `)}
              </select>
            </div>
            </div>
                <div class="col-sm-3">
                <div class="mb-3  mt-3">
              <label for="livingAryaMin">Boarea (min)</label>
              <select class="form-control" id="livingAryaMin">
                ${this.filter.livingAryaMin.map(e => /*html*/` <option value="${e}">${e}</option> `)}
              </select>
          </div>
          </div>
                <div class="col-sm-3">
                  <div class="mb-3  mt-3">
              <label for="livingAryaMax">Boarea (max)</label>
              <select class="form-control" id="livingAryaMax">
                ${this.filter.livingAryaMax.map(e => /*html*/` <option value="${e}">${e}</option> `)}
              </select>
          </div>
          </div>
                 <div class="col-sm-6">
                  <div class="mb-3  mt-3">
              <label for="lotSizeMin">Tomtarea (min)</label>
              <select class="form-control" id="lotSizeMin">
                ${this.filter.lotSizeMin.map(e => /*html*/` <option value="${e}">${e}</option> `)}
              </select>
            </div>
            </div>
                  <div class="col-sm-6">
                  <div class="mb-3  mt-3">
              <label for="lotSizeMax">Tomtarea (max)</label>
              <select class="form-control" id="lotSizeMax">
                ${this.filter.lotSizeMax.map(e => /*html*/` <option value="${e}">${e}</option> `)}
              </select>
              </div>
                <div class="col-sm-6">
                <div class="mb-3  mt-4">
            <button type="submit" class="CustomVisaButton">VISA</button>
          </div>
          </div>
          </div>
            </form>
        ${this.housing.length === 0 ? 'Inga resultat matchar din sökning...' : this.housing.map(house => /*html*/`
              <div class="row mb-5">
              <div class="col-md-6">
                  <img src="${house.imageUrls[0]}" class="img-fluid">
            </div>            
              <div class="col-md-6 Sokbostad-facts">
                <h1>${house.projectName}</h1>
                <div class="Sokbostad-line"></div>                
                <p>${house.description}</p>
                <a class="CustomInvisibleButton" href="/bostad/${house.id}" role="button">Link</a>
                <p><strong>Pris:</strong> ${house.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr</p>
                <p><strong>Avgift:</strong> ${house.rent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr</p>
                <p><strong>Antal Rum:</strong> ${house.totalRooms} RoK</p>
                <p><strong>Boarea:</strong> ${house.livingArea} Kvm</p>
                <p><strong>Område:</strong> ${house.postalArea}</p>
                <p><strong>Kommun:</strong> ${house.city}</p>
                
            </div>
            </div>
            

        `)}
      </div>`;
  }
}