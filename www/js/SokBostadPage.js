class SokBostadPage extends Base {
  mount() {
    this.searchBar = new SearchBar();
  }

  render() {
    return /*html*/`
      <div class="row" route="/sok-bostad" page-title="Sök bostad">
        <main>
           <div class="mb-3">
              ${this.searchBar}
            </div>
        </main> 
      </div>
      
    `;
  }

}