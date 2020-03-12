class NavBar extends Base {

    render() {
            return /*html*/ `
      <nav class="navbar navbar-expand-lg navbar-light font-weight-bold bg-light shadow-lg p-3 bg-white rounded border">
        <a class="navbar-brand" href="/">
         <img src='../images/logo.png' alt="Mäkar" height="42" style="margin-top:-15px;">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            ${this.links.map(link => !link.dropdown ? /*html*/`
              <li class="nav-item">
                <a class="nav-link" href="${link.route}">
                  ${link.label}
                </a>
              </li>
          ` : /*html*/`
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="${link.route}"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ${link.label}
                </a>
                <div class="dropdown-menu scrollable-menu" aria-labelledby="navbarDropdownMenuLink">
                  ${link.dropdown.map(item => /*html*/`
                    <a class="dropdown-item" href="${item.route}">${item.label}</a>
                  `)}
                </div>
              </li>
          `)}
          </ul>
        </div>
      </nav>
    `
  }

}