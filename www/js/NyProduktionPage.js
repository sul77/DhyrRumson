class NyProduktionPage extends Base {

  mount() {
    this.carousel = new Carousel();
  }

  render() {
    return /*html*/`
      <div class="row" route="/Ny-produktion" page-title="Vi kan Nyproduktion">
      <div class="col-12">   
        ${this.carousel} 
      </div>
      </div>
    `;
  }

}