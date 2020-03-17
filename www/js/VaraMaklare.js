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
            <div class="col-md-6 shadow-lg p-3 bg-white rounded" style="font-size: 17px;">
              <div class="col-md-12">
                <div class="col-md-3">
                  <img src="${broker.imgSrc}" style="width:130px">
                </div>
                <div class="col-md-6 mt-5 ml-5">
                  <p><strong> ${broker.firstName} ${broker.lastName}</strong></p>
                  <p><strong>Email: </strong>
                   <a href="mailto:${broker.email}">${broker.email}</a>
                  </p>
                  <p><strong>Telephone: </strong>${broker.telephone}</p>
               </div>
              </div>
              <div class="col-md-12 mt-5 pb-5">${broker.description}</div>
            </div>
      `)}
    </div>`;
  }
}