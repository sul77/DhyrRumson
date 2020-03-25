class NyDetaljPage extends Base {

  async mount() {
    //this.planskiss = new Planskiss();//
    // Get som  Address details
    let ndetails = await sql( /*sql*/ `
            SELECT * FROM nyDetaljInfo WHERE projectName = $projectName  
          `, {
      projectName: this.projectName
    });

    Object.assign(this, ndetails[0]);
  }



  render() {
    return /*html*/ `
      <div route="/ny-bostad/${this.projectName}" page-title="${this.projectName}">
       <div class="row">
          <div class="col">
            <h3>
              Projektnamn: <a href="/Housing/projectName/${this.projectName}">${this.projectName}</a>
            </h3>
            <h1>Fakta: ${this.description}</h1>
            <h4>Område: ${this.city}</h4>
               <div class="col-12 mb-3">
                <img class="img-fluid " src="/images/Nyproduktion/${this.id}.jpg">

                    <p>${this.longDes}</p>
                  </div>
                </div>
               
                   
        </div>
          
        `;
  }
}