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
            {
                label: 'Planskiss',
                route: '/Planskiss'
            },
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
        this.OmOssPage = new OmOssPage();
        this.KontaktaOssPage = new KontaktaOssPage();
        this.missingPage = new MissingPage();
        this.SokBostadPage = new SokBostadPage();
        this.SaljaBostadPage = new SaljaBostadPage();
        this.VaraMaklarePage = new VaraMaklarePage();
        this.NyProduktionPage = new NyProduktionPage();
        this.KopaBostadPage = new KopaBostadPage();
        this.nyBostad = new NyBostadPage();
        this.Planskiss = new Planskiss();
    }
    async sqlQueries() {
        // Which database to use
        await sql( /*sql*/ `
      USE dhyrRumson
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
          ${this.OmOssPage}
          ${this.KontaktaOssPage}
          ${this.missingPage}
          ${this.SokBostadPage}
          ${this.SaljaBostadPage}
          ${this.VaraMaklarePage}
          ${this.NyProduktionPage}
          ${this.KopaBostadPage}
          ${this.nyBostad}
          ${this.Planskiss}
          
        </main>

        ${this.footer}
        ${this.shoppingCart}
      </div>
    `;
    }

}