class NyDetaljPage extends Base {
  mount() {
    this.f = new ContactForm({ toSave: "sale" });
  }
  render() {
    return /*html*/ `
      <div route="/ny-bostad/${app.cleanName(this.projectName)}" page-title="${this.projectName}">
          <div class="row">
            <div class="col">
              <h3><a href="/Housing/projectName/${this.projectName}">${this.projectName}</a>
               </h3>
            <div class="nyproduktion-line"></div>
               <h1><span style="color: black;"> ${this.description}</span></h1>             
           <div class="row mb-5">
              <div class="col-10  mb-4">
        </div>
                <img class="img-fluid " src="${this.imageUrls}">        
             <div class="col-sm-3">   
                <div class="mb-5   mt-5" >
                   <p><strong><span style="color: #31B0D5;">Område : </span></strong>${this.postalArea} </p>
                   <p><strong><span style="color: #31B0D5;">Kommun : </span></strong>${this.city} </p>
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
                  <div class="col-sm-12">
                     <div class="mb-5   mt-5" >
                        <p><strong> </strong>${this.LongDes} </p> 
                  </div>      
              </div>
                   <div class="col-md-6">
                      <div class="mt-5 mb-5">
                          <div class="CustomKontaktaOss"style="text-align:left; display:block">
                              <h1><span style="color: #31B0D5;"> Om du har fler funderingar tveka inte att kontakta oss</span></h1>  
                        </div> 
                    </div>
                 </div>
                  <div class="col-md-6">
                    <div class="mt-5 mb-5">
                         ${this.f}       
                  </div>  
              </div>
            </div>
          </div>
        </div>
      </div>           
      </div>
          
        `;
  }
}