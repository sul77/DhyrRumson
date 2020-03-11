class SokBostadPage extends Base {

  async mount() {
    let url = decodeUri(window.location.search) // Getting URL and decoding it
    console.log(url)

    let city = url.replace("?", ''); // Extracting city from query params
    console.log(city)

    this.housing = await sql( /*sql*/ `
       SELECT Housing.*, Address.postalArea, Address.city,
       GROUP_CONCAT(HousingImages.nyUrl) AS imageUrls
       FROM Housing, HousingImages, Address
       WHERE Housing.id = HousingImages.housingId AND Address.city = "${city}" 
       AND Housing.addressId = Address.id
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
      <div route="/sok-bostad" page-title="Sök Bostad">
      <h1>Sök resultat</h1>
      ${this.housing.map(house => `
      
          <div class="row mb-5">
          <div class="col-md-4">
              <img src="${house.imageUrls[0]}" class="img-fluid">
           </div>
           
            <div class="col-md-6 Sokbostad-facts">
              <h3>${house.projectName}</h3>
              <div class="Sokbostad-line"></div>
              
              <p>${house.description}</p>
              <p><strong>Pris:</strong>${house.price} kr</p>
              <p><strong>Antal Rum:</strong>${house.totalRooms} RoK</p>
              <p><strong>Boarea:</strong>${house.livingArea} Kvm</p>
              <p><strong>Område:</strong>${house.postalArea}</p>
              <p><strong>Kommun:</strong>${house.city}</p>
              <div class="col-md-20"><hr></div>
              
           </div>
           
          </div>
      `)}

        
      </div>
      
    `;
  }

}