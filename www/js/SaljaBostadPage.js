class SaljaBostadPage extends Base {
    mount() {
        this.f = new ContactForm({ toSave: "sale" });
    }
    render() {
        return /*html*/`
      <div class="row" route="/salja-bostad" page-title="Sälja bostad">
        <div class="card mb-3 shadow-lg">
                <img src="images/ExampleSellHouse.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                 <div class="col-12">
                     <h3 class="mt-5 mb-3" style="color: #31B0D5">Boka värdering av din bostad</h3>
                     <p>Oavsett om du vill sälja nu, eller bara vill veta vad din bostad är värd, så hjälper vi dig gärna att värdera din bostad.</p>
                 </div>
            </div>     
        </div>  
            <div class="CustomKontaktaOss"style="text-align:center; display:block">
                <h2>Nå oss med formulär</h2>
            </div>
        ${this.f}       
      </div>`;
    }
}

