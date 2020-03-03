class StartPage extends Base {

  render() {
    return /*html*/`
      <div class="row" route="/" page-title="Hem">
        <div class="col-12">
          <h1>Hem Sida</h1>
          <p>Detta är start sida.</p>

<div class="col-12 text-center">
<a class="btn btn-dark" href="/till-salu">Sök bostad</a>
</div>

        </div>
      </div>
    `;
  }

}