class SokBostadPage extends Base {
  mount() {
    this.sokbar = new Sokbar();
  }

  render() {
    return /*html*/`
      <div class="row" route="/sok-bostad" page-title="Sök bostad">
        <main>
           <div class="mb-3">
              ${this.sokbar}
            </div>
        </main> 
      </div>
      
    `;
  }

}