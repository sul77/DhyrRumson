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
        <div class= "col-12 text-center">
         <h3 class= "text-info">Möt några av Svergies bästa mäklare</h3>
            <p style="font-size: 15px;">
            I alla affärer jobbar vi aktivt med vårt köparregister Boagenten där över 7.000 köpklara spekulanter i Stockholmsregionen längtar efter rätt bostad.Vi har bästa mäklare som jobbar hos oss .
            </p>
        </div>
       ${this.brokers.map(broker => `
             <div class="col-md-6 mt-5" style="font-size: 15px;">
              <div class="col-md-12 shadow-lg">
               <div class="col-md-12">
                <div class="col-md-3">
                  <img src="${broker.imgSrc}" style="width:100px">
                </div>
                <div class="col-md-6 mt-5 ml-5">
                  <p><strong> ${broker.firstName} ${broker.lastName}</strong></p>
                  <p><strong>Email: </strong>
                   <a href="mailto:${broker.email}">${broker.email}</a>
                  </p>
                  <p><strong>Telephone: </strong>${broker.telephone}</p>
               </div>
              </div>
              <div class="col-md-12 mt-5 pb-5 ">${broker.description}</div>
              </div>
            </div>
      `)}
    </div>`;
  }
}