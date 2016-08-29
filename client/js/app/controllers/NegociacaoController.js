class NegociacaoController {
  constructor () {
    let $ = document.querySelector.bind(document);
    this._campoData = $('#data');
    this._campoQuantidade = $('#quantidade');
    this._campoValor = $('#valor');
  }

  adiciona () {
    let negociacao = new Negociacao(
      DateHelper.textoParaData(this._campoData.value),
      this._campoQuantidade.value,
      this._campoValor.value
    );

    console.log(negociacao);
  }
}
