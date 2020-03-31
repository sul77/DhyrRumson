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
                      <div class="col-12">
                      ${this.LongDes}
                    </div>
                      
                    </div>
                  </div>
                   
            
                 <div class="col-sm-3">
                    <div class="mb-5   mt-5">
                   <p><strong><span style="color: #31B0D5;">Boarea: </span></strong>${this.livingArea} Kvm</p>
                   <p><strong><span style="color: #31B0D5;">Antal Rum: </span></strong>${this.totalRooms} ROK</p>
              </div>
              </div>
                <div class="col-sm-3">
                   <div class="mb-5   mt-5" >
                   <p><strong><span style="color: #31B0D5;">Pris:</span></strong> ${this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr</p>
                   <p><strong><span style="color: #31B0D5;">Tillträde:</span> </strong>Q3-Q4-2020</p>
              </div>
              </div>
               <div class="col-sm-3">   
                <div class="mb-5   mt-5" >
                   <p><strong><span style="color: #31B0D5;">Område : </span></strong>${this.postalArea} </p>
                   <p><strong><span style="color: #31B0D5;">Kommun : </span></strong>${this.city} </p>
              </div>
              </div>
              
                `}
                ${this.activeTab !== 'Bilder' ? '' : `
                  <div class="row">
                    <div class="col-12">
                      <h1>Bilder</h1>
                    </div>
                    <img class="img-fluid " src="/images/VanligaBostäder/Interior/VanligBostad${this.id}Interior/VanligBostad${this.id}Interior1.jpg">
                    <img class="img-fluid " src="/images/VanligaBostäder/Interior/VanligBostad${this.id}Interior/VanligBostad${this.id}Interior2.jpg"> 
                    <img class="img-fluid " src="/images/VanligaBostäder/Interior/VanligBostad${this.id}Interior/VanligBostad${this.id}Interior3.jpg"> 
                    <img class="img-fluid " src="/images/VanligaBostäder/Interior/VanligBostad${this.id}Interior/VanligBostad${this.id}Interior4.jpg"> 
                    <img class="img-fluid " src="/images/VanligaBostäder/Interior/VanligBostad${this.id}Interior/VanligBostad${this.id}Interior5.jpg"> 
                    <img class="img-fluid " src="/images/VanligaBostäder/Interior/VanligBostad${this.id}Interior/VanligBostad${this.id}Interior6.jpg">
                    <img class="img-fluid " src="/images/VanligaBostäder/Interior/VanligBostad${this.id}Interior/VanligBostad${this.id}Interior7.jpg"> 
                    <img class="img-fluid " src="/images/VanligaBostäder/Interior/VanligBostad${this.id}Interior/VanligBostad${this.id}Interior8.jpg"> 
                    <img class="img-fluid " src="/images/VanligaBostäder/Interior/VanligBostad${this.id}Interior/VanligBostad${this.id}Interior9.jpg"> 
                    <img class="img-fluid " src="/images/VanligaBostäder/Interior/VanligBostad${this.id}Interior/VanligBostad${this.id}Interior10.jpg"> 
                  </div>
                `}
                ${this.activeTab !== 'Planskiss' ? '' : `
                  <div class="row">
                    <div class="col-12">
                      <h1>Planskiss</h1>
                    </div>
                     <img class="img-fluid " src="/images/VanligaBostäder/Planskiss/Planskiss${this.id}.jpg"> 
                  </div>
                `}
                ${this.activeTab !== 'Beskrivning' ? '' : `
                  <div class="row">
                    <div class="col-12">
                      <h1>Beskrivning</h1>
                    </div>
                    <div class="col-lg-4 col-md-4 col-xs-8" style="padding: 5px">
               <img class="img-fluid " src="${this.imageUrls}" style="height: 300px;
                   width: 100%" />
           </div>
                    <div class="col-md-4">
                    
                    <p><strong><span style="color: #31B0D5;">${this.description} </span></strong></p>
                    <p>${this.LongDes}</p>
                    </div>
                  </div>
                `}
                ${this.activeTab !== 'Område' ? '' : `
                  <div class="row">
                    <div class="col-12">
                      <h1>Område</h1>
                    </div>
                    <div class="col-md-4">
                    
                    <p><strong><span style="color: #31B0D5;">${this.description} </span></strong></p>
                    <p>${this.LongDes}</p>
                    </div>
                  </div>
                `}
                ${this.activeTab !== 'Visning' ? '' : `
                  <div class="row">
                  
                    <div class="col-12">
                      <h1>Visning</h1>
                    </div>
                   
                  </div>
 <p><strong><span style="color: #31B0D5;">Ni är varmt välkommen  till visning.</span></strong> <br></p>
                    <p><strong><span style="color: #31B0D5;">Visningstid:</span> </strong>2020-05-15</p>

                `}
              </div>
            </div>        
        `}
      </div>
      `;
  }
}