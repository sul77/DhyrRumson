class BostadPage extends Base {
   
    async mount() {
        // Get complete Address details
        let details = await sql( /*sql*/ `
          SELECT * FROM BostadInfo WHERE id = $id
        `, {
            id: this.id,
            streetName: this.streetName,
            city: this.city
        });
        Object.assign(this, details[0]);
    }

    render() {
        return /*html*/ `
      <div route="/bostad/${this.id}" page-title="${this.streetName}">
            <div class="row">
                <div class="col"> 
                        <h1>${this.streetName}</h1>
                        <h4 class="mb-3">${this.city}</h4>
                <div class="row mt-n4 mt-lg-0">
            <div class="col-md-12">
              
            
          </div>
        </div>
      </div>
      </div>
    </div>
        
      `;
    }

}