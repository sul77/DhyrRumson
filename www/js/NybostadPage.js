class NyBostadPage extends Base {

  async mount() {
    this.housing = await sql(/*sql*/`
       SELECT Housing.*, Address.postalArea, Address.city,
         GROUP_CONCAT(HousingImages.nyUrl) AS imageUrls
       FROM Housing, HousingImages, Address
       WHERE Housing.id = HousingImages.housingId
       AND Housing.addressId = Address.id
       AND Housing.nyProduktion = 1
       GROUP BY Housing.id
    `);

    // convert imageUrls to an array
    for (let house of this.housing) {
      house.imageUrls = house.imageUrls.split(',');
    }

    console.log(this.housing)
  }

  render() {
    return /*html*/`
      <div route="/nya-bostader" page-title="Nyproduktion">
      <a class="CustomInvisibleButton" href="/ny-bostad/${house.id}" role="button">Link</a>
      ${this.housing.map(house => `
          <div class="row mb-5">
            <div class="col-md-6 nyproduktion-facts">
              <h1>${house.projectName}</h1>
              <div class="nyproduktion-line"></div>
              <p>${house.description}</p>
              <p><strong>Pris: </strong>${house.price} kr</p>
              <p><strong>Antal Rum: </strong>${house.totalRooms} RoK</p>
              <p><strong>Boarea: </strong>${house.livingArea} Kv</p>
              <p><strong>Område: </strong>${house.postalArea}</p>
              <p><strong>Kommun: </strong>${house.city}</p>
              
           </div>
           <div class="col-md-6">
              <img src="${house.imageUrls[0]}" class="img-fluid">
           </div>
          </div>
      `)}

        
      </div>
      
    `;
  }

}