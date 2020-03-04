class KopaBostadPage extends Base {

  mount() {
      this.formFields = [
            { key: 'name', label: 'Namn', placeholder: 'Your name' },
            { key: 'email', label: 'E-post', placeholder: 'Your email-address', type: 'email' },
            { key: 'phone', label: 'Telefon', placeholder: 'Mobile number' },
            { key: 'comments', label: 'Meddelande till Bjurfors (frivilligt)' }
          ]
     }

  render() {
     if (this.saved) {
       delete this.saved;
          // Thank the customer and tell he will be contacted soon
          return /*html*/`
            <div class="row" route="/kopa-bostad" page-title="Köpa bostad">
              <div class="col-12">
                <h1>Tack!</h1>
                <p>Vi kommer att kontakta dig inom kort.</p>
                <a class="btn btn-primary float-right" href="/">To the start page</a>
              </div>
            </div>
          `
        }

      return /*html*/`
      <div class="row" route="/kopa-bostad" page-title="Sälja bostad">
       <img src="images/ExampleBuyHouse.jpg" height="290"  class="card-img-top" alt="...">
       <div class="col-12">
           <h3 class="mt-5 mb-3">Boka värdering av din bostad</h3>
           <p>Oavsett om du vill sälja nu, eller bara vill veta vad din bostad är värd, så hjälper vi dig gärna att värdera din bostad.</p>
           <form class="row checkout-form" submit="saveDetails">

                  ${(this.formFields || []).map(field => /*html*/`
                  <div class="col-12">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">${field.label}</span>
                        </div>
                        <input
                          name="${field.key}"
                          type="${field.type || 'text'}"
                          class="form-control"
                          placeholder="${field.placeholder || field.label}"
                          pattern="${field.pattern || '.{2,}'}" ${field.optional ? '' : 'required'}
                          value="${(store.formData && store.formData[field.key]) || ''}"
                        >
                      </div>
                    </div>
                  `)}


              <div class="col-12 checkout-buttons">
                <button type="submit" class="btn btn-primary float-md-right d-block d-md-inline mt-3">Skicka</button>
                <button type="button" click="resetFields" class="btn btn-secondary float-md-right d-block d-md-inline mt-3 mr-md-3">Empty fields</button>
               </div>

           </form>
       </div>

       </div>

  `; }

  async saveDetails(e) {
         e.preventDefault();
         let data = this.collectFormData(e);
         await sql(/*sql*/`
               INSERT INTO Form (type, name, email, telephone, comment)
               VALUES('buy', $name, $email, $phone, $comments);
             `, data);

         this.saved = true
         this.render();
    }

    collectFormData(e) {
        // Loop through the form and collect the input
        let data = {}; // map
        for (let element of [...e.target.closest('form').elements]) {
          if (!element.name) { continue; }
          data[element.name] = element.value;
        }
        return data;
    }

    async resetFields(e) {
     for (let element of [...e.target.closest('form').elements]) {
          element.value = '';
        }
    }

 }

