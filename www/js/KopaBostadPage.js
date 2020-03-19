class KopaBostadPage extends Base {
    mount() {
        this.f = new ContactForm({
            toSave: "buy"
        });
    }
    render() {
        return /*html*/ `
        <div class="row" route="/kopa-bostad" page-title="Köpa bostad">
            <div class="card mb-3">
                 <img src="images/ExampleBuyHouse.jpg" class="card-img-top" alt="...">
             <div class="card-body">
          
                <div class="col-12">
                    <h3 class="mt-5 mb-3">Boka värdering av din bostad</h3>
                    <p>Oavsett om du vill sälja nu, eller bara vill veta vad din bostad är värd, så hjälper vi dig gärna att värdera din bostad.</p>
                    ${this.f}
                </div>
             </div>
            </div>
        </div>`;
    }
}