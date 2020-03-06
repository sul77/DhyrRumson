class Sokbar extends Base {
  mount() {
    this.foundCities = [];
    this.selected = -1;
    sql(/*sql*/`USE dhyrRumson`);
  }

  clickCity(e) {
    this.foundCities = [];
    this.selected = -1;
    this.chosen = e.target.innerText;
    this.render();
  }

  selectWithUpDownArrows(e) {
    if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault();
      this.selected += (e.key === 'ArrowDown') - (e.key === 'ArrowUp');
      if (this.selected < 0) { this.selected = this.foundCities.length - 1; }
      if (this.selected >= this.foundCities.length) { this.selected = 0; }
      this.render();
      return;
    }
  }

  async searchCity(e) {
    try {
      if (['ArrowUp', 'ArrowDown'].includes(e.key)) { return; }
      if (e.key === 'Enter' && this.selected >= 0) {
        this.chosen = this.foundCities[this.selected].name;
        this.foundCities = [];
        this.selected = -1;
        this.render();
        return;
      }
      this.selected = 0;
      this.foundCities = e.target.value.length < 1 ? [] : await sql(/*sql*/`
      SELECT name FROM cities WHERE name LIKE $name 
    `, {
        name: e.target.value + '%'
      });
      this.render();
    }
    catch (e) {
      console.log(e.message)
    }
  }

  render() {
    return /*html*/`
      <div class="container">
        <div class="row mt-5">
          <div class="col-12">
            <h1>Var vill du bo?</h1>
            <div class="dropdown">
              <input class="form-control" type="text" placeholder="Ort" keyup="searchCity" keydown="selectWithUpDownArrows" autocomplete="off" autocorrect="off">
              ${this.foundCities.length < 1 ? '' : /*html*/`
                <div class="dropdown-menu show w-100 position-absolute search-dropdown">
                  ${this.foundCities.map((city, index) => /*html*/`
                    <button click="clickCity" class="dropdown-item ${this.selected !== index ? '' : 'bg-primary text-light'}" type="button">${city.name}</button>
                  `)}
                </div>
              `}
             </div>
             ${!this.chosen ? '' : /*html*/`
              <h4 class="mt-5">Du valde: ${this.chosen}</h4>
            `}
          </div>
        </div>
      </div>
      `;
  }
}