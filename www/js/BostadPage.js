class BostadPage extends Base {

    async mount() {
        this.planskiss = new Planskiss();
        this.tabs = [
            'Översikt', 'Bilder', 'Planskiss',
            'Beskrivning', 'Område', 'Visning'
        ];
        this.activeTab = 'Översikt';
    }

    closeOverlay() {
        app.bostadToShow = false;
        app.render();
    }

    chooseTab(e) {
        this.activeTab = e.target.innerHTML;
        this.render();
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
                      <div class="CustomTextWindow">
                         <p>${this.description}</p>
                      </div>          
                </div>
              </div>
              <div class="bostadNavbar">
                <ul>
                  <li><a class="active" href="/bostad/${this.id}">Översikt</a></li>
                  <li><a href="#">Bilder</a></li>
                  <li><a href="#">Planskiss</a></li>
                  <li><a href="#">Beskrivning</a></li>
                  <li><a href="#">Område</a></li>
                <ul click="chooseTab">
                  ${this.tabs.map(tab => `
                    <li class="${this.activeTab === tab ? 'active' : ''}"><a href="#">${tab}</a></li>
                  `)}
                </ul> 
              </div>
              <div class="container">
                ${this.activeTab !== 'Översikt' ? '' : `
                  <div class="row">
                    <div class="col-12">
                      <h1>Översikt</h1>
                      <h3>${app.formatCurrency(this.price)}</h3>
                      <p>${this.LongDes}</p>
                    </div>
                  </div>
                `}
                ${this.activeTab !== 'Bilder' ? '' : `
                  <div class="row">
                    <div class="col-12">
                      <h1>Bilder</h1>
                    </div>
                  </div>
                `}
                ${this.activeTab !== 'Planskiss' ? '' : `
                  <div class="row">
                    <div class="col-12">
                      <h1>Planskiss</h1>
                    </div>
                  </div>
                `}
                ${this.activeTab !== 'Beskrivning' ? '' : `
                  <div class="row">
                    <div class="col-12">
                      <h1>Beskrivning</h1>
                    </div>
                  </div>
                `}
                ${this.activeTab !== 'Område' ? '' : `
                  <div class="row">
                    <div class="col-12">
                      <h1>Område</h1>
                    </div>
                  </div>
                `}
                ${this.activeTab !== 'Visning' ? '' : `
                  <div class="row">
                    <div class="col-12">
                      <h1>Visning</h1>
                    </div>
                  </div>
                `}
              </div>
            </div>        
        `}
      </div>
      `;
  }
}