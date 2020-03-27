class NyDetaljPage extends Base {

  render() {
    return /*html*/ `
      <div route="/ny-bostad/${app.cleanName(this.projectName)}" page-title="${this.projectName}">
          <div class="row">
            <div class="col">
              <h3>
                Projektnamn: <a href="/Housing/projectName/${this.projectName}">${this.projectName}</a>
              </h3>
            <div class="nyproduktion-line"></div>
            <h1>Fakta: ${this.description}</h1>             
          <div class="row mb-5">
           <div class="col-10  mb-4">
        </div>
              <img class="img-fluid " src="${this.imageUrls}">        
             <div class="col-sm-3">   
                <div class="mb-5   mt-5" >
                   <p><strong>Område : </strong>${this.postalArea} </p>
                   <p><strong>Kommun : </strong>${this.city} </p>
              </div>
              </div>
                 <div class="col-sm-3">
                    <div class="mb-5   mt-5">
                   <p><strong>Boarea: </strong>${this.livingArea} Kvm</p>
                   <p><strong>Antal Rum: </strong>${this.totalRooms} ROK</p>
              </div>
              </div>
                <div class="col-sm-3">
                   <div class="mb-5   mt-5" >
                   <p><strong>Pris:</strong> ${this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} kr</p>
                   <p><strong>Tillträde : </strong>Q3-Q4-2020</p>
              </div>
              </div>
                <div class="col-sm-12">
                  <div class="mb-5   mt-5" >
                   <p><strong> </strong>${this.LongDes} </p>
              </div>
            </div>
          </div>
        </div>
      </div>           
      </div>
          
        `;
  }
}