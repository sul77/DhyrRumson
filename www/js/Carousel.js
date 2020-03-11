class Carousel extends Base {

  async mount() {
    await this.getNewHousing();

  }

  async getNewHousing() {
    this.housing = await sql(/*sql*/`
       SELECT Housing.id AS id, GROUP_CONCAT(HousingImages.nyUrl) AS imageUrls
       FROM Housing, HousingImages 
       WHERE Housing.id = HousingImages.housingId
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
    
      <div id="nyProduktionCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
          <ol class="carousel-indicators">
          ${this.housing.map((house, index) => /*html*/` 
            <li style="margin:0 5px 0 0" data-target="#nyProduktionCarousel" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>
            `)}
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner">
         <!-- mappa bilderna  -->
          ${this.housing.map((house, index) => /*html*/`
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                  <img class="img-fluid" src="${house.imageUrls[0]}" >
                </div>
          `)}
          </div>

          <!-- Left and right controls -->
          <a class="left carousel-control" href="#nyProduktionCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#nyProduktionCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
      </div>
    `;
  }

}