class NavBar extends Base {

  responsiveFunk() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  render() {
    return /*html*/`
      <div class="topnav" id="myTopnav">
      <div class="ignore-css">
        <a class="navbar-brand" href="/">
         <img src='../images/logo.png' alt="Mäkar" height="42" style="margin-top:-10px;">
        </a>
      </div>
        ${this.links.map(link =>/*html*/`
          <a class="nav-link" href="${link.route}">
            ${link.label}
          </a>
        `)}
        <a href="javascript:void(0);" class="icon" click="responsiveFunk">&#9776;</a>
      </div>
    `
  }
}
