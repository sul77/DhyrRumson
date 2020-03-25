class Footer extends Base {
    
    //Load BackToTop.js for stickybutton script
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/js/BackToTop.js";
        script.async = true;
        script.onload = () => this.scriptLoaded();
      
        document.body.appendChild(script);
      }

    render() {
        return /*html*/ `      
        <div class="container">
            <section style="height:80px;"></section>
            <!----------- Footer ------------>
            <footer class="footer-bs shadow-lg">
              <div class="row">
                  <div class="col-md-3 footer-brand animated fadeInLeft"> 
                  </div>
              <div class="col-md-4 footer-nav animated fadeInUp">                
                  <h4>Meny —</h4>
                  <div class="col-md-6">
                        <ul class="pages">
                            <li><a href="/">Hem</a></li>
                            <li><a href="/sok-bostad">Sök bostad</a></li>
                            <li><a href="/kopa-bostad">Köpa bostad</a></li>
                            <li><a href="/salja-bostad">Sälj bostad</a></li>
                            <li><a href="/ny-produktion">Nyproduktion</a></li>
                            <li><a href="/vara-maklare">Våra mäklare</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul class="list">
                            <li><a href="/om-oss">Om oss</a></li>
                            <li><a href="/kontakta-oss">Kontakta oss</a></li>
                            <li><a href="/integritetpolicy">Integritetspolicy</a></li> 
                            <li><a href="#">Cookies</a></li>                     
                        </ul>
                    </div>
              </div>
              <div class="col-md-2 footer-social animated fadeInDown">
                  <h4>Följ oss på —</h4>
                  <ul>
                      <li><a href="https://www.facebook.com/DhyrRumson" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                      <li><a href="https://twitter.com/DhyrRumson" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                      <li><a href="https://www.instagram.com/DhyrRumson" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
                  </div>
                 <div class="col text-center text light">
                    <a href="#" class="go-top">  
                        <img src='../images/ArrowUp.png' alt="Mäkar">        
                    </a> 
              </div>
              <div class="margin: auto;text-align: center">
                <h4 class="text-center ">© DhyrRumson 2020</h4>
            </div>
            </footer>
            <!-------- Footer ends -------->
        </div>
    `;
    }

}