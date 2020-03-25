class App extends Base {

  async mount() {

    await this.sqlQueries();
    this.navBarLinks = [{
      label: 'Hem',
      route: '/'
    },
    {
      label: 'Sök bostad',
      route: '/sok-bostad'
    },
    {
      label: 'Köpa bostad',
      route: '/kopa-bostad'
    },
    {
      label: 'Sälja bostad',
      route: '/salja-bostad'
    },
    {
      label: 'Nyproduktion',
      route: '/Ny-produktion'
    },
    {
      label: 'Våra mäklare',
      route: '/vara-maklare'
    },
    {
      label: 'Kontakta oss',
      route: '/Kontakta-Oss'
    },
    //{
    // label: 'Planskiss',
    //route: '/Planskiss'
    //},
    {
      label: 'Om oss',
      route: '/Om-Oss'
    }
    ];
    this.navBar = new NavBar({
      links: this.navBarLinks
    });
    this.footer = new Footer();
    this.startPage = new StartPage();
    this.omOssPage = new OmOssPage();
    this.KontaktaOssPage = new KontaktaOssPage();
    this.missingPage = new MissingPage();
    this.sokBostadPage = new SokBostadPage();
    this.saljaBostadPage = new SaljaBostadPage();
    this.varaMaklarePage = new VaraMaklarePage();
    this.nyProduktionPage = new NyProduktionPage();
    this.kopaBostadPage = new KopaBostadPage();
    this.nyBostad = new NyBostadPage();
    this.byggHerre = new ByggHerrePage();
    this.planskiss = new Planskiss();
    this.integritetPolicyPage = new IntegritetPolicyPage();
  }

  async sqlQueries() {
    // Which database to use
    await sql( /*sql*/ `
      USE dhyrRumson
    `);
    
    // Create nyBostad pages from a db query
    this.bostadPages = await sql(BostadPage, /*sql*/ `
      SELECT * FROM BostadInfo
    `);
  }

  render() {
    return /*html*/ `
    
      <div style="color:'white'" base-title="Minimal: ">
        <header>
          ${this.navBar}
        </header>
        <main class="container">
          ${this.startPage}
          ${this.omOssPage}
          ${this.kontaktaOssPage}
          ${this.missingPage}
          ${this.sokBostadPage}
          ${this.saljaBostadPage}
          ${this.varaMaklarePage}
          ${this.nyProduktionPage}
          ${this.kopaBostadPage}
          ${this.nyBostad}
          ${this.integritetPolicyPage}    
          ${this.bostadPages}
          ${this.byggHerre}
          ${this.planskiss}
        </main>
            <div class="sidenav">
                <img src="/images/BorderImageLeft.png" class="rounded float-left" alt="...">
                </div>
                <div class="sidenav2">
                <img src="/images/BorderImageRight.png" class="rounded float-right" alt="...">
            </div>

        ${this.footer}
        ${this.shoppingCart}
      </div>
    `;
  }

}