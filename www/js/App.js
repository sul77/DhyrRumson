class App extends Base {

  mount() {
    this.navBarLinks = [
      { label: 'Hem', route: '/' },
      { label: 'Till Salu', route: '/Om-Oss' },
      { label: 'Salja bostad', route: '/Om-Oss' },
      { label: 'Vra maklare', route: '/Om-Oss' },
      { label: 'Kontakta oss', route: '/Om-Oss' },
      { label: 'Om oss', route: '/Om-Oss' }
    ];
    this.navBar = new NavBar({ links: this.navBarLinks });
    this.footer = new Footer();
    this.startPage = new StartPage();
    this.OmOssPage = new OmOssPage();
    this.missingPage = new MissingPage();
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
          ${this.missingPage}
        </main>
        ${this.footer}
        ${this.shoppingCart}
      </div>
    `;
  }

}