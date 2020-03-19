class NyProduktionPage extends Base {

  async mount() {
    this.carousel = new Carousel();
    this.nyBostad = new NyBostadPage();
    this.byggHerre = new ByggHerrePage();


    await sql(/*sql*/`USE workingDb`);
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
        <div class="mb-5  mt-5">
        <div class="p-3 mb-2 bg-info text-white">Letar du bostad ? </div>
        <p class="card-text">Vi kan ny produktion <br>
                             Här hittar du alla våra aktuella projekt.</p>
        <a href="/nya-bostader" class="btn btn-info">Läs mer </a>
  </div>
  </div>
      <div class="col-sm-6">
      <div class="mb-5  mt-5"> 
      <div class="p-3 mb-2 bg-info text-white">Bygger du bostad ? </div>
        <div class="card-body">
        <p class="card-text">Vår ambition är att våra mäklare ska inleda ett samarbete med byggherrarna i ett tydigt skede
                              för att skapa rätt föruttsättningar för varje projekt.</p>
                  <a href="bygg-herre" class="btn btn-info">Läs mer </a>
                  
           
            
          `}

  ;

}



