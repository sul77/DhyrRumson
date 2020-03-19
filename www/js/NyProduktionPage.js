class NyProduktionPage extends Base {

  mount() {
    this.carousel = new Carousel();
    this.nyBostad = new NyBostadPage();
    this.byggHerre = new ByggHerrePage();


  }

  render() {
    return /*html*/ `
      <div class="row" route="/Ny-produktion" page-title="Vi kan Nyproduktion">
        <div class="col-12">   
          ${this.carousel} 
          ${this.nyBostad}
          ${this.byggHerre}
          <div class="row">
            <div class="col-sm-6">
              <div class="mb-5  mt-5">
               <div class="p-3 mb-2 bg-info text-white">Letar du bostad ? </div>
                 <p class="card-text">Vi kan ny produktion <br>
                             Här hittar du alla våra aktuella projekt.</p>
                 <a href="/nya-bostader" class="btn btn-info sharp">Läs mer </a>
                </div>
             </div>
              <div class="col-sm-6">
               <div class="mb-5  mt-5"> 
                  <div class="p-3 mb-2 bg-info text-white">Bygger du bostad ? </div>
                    <div class="card-body">
                      <p class="card-text">
                        Vår ambition är att våra mäklare ska inleda ett samarbete med byggherrarna i ett tydigt skede
                        för att skapa rätt föruttsättningar för varje projekt.
                      </p>
                      <a href="bygg-herre" class="btn btn-info sharp">Läs mer </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3" style="margin-top: 20px;">
              <div class="row">
                <div class="col-xs-12 hidden-sm hidden-md hidden-lg">  
                  <img class="img-responsive" src="/images/DhyrRumsonWallpaperZoomedPhone.jpg" />    <!--Mobile-->
                </div>
                <div class="hidden-xs col-sm-12 hidden-md hidden-lg">
                  <img class="img-responsive" src="/images/DhyrRumsonWallpaperZoomed.jpg" />   <!--Tab-->
                </div>
                <div class="hidden-xs hidden-sm col-md-12 hidden-lg">
                  <img class="img-responsive" src="/images/DhyrRumsonWallpaper.jpg" />   <!--Desktop-->
                </div>
                <div class="hidden-xs hidden-sm hidden-md col-lg-12">
                  <img class="img-responsive" src="/images/DhyrRumsonWallpaper.jpg" />  <!--Large-->
                </div>
              </div>
            </div>
        </div>
      </div>
    `;
  }

}