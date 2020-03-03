class App extends Base {

  mount() {
    this.navBarLinks = [
      { label: 'Welcome', route: '/' },
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
      <div base-title="Minimal: ">
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