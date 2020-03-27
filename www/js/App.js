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
                label: 'Om oss',
                route: '/Om-Oss'
            },
            {
                label: 'Kontakta oss',
                route: '/Kontakta-Oss'
            }

        ];


        this.navBar = new NavBar({
            links: this.navBarLinks
        });
        this.footer = new Footer();
        this.startPage = new StartPage();
        this.omOssPage = new OmOssPage();
        this.kontaktaOssPage = new KontaktaOssPage();
        this.missingPage = new MissingPage();
        this.sokBostadPage = new SokBostadPage();
        this.saljaBostadPage = new SaljaBostadPage();
        this.varaMaklarePage = new VaraMaklarePage();
        this.nyProduktionPage = new NyProduktionPage();
        this.kopaBostadPage = new KopaBostadPage();
        this.nyBostad = new NyBostadPage();
        this.byggHerre = new ByggHerrePage();
        this.planskiss = new Planskiss();
        this.imagePlanskiss = new ImagePlanskiss();
        this.integritetPolicyPage = new IntegritetPolicyPage();
    }

    async sqlQueries() {
        // Which database to use
        await sql( /*sql*/ `
      USE dhyrRumson
    `);

        // DEN HÄR KODEN HADE FÖRSVUNNIT HELT!!!
        this.bostadPages = await sql(BostadPage, /*sql*/ `
      SELECT * FROM Housing
    `);

        // Create nyBostad pages from a db query
        this.nyDetaljPages = await sql(NyDetaljPage, /*sql*/ `
      SELECT * FROM nyDetaljInfo
    `);
    }

    cleanName(x) {
        // remove å, ä, ö in names that will be used in urls
        let toReplace = {
            'å': 'a',
            'ä': 'a',
            'ö': 'o',
            'Å': 'å',
            'Ä': 'ä',
            'Ö': 'O',
        };
        for (let [key, val] of Object.entries(toReplace)) {
            x = x.split(key).join(val);
        }
        return x;
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
          ${this.nyDetaljPages}
          ${this.ImagePlanskiss}
        </main>
        ${this.footer}
        ${this.shoppingCart}
      </div>
    `;
    }

}