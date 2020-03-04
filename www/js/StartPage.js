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
          <h1>Hem Sida</h1>
          <p>Detta är start sida.</p>

<div class="col-12 text-center">
<a class="btn btn-dark" href="/till-salu">Sök bostad</a>
</div>

        </div>
         
        <div style="background-color:#CDCDCD; padding-left:100px; padding-right:100px; padding-top:30px; padding-bottom:30px; margin:auto">
          <div style="text-align:center; display:block">
            <form action="/action_page.php" style="display:inline-block">
              <label style="display:block; text-align:left">Namn<span class="required" style="color:red">*</span></label>
              <input type="text" id="namn" required><br><br>
              <label style="display:block; text-align:left">Telefon<span class="required" style="color:red">*</span></label>
              <input type="tel" id="fon" required><br><br>
              <label style="display:block; text-align:left">E-post<span class="required" style="color:red">*</span></label>
              <input type="email" id="epost" required><br><br>
              <label style="display:block; text-align:left">Address<span class="required" style="color:red">*</span></label>
              <input type="text" id="address" required><br><br>
              <input type="submit" value="Submit">
            </form>
          </div>
        </div>
      </div>
    `;
  }

}