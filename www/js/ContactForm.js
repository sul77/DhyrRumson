class ContactForm extends Base {
    mount() {
    this.formFields = [
       { key: 'name', label: 'Namn', placeholder: 'Your name' , type: 'text'},
       { key: 'email', label: 'E-post', placeholder: 'Your email-address', type: 'email' },
       { key: 'phone', label: 'Telefon', placeholder: 'Mobile number', type: 'text'},
       { key: 'comments', label: 'Meddelande till DhyrRumson (frivilligt)', type: 'textarea' }
      ]
    }

    render() {
       if (this.saved) {
         delete this.saved;
            return /*html*/`
               <div class="col-12">
                   <h1>Tack!</h1>
                   <p>Vi kommer att kontakta dig inom kort.</p>
                   <a class="btn btn-primary float-right" href="/">To the start page</a>
               </div>
            `
          }

        return /*html*/`
          <div style="padding-top:2px;padding-left: inherit;padding-right: inherit;padding-bottom:19px;width:99%;margin:auto;border:1px solid;border-radius:16px;">
             <form class="checkout-form" submit="saveDetails">
                 ${(this.formFields || []).filter(e => e.type !== "textarea").map(e => /*html*/`
                     <div class="input-group mb-3">
                         <h4 style="display:block; text-align:left; padding-left: 10px;">${e.label}</h4>
                         <input name="${e.key}" type="${e.type}" class="form-control" placeholder="${e.placeholder}" value="" required>
                    </div>`)}

                 ${(this.formFields || []).filter(e => e.type === "textarea").map(e => /*html*/`
                      <div class="input-group mb-3">
                          <h4 style="display:block; text-align:left; padding-left: 10px;">${e.label}</h4>
                          <textarea rows="3" class="form-control" name="${e.key}" style="width:100%; height:80px" required></textarea>
                      </div>`)}

                 <div style="margin: auto;text-align: center">
                     <button type="submit" class="btn btn-primary btn-md sharp float-md-none  d-md-inline mt-3">Skicka</button>
                 </div>
            </form>
           </div>
    `; }

    async saveDetails(e) {
        e.preventDefault();
        let data = this.collectFormData(e);
        data["save"] = this.toSave;
        await sql(/*sql*/`
              INSERT INTO Form (type, name, email, telephone, comment)
              VALUES($save, $name, $email, $phone, $comments);
            `, data);

        this.saved = true
        this.render();
    }

    collectFormData(e) {
       let data = {};
       for (let element of [...e.target.closest('form').elements]) {
         if (!element.name) { continue; }
         data[element.name] = element.value;
       }
       return data;
    }

 }