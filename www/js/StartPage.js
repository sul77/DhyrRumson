class StartPage extends Base {
  async mount() {
    this.carousel = new StartPageCarousel();
    this.sokbar = new Sokbar();
    this.CheckIfCookiesAccepted();
    this.f = new ContactForm({ toSave: "meeting" });
  }

  CheckIfCookiesAccepted() {
    setTimeout(function () {
      if (!sessionStorage.cookiesAccepted == '1') {
        $('#cookieInfoDiv').show();
      }
    }, 10);
  }

  HideCookies() {
    sessionStorage.setItem('cookiesAccepted', '1');
    $('#cookieInfoDiv').hide();
  }
  render() {
    this.CheckIfCookiesAccepted();
    return /*html*/`

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
      <div class="center_content stack-top" style="width:30%; height:20%; align-content:baseline">
        <h3 float:left>Sök Område</h3>
        ${this.sokbar}
      </div> 
    </div> 
      
      <div class="col-12 mt-5">

<div class="card-group">
  <div class="card mr-5">
    <img class="card-img-top" src='../images/ExampleEstate1.jpg' alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">FRILIGGANDE VILLA

      <p>Persön, Luleå</p></h5>
      <p class="card-text">ADRESS:.........................................Månsgårdsvägen 7</p>
      <p class="card-text">UTGÅNGSPRIS:.........................................2 000 000 kr</p>
      <p class="card-text">BOAREA:........................................................50kvm</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  <div class="card mr-5">
    <img class="card-img-top" src='../images/ExampleEstate2.jpg' alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">BOSTADSRÄTTSLÄGENHET

      <p>Stallhagen, Västerås</p></h5>
      <p class="card-text">ADRESS:.........................................Nanna Svartz Gata 5</p>
      <p class="card-text">UTGÅNGSPRIS:.........................................2 095 000 kr</p>
      <p class="card-text">BOAREA:........................................................70kvm</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  
  <div class="card">
    <img class="card-img-top" src='../images/ExampleEstate3.jpg' alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">BOSTADSRÄTTSLÄGENHET
       <p>Sibbarp, Malmö</p></h5>
       <p class="card-text">ADRESS:..................................Hammars Parkväg 28B</p>
      <p class="card-text">UTGÅNGSPRIS:.........................................3 195 000 kr</p>
      <p class="card-text">BOAREA:........................................................88kvm</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

<div class = "col-12">
 <h2 class="text-center">Möt några av Svergies bästa mäklare</h2>
                   <p class="text-center">
                   DhyrRumson är en av Sveriges snabbast växande mäklarföretag idag.
                   Sedan början på 2020, har vi växt och spridit vårat nystartade privatföretag
                   över nästan hela Sverige med inga tecken på att stoppa. I dagsläget befinner sig
                   våran verksamhet bara i Sverige, men vi har planer runt hörnet; att sprida våran verksamhet
                   ut över hela Skandinavien och så småningom; Europa.
                   </p>
                    ${this.f}
</div>


    `;
  }
}