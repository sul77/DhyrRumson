class StartPage extends Base {
  async mount() {
    this.carousel = new StartPageCarousel();
    this.sokbar = new Sokbar();
    this.CheckIfCookiesAccepted();
    this.f = new ContactForm({
      toSave: "meeting"
    });

    this.housing = await sql( /*sql*/ `
       SELECT Housing.*, Address.postalArea, Address.city,
         GROUP_CONCAT(HousingImages.nyUrl) AS imageUrls
       FROM Housing, HousingImages, Address
       WHERE Housing.id = HousingImages.housingId
       AND Housing.addressId = Address.id
       AND Housing.nyProduktion = 0
       GROUP BY Housing.id
       LIMIT 3
    `);

    // convert imageUrls to an array
    for (let house of this.housing) {
      house.imageUrls = house.imageUrls.split(',');
    }

    console.log(this.housing)
  }

  CheckIfCookiesAccepted() {
    setTimeout(function () {
      if (!localStorage.cookiesAccepted == '1') {
        $('#cookieInfoDiv').show();
      }
    }, 10);
  }

  HideCookies() {
    localStorage.setItem('cookiesAccepted', '1');
    $('#cookieInfoDiv').hide();
  }



  render() {
    this.CheckIfCookiesAccepted();
    return /*html*/ `

      <div class="row" route="/" page-title="Hem">

      <div id="cookieInfoDiv" style="background: #000000; color: #FFF; opacity: 0.8; width: 100%; top: 0; left: 0; z-index: 1; height: 100px; position: fixed; display: none;">
        <div style="text-align: center; padding-top: 20px; padding-bottom: 20px;">
          <p>Vi använder cookies för att ge dig en bättre upplevelse av webbplatsen och för vår marknadsföring. Genom att fortsätta använda vår webbplats accepterar du att cookies används.</p>
          <button type="button" class="btn btn-success accept-cookie" click="HideCookies"> Ok </button>
        </div>
      </div>
    <div>
    
    <div class="center_content" style="margin:auto">
      ${this.carousel}
      <div class="center_content stack-top start-page-search-holder">
        <h3 float:left>Sök Område</h3>
        ${this.sokbar}
      </div> 
    </div> 
      
      <div class="col-12 mt-5">

<div class="card-group">
 ${this.housing.map(house => `

     <div class="card"  style="margin:5px; border:1px solid !important;">
        <div class="card-img-top">
            <img src="${house.imageUrls[0]}" class="img-fluid" >
           </div>
         <div class="card-body">
           <h4 class="card-title">${house.projectName}</h4>
           <p class="card-text"><strong>Pris:</strong>${house.price} kr</p>
           <p class="card-text"><strong>Antal Rum:</strong>${house.totalRooms} RoK</p>
           <p class="card-text"><strong>Boarea:</strong>${house.livingArea} Kvm</p>
           <p class="card-text"><strong>Område:</strong>${house.postalArea}</p>
          </div>
          </div>
          
      `)}

  

<div class = "col-12">
 <h2 class="text-center">Möt några av Svergies bästa mäklare</h2>
                   <p class="text-center">
                   DhyrRumson är en av Sveriges snabbast växande mäklarföretag idag.
                   Sedan början på 2020, har vi växt och spridit vårat nystartade privatföretag
                   över nästan hela Sverige med inga tecken på att stoppa. I dagsläget befinner sig
                   våran verksamhet bara i Sverige, men vi har planer runt hörnet; att sprida våran verksamhet
                   ut över hela Skandinavien och så småningom; Europa.
                   </p>
                   <div style="text-align:center; display:block">
                   <h2>Kontakta oss</h2>
                   </div>

                   ${this.f}
</div>


    `;
  }
}