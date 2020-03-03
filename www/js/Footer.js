class Footer extends Base {

  backToTop(){      //backToTop function is created
    document.body.scrollTop = 0;              //Scroll to the top for Safari
    document.documentElement.scrollTop = 0;   //Scroll to the top for Chrome, Firefox, IE, and Opera
  }                 //backToTop function ends

  render() {
    return /*html*/`
      <footer class="bg-primary p-4 container-fluid">
        <div class="row">
          <div class="col text-center text light">
           <button type="button" class="btn btn-link" click="backToTop">  <!-- link-type button that calls for 'backToTop' function -->
              [Back to Top]          <!-- '[Back To Top]' receives the button link -->
           </button>                                                      <!-- button ends -->
          </div>
        </div> 

        <div class="row">
         <div class="col text-center text-light">
            © DhyrRumson
          </div>
        </div>
      </footer>
    `;
  }

}