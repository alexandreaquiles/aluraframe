class NegociacaoController {
  constructor () {
    let $ = document.querySelector.bind(document);
    this._campoData = $('#data');
    this._campoQuantidade = $('#quantidade');
    this._campoValor = $('#valor');
  }

  adiciona () {
    let data = new Date(this._campoData.value.replace(/-/g, ','));

    let negociacao = new Negociacao(
      data,
      this._campoQuantidade.value,
      this._campoValor.value
    );

    console.log(negociacao);
  }
}
