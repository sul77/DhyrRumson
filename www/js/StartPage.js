class StartPage extends Base {

  render() {
    return /*html*/`
      <div class="row" route="/" page-title="Start">
        <div class="col-12">
          <h1>Start page</h1>
          <p>This is the start page.</p>
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