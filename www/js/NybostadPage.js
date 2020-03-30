class NyBostadPage extends Base {

  async mount() {
    this.housing = await sql( /*sql*/ `
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
    return /*html*/ `
      <div route="/nya-bostader" page-title="Nyproduktion">
      
      ${this.housing.map(house => `
        
          <div class="row mb-5">
            <a href="/ny-bostad/${app.cleanName(house.projectName)}">
            <div class="col-md-6 nyproduktion-facts">
              <h1 style="color: black;">${house.projectName}</h1>
             
              <div class="nyproduktion-line"></div>
              <h3><span style="color: black;">${house.description}</span></h3>
              <p><strong><span style="color: #31B0D5;">Pris:</span> </strong> <span style="color: black;">${house.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr</span></p>
              <p><strong><span style="color: #31B0D5;">Antal Rum:</span> </strong><span style="color: black;">${house.totalRooms} ROK</span></p>
              <p><strong><span style="color: #31B0D5;">Boarea:</span> </strong><span style="color: black;">${house.livingArea} Kvm</span></p>
              <p><strong><span style="color: #31B0D5;">Område:</span> </strong><span style="color: black;">${house.postalArea}</span></p>
              <p><strong><span style="color: #31B0D5;">Kommun:</span> </strong><span style="color: black;">${house.city}</span></p>
              
           </div>
           <div class="col-md-6">
              <img src="${house.imageUrls[0]}" class="img-fluid">
           </div>
          </div>
          </a>
      `)}

        
      </div>
      
    `;
  }

}