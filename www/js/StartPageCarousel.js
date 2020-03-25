class StartPageCarousel extends Base {


  async mount() {
    await this.getHousing();

  }

  async getHousing() {
    this.housing = await sql(/*sql*/`
       SELECT Housing.id AS id, GROUP_CONCAT(HousingImages.ordinaryUrl) AS imageUrls
       FROM Housing, HousingImages 
       WHERE Housing.id = HousingImages.housingId
       GROUP BY Housing.id
    `);

    // convert imageUrls to an array
    for (let house of this.housing) {
      house.imageUrls = house.imageUrls.split(',');
    }
  }

  render() {
    return /*html*/ `
    
      <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="5000">
        <!-- Indicators -->
          <ol class="carousel-indicators">
          ${this.housing.map((house, index) => /*html*/` 
            <li style="margin:0 5px 0 0" data-target="myCarousel" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>
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
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
      </div>
    `;
  }

}