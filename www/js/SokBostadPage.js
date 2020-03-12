class SokBostadPage extends Base {

<<<<<<< HEAD
  async mount() {
    this.housing = await sql( /*sql*/ `
       SELECT Housing.*, Address.postalArea, Address.city,
=======
    async mount() {
        this.userChoices = {
            // t.ex. kvadradmeter, pris etc
            chosenCity: ''
        }
        await this.search();
    }

    async search() {
        // sokBar sets the app.chosenCity and we
        // just add this to userChoices
        this.userChoices.chosenCity = app.chosenCity || "";
        console.log("this.userChoices", this.userChoices)
        this.housing = await sql( /*sql*/ `
       SELECT Housing.*, Address.postalArea AS postalArea, Address.city AS city,
>>>>>>> cc65a420ecc6a92c8676d8609c81ea21147767f8
         GROUP_CONCAT(HousingImages.ordinaryUrl) AS imageUrls
       FROM Housing, HousingImages, Address
       WHERE Housing.id = HousingImages.housingId
       AND Housing.addressId = Address.id
<<<<<<< HEAD
       ANd Housing.nyproduktion = 0
       GROUP BY Housing.id
    `);

    // convert imageUrls to an array
    for (let house of this.housing) {
      house.imageUrls = house.imageUrls.split(',');
=======
       AND Housing.nyProduktion = 0
       AND (city = $chosenCity OR $chosenCity = "")
       GROUP BY Housing.id
    `, this.userChoices);
        console.log("this.housing  (after search in DB)", this.housing)
            // convert imageUrls to an array
        for (let house of this.housing) {
            house.imageUrls = house.imageUrls.split(',');
        }
        this.render();
>>>>>>> cc65a420ecc6a92c8676d8609c81ea21147767f8
    }

    console.log(this.housing)
  }

  render() {
    return /*html*/ `
      <div route="/sok-bostad" page-title="Sök Bostad">
      
        ${this.housing.length === 0 ? 'Inga resultat matchar din sökning...' : this.housing.map(house => /*html*/`
            <div class="row mb-5">

              <div class="col-md-4">
                  <img src="${house.imageUrls[0]}" class="img-fluid">
              </div>
            
              <div class="col-md-6 Sokbostad-facts">
                <h1>${house.projectName}</h1>
                <div class="Sokbostad-line"></div>
                
                <p>${house.description}</p>
                <p><strong>Pris:</strong>${house.price} kr</p>
                <p><strong>Antal Rum:</strong>${house.totalRooms} RoK</p>
                <p><strong>Boarea:</strong>${house.livingArea} Kvm</p>
                <p><strong>Område:</strong>${house.postalArea}</p>
                <p><strong>Kommun:</strong>${house.city}</p>
                <div class="col-md-12"><hr></div>  
              </div>
            
            </div>
        `)}

        
      </div>
      
    `;
  }

}