class StartPageCarousel extends Base {

  render() {
    return /*html*/`
      <div id="myCarousel" class="carousel slide" data-ride="carousel" style="width:80%; margin:auto">
        <!-- Indicators -->
          <ol class="carousel-indicators">
            <li style="margin:0 5px 0 0" data-target="#myCarousel" data-slide-to="0" class="active" ></li>
            <li style="margin:0 5px 0 0" data-target="#myCarousel" data-slide-to="1"></li>
            <li style="margin:0 5px 0 0" data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <img src="../images/ExampleHouse1.jpg">
            </div>

            <div class="item">
              <img src="../images/ExampleHouse2.jpg" display="block">
            </div>

            <div class="item">
              <img src="../images/ExampleHouse3.jpg">
            </div>
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