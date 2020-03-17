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
            <div class="col-md-6 shadow-lg p-3 bg-white rounded">
              <div class="col-md-12">
                <div class="col-md-3">
                  <img src="${broker.imgSrc}" style="width:130px">
                </div>
                <div class="col-md-6 mt-5 ml-5">
                  <h5><strong> ${broker.firstName} ${broker.lastName}</strong></h5>
                  <h5><strong>Email: </strong>${broker.email}</h5>
                  <h5><strong>Telephone: </strong>${broker.telephone}</h5>
               </div>
              </div>
              <div class="col-md-12 mt-5 pb-5 text-justify">${broker.description}</div>
            </div>
      `)}
    </div>`;
  }
}