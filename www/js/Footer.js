class Footer extends Base {


  backToTop(){      //backToTop function is created
    document.body.scrollTop = 0;              //Scroll to the top for Safari
    document.documentElement.scrollTop = 0;   //Scroll to the top for Chrome, Firefox, IE, and Opera
  }                 //backToTop function ends

  render() {
    return /*html*/`
    <div class="container">
    <section style="height:80px;"></section>
    <!----------- Footer ------------>
    <footer class="footer-bs">
        <div class="row">
        	<div class="col-md-3 footer-brand animated fadeInLeft">
               <a class="navbar-brand" href="/">
                <img src='../images/logo.png' alt="Mäkar" height="100" width="100">
               </a>
               
                
            </div>
        	<div class="col-md-4 footer-nav animated fadeInUp">
            	<h4>Meny —</h4>
            	<div class="col-md-6">
                    <ul class="pages">
                        <li><a href="/">Hem</a></li>
                        <li><a href="/sok-bostad">Sök bostad</a></li>
                        <li><a href="/salja-bostad">Sälj bostad</a></li>
                        <li><a href="/ny-produktion">Nyproduktion</a></li>
                        <li><a href="/vara-maklare">Våra mäklare</a></li>
                    </ul>
                </div>
            	  <div class="col-md-6">
                    <ul class="list">
                        <li><a href="/om-oss">Om oss</a></li>
                        <li><a href="/kontakta-oss">Kontakta oss</a></li>
                        <li><a href="#">Cookies</a></li>                     
                    </ul>
                </div>
            </div>
        	<div class="col-md-2 footer-social animated fadeInDown">
            	<h4>Följ oss på:</h4>
            	<ul>
                	<li><a href="#">Facebook</a></li>
                	<li><a href="#">Twitter</a></li>
                	<li><a href="#">Instagram</a></li>
                </ul>
            </div>
        	
        </div>
        <div class="margin: auto;text-align: center">
          <p>
            © DhyrRumson 2020 
          </p>
        </div>
    </footer>
    <!-------- Footer ends -------->
        <div class="margin: auto;text-align: center">
          <div class="col text-center text light">
           <button type="button" class="btn btn-link" click="backToTop">  <!-- link-type button that calls for 'backToTop' function -->
              [Tillbaka till toppen]          <!-- '[Back To Top]' receives the button link -->
           </button>                                                      <!-- button ends -->
          </div>
        </div>
        
  </div>
    `;
  }

}