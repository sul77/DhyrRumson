class SaljaBostadPage extends Base {

  mount() {
      this.formFields = [
            { key: 'name', label: 'Name', placeholder: 'Your name' },
            { key: 'email', label: 'Email', placeholder: 'Your email-address', type: 'email' },
            { key: 'phone', label: 'Phone', placeholder: 'Mobile number' },
            { key: 'comments', label: 'Comments' }
          ]
     }

  async resetFields(e) {
   for (let element of [...e.target.closest('form').elements]) {
        element.value = '';
      }
  }

  async saveSaleDetails(e) {
    console.log("TODO: save in database")
  }

  render() {
     if (this.saved) {
        return this.thankYou();
      }
      return /*html*/`
      <div class="row" route="/salja-bostad" page-title="Sälja bostad">
       <img src="images/ExampleSaleHouse.jpg" height="290"  class="card-img-top" alt="...">
       <div class="col-12">
           <h3 class="mt-5 mb-3">Boka värdering av din bostad</h3>
           <p>Oavsett om du vill sälja nu, eller bara vill veta vad din bostad är värd, så hjälper vi dig gärna att värdera din bostad.</p>
           <form class="row checkout-form" submit="saveSaleDetails">

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
                <button type="submit" class="btn btn-primary float-md-right d-block d-md-inline mt-3">Submit</button>
                <button type="button" click="resetFields" class="btn btn-secondary float-md-right d-block d-md-inline mt-3 mr-md-3">Empty fields</button>
               </div>

           </form>
       </div>

       </div>

  `; } }