class VaraMaklarePage extends Base {
  async mount() {
    this.brokers = await sql(/*sql*/`
       SELECT Broker.firstName, Broker.lastName, Broker.email, 
       Broker.telephone, Broker.description, Broker.image AS imgSrc
       FROM Broker 
    `);
  }

  render() {
    return /*html*/`
      <div class="row" route="/vara-maklare" page-title="Våra mäklare">

       ${this.brokers.map(broker => `
            <div class="col-md-6 mt-5">
                <img src="${broker.imgSrc}" class="img-fluid mb-2">
                <div class="text-center mt-2 border border-light">
                 <h4>${broker.lastName} ${broker.firstname}</h4>
                 <h4><strong>Email: </strong>${broker.email}</h4>
                 <h4><strong>Telephone: </strong>${broker.telephone}</h4>
                 <h4><strong>Kort om mig: </strong>${broker.description}</h4>
                </div>              
             </div>
      `)}
    </div>`;
  }
}