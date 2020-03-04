class KontaktaOssPage extends Base {
 
  render() {
    return /*html*/`
      <div class="row" route="/kontakta-oss" page-title="Kontakta oss">
      <main>
      <div class="card mb-3">
         <img src="images/ExampleKontaktaOss1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              
              <h4 class="text-left">Kundtjänst</h4>
              
              <p class="text-left">
              Vardagar kl. 09.00-16.00   
              </p>
              <p class="text-left">
              Lunchstängt: 12:00-12:45  
              </p>
              <p class="text-left">
              Telefon: 021 000 00 00
              </p>
              <p class="text-left">
              E-post: DhyrRumson-info@hotmail.com
              </p>
              
              <h4 class="text-left"> ______ </h4>
              <h4 class="text-left"> Våra kontor </h4>
              <p class="text-left">
              Just nu befinner sig våra kontor bara på 2 ställen:
              </p>
              <p class="text-left">
                - DhyrRumsons Väg 14, Stockholm
              </p>
              <p class="text-left">
                - RumsonDhyrgatan 5,  Luleå
              </p>
              <p class="text-left">
                Ni är varmt välkommna mellan 09:00 - 15:00 Mån-Fre !
              </p>
              <h4 class="text-left"> ______ </h4>
              <h4 class="text-left"> Behov av mäklare? </h4>
              <p class="text-left">
                Om ni är i behov av att komma i kontakt med en mäklare, så besöker du oss på
              </p>
              <a href="/vara-maklare" class="btn btn-info" role="button">Våra mäklare</a>
              </button>
              
       </div>
      </div>
   </main>
      </div>
      
    `;
  }

}