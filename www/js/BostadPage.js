class BostadPage extends Base {
 
    async mount() {
        // Get complete Address details
        let details = await sql( /*sql*/ `
          SELECT * FROM BostadInfo WHERE id = $id
        `, {
            id: this.id,
            streetNumber: this.streetNumber,
            streetName: this.streetName,
            postCode: this.postCode,
            postalArea: this.postalArea,
            city: this.city,
            country: this.country,
            areaDescID: this.areaDescID
        });
        Object.assign(this, details[0]);
    }

    render() {
        return /*html*/ `
      <div route="/bostad/${this.id}" page-title="${this.streetName}">
          <main>
              <div class="row">
                <div class="col"> 
                  <img src="/images/BostäderBilder/${this.id}.jpg" alt="..." class="img-thumbnail">
                      <div class="CustomTextWindow">
                         <p> Välskött 1-plansvilla med 1 garage belägen nära både förskola och skola</p>
                          </div>
                            <h1>${this.streetName}</h1>
                            <h4 class="mb-3">${this.city}</h4>
                            <h4 class="mb-3">${this.streetNumber}</h4>
                            <h4 class="mb-3">${this.postalArea}</h4>
                            <h4 class="mb-3">${this.postCode}</h4>
                            <h4 class="mb-3">${this.country}</h4>
                            <h4 class="mb-3">${this.areaDescID}</h4>               
                          </div>
                      </div>
                </div>
              </div>
          </main>
      </div>
        
      `;
    }
}