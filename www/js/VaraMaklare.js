class VaraMaklarePage extends Base {
  async mount() {
    this.brokers = await sql(/*sql*/`
       SELECT Broker.firstName, Broker.lastName, Broker.email, 
       Broker.telephone, Broker.description, Broker.image AS imgSrc
       FROM Broker 
    `);
    
    //Bara för att image url är inte sparat i databasen. 
    this.brokers.forEach((broker, index) => {
      broker.imgSrc = "../images/mäklare/Broker" + (index + 1) +".jpg"
    });
  }

  render() {
    return /*html*/`
      <div class="row" route="/vara-maklare" page-title="Våra mäklare">

       ${this.brokers.map(broker => `
            <div class="col-md-6 mt-5 text-center">
                <img src="${broker.imgSrc}" class="img-fluid mb-2">
                <div class="mt-2 border border-light">
                 <h3><strong> ${broker.firstName} ${broker.lastName}</strong></h3>
                 <h4><strong>Email: </strong>${broker.email}</h4>
                 <h4><strong>Telephone: </strong>${broker.telephone}</h4>
                 <h4><strong>Kort om mig: </strong>${broker.description}</h4>
                </div>              
             </div>
      `)}
    </div>`;
  }
}