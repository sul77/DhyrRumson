class StartPage extends Base {
  async mount() {
    this.carousel = new StartPageCarousel();
  }

  render() {
    return /*html*/`
      <div class="row" route="/" page-title="Hem">
        <div style="margin:auto">
        ${this.carousel}
        </div> 
<div class="col-12">
<div class="col-12 text-center">
<a class="btn btn-dark btn-md sharp" href="/sok-bostad">Sök bostad</a>
</div>

        </div>
<div class="card-group">
  <div class="card">
    <img class="card-img-top" src='../images/ExampleEstate1.jpg' alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">FRILIGGANDE VILLA

      <p>Persön, Luleå</p></h5>
      <p class="card-text">ADRESS:.........................................Månsgårdsvägen 7</p>
      <p class="card-text">UTGÅNGSPRIS:.........................................2 000 000 kr</p>
      <p class="card-text">BOAREA:........................................................50kvm</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  <div class="card">
    <img class="card-img-top" src='../images/ExampleEstate2.jpg' alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">BOSTADSRÄTTSLÄGENHET

      <p>Stallhagen, Västerås</p></h5>
      <p class="card-text">ADRESS:.........................................Nanna Svartz Gata 5</p>
      <p class="card-text">UTGÅNGSPRIS:.........................................2 095 000 kr</p>
      <p class="card-text">BOAREA:........................................................70kvm</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  
  <div class="card">
    <img class="card-img-top" src='../images/ExampleEstate3.jpg' alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">BOSTADSRÄTTSLÄGENHET
       <p>Sibbarp, Malmö</p></h5>
       <p class="card-text">ADRESS:..................................Hammars Parkväg 28B</p>
      <p class="card-text">UTGÅNGSPRIS:.........................................3 195 000 kr</p>
      <p class="card-text">BOAREA:........................................................88kvm</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

<div class = "col-12">
  <h2>Möt några av Sveriges bästa mäklare</h2>
</div>
        
        <div style="background-color:#CDCDCD; padding-top:10px; padding-bottom:10px; width:40%; margin:auto">
          <div style="text-align:center; display:block">
            <form action="/action_page.php" style="display:inline-block;width:50%">
              <label style="display:block; text-align:left">Namn<span class="required" style="color:red">*</span></label>
              <input type="text" id="namn" style="width:100%; height:40px" required><br><br>
              <label style="display:block; text-align:left">Telefon<span class="required" style="color:red">*</span></label>
              <input type="tel" id="fon" style="width:100%; height:40px" required><br><br>
              <label style="display:block; text-align:left">E-post<span class="required" style="color:red">*</span></label>
              <input type="email" id="epost" style="width:100%; height:40px" required><br><br>
              <label style="display:block; text-align:left">Address<span class="required" style="color:red">*</span></label>
              <textarea rows="3" id="address" style="width:100%; height:30px" required></textarea><br><br>
              <input type="submit"  style="width:50%; height:40px" value="Submit">
            </form>
          </div>
        </div>
      </div>
    `;
  }

}