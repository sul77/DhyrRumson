class App extends Base {

  async mount() {
    await this.sqlQueries();
    this.navBarLinks = [
      { label: 'Hem', route: '/' },
      { label: 'Till salu', route: '/till-salu' },
      { label: 'Sälja bostad', route: '/salja-bostad' },
      { label: 'Nyproduktion', route: '/Ny-produktion' },
      { label: 'Våra mäklare', route: '/vara-maklare' },
      { label: 'Kontakta oss', route: '/Kontakta-Oss' },
      { label: 'Om oss', route: '/Om-Oss' }
    ];
    this.navBar = new NavBar({ links: this.navBarLinks });
    this.footer = new Footer();
    this.startPage = new StartPage();
    this.OmOssPage = new OmOssPage();
    this.KontaktaOssPage = new KontaktaOssPage();
    this.missingPage = new MissingPage();
    this.TillSaluPage = new TillSaluPage();
    this.SaljaBostadPage = new SaljaBostadPage();
    this.VaraMaklarePage = new VaraMaklarePage();
    this.NyProduktionPage = new NyProduktionPage();
  }
  async sqlQueries() {
    // Which database to use
    await sql(/*sql*/`
      USE dhyrRumson
    `);
  }

  render() {
    return /*html*/`
    
      <div style="color:'white'" base-title="Minimal: ">
        <header>
          ${this.navBar}
        </header>
        <main class="container my-4">
          ${this.startPage}
          ${this.OmOssPage}
          ${this.KontaktaOssPage}
          ${this.missingPage}
          ${this.TillSaluPage}
          ${this.SaljaBostadPage}
          ${this.VaraMaklarePage}
          ${this.NyProduktionPage}

        </main>
        ${this.footer}
        ${this.shoppingCart}
      </div>
    `;
  }

}