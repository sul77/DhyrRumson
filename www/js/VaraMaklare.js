class VaraMaklarePage extends Base {
  async mount() {
    this.brokers = await sql(/*sql*/`
       SELECT Broker.firstName, Broker.lastName, Broker.email, 
       Broker.telephone, Broker.description, Broker.image AS imgSrc
       FROM Broker 
    `);
    
    for (let Broker of this.brokers) {
      Broker.imageUrls ;
    }

    console.log(this.brokers)
  }

  render() {
    return /*html*/`
      <div class="row" route="/vara-maklare" page-title="Våra mäklare">

       ${this.brokers.map(broker => `
      

 

            <div class="col-md-4 mt-4 border">
              <div clss="col-md-12">
                <div clss="col-md-4 text-center" style="display: inline-block;">
                  <img src="${broker.imgSrc}" style="width:150px">
                </div>
                <div clss="col-md-6" style="display: inline-block;">
                  <h5><strong> ${broker.firstName} ${broker.lastName}</strong></h5>
                  <h5><strong>Email: </strong>${broker.email}</h5>
                  <h5><strong>Telephone: </strong>${broker.telephone}</h5>
              </div>
              </div>
              <div clss="col-md-12 mt-2">${broker.description}</div>
            </div>

           
      `)}
    </div>`;
  }
}