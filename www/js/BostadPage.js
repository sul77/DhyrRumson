class BostadPage extends Base {

    async mount() {
        this.planskiss = new Planskiss();
    }

    closeOverlay() {
        app.bostadToShow = false;
        app.render();
    }

    render() {
            return /*html*/ `
      <div>
        ${app.bostadToShow !== this.id ? '' : /*html*/`
          <div class="bostad-overlay-bg">
          </div>
            <div class="bostad-overlay-content">
              <div class="bostad-overlay-close-btn" click="closeOverlay">x</div>
              <div class="row">
                <div class="col"> 
                  <img src="/images/BostäderBilder/${this.id}.jpg" alt="..." class="bostad-overlay-main-img">
                      <!--<div class="CustomTextWindow">
                         <p> Välskött 1-plansvilla med 1 garage belägen nära både förskola och skola</p>
                      </div>-->            
                </div>
              </div>
              <div class="bostadNavbar">
                <ul>
                  <li><a class="active" href="/bostad/${this.id}">Översikt</a></li>
                  <li><a href="#">Bilder</a></li>
                  <li><a href="#">Planskiss</a></li>
                  <li><a href="#">Beskrivning</a></li>
                  <li><a href="#">Område</a></li>
                </ul> 
              </div>
                <h1>${this.streetName}</h1>
                 <h4 class="mb-3">${this.city}</h4>
                  <h4 class="mb-3">${this.streetNumber}</h4>
                  <h4 class="mb-3">${this.postalArea}</h4>
                  <h4 class="mb-3">${this.postCode}</h4>
                  <h4 class="mb-3">${this.country}</h4>
                  <div id="section1" class="container-fluid">
                    <h4 class="mb-3">${this.areaDescID}</h4>   
                  </div> 
            </div>        
        `}
      </div>
      `;
  }
}