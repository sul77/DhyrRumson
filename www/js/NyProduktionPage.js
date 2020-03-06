class NyProduktionPage extends Base {

  mount() {
    this.carousel = new Carousel();
    this.nyBostad = new NyBostadPage();
    this.byggHerre = new ByggHerrePage();


  }

  render() {
    return /*html*/`
      <div class="row" route="/Ny-produktion" page-title="Vi kan Nyproduktion">
      <div class="col-12">   
        ${this.carousel} 
        ${this.nyBostad}
        ${this.byggHerre}
        

        <div class="row">
    <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <p class="font-weight-bold">  Letar du bostad ? </p>

        <p class="card-text">Vi kan ny produktion <br>
                             Här hittar du alla våra aktuella projekt.</p>
        <a href="/nya-bostader" class="btn btn-primary">Läs mer </a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <p class="font-weight-bold">  Bygger du bostad ? </p>
        <p class="card-text">Vår ambition är att våra mäklare ska inleda ett samarbete med byggherrarna i ett tydigt skede
                              för att skapa rätt föruttsättningar för varje projekt.</p>
        <a href="bygg-herre" class="btn btn-primary">Läs mer </a>
      </div>
    </div>
  </div>
</div>
      </div>
      </div>
    `;
  }

}