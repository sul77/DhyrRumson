class SaljaBostadPage extends Base {
    mount() {
        this.f = new ContactForm({toSave:"sale"});
    }
    render() {
      return /*html*/`
      <div class="row" route="/salja-bostad" page-title="Sälja bostad">
          <img src="images/ExampleSaleHouse.jpg" height="350" class="card-img-top" alt="...">
          <div class="col-12">
              <h3 class="mt-5 mb-3">Boka värdering av din bostad</h3>
              <p>Oavsett om du vill sälja nu, eller bara vill veta vad din bostad är värd, så hjälper vi dig gärna att värdera din bostad.</p>
              ${this.f}
          </div>
      </div>`;
    }
 }

