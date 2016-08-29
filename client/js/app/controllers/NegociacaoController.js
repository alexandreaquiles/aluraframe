class NegociacaoController {
  constructor () {
    let $ = document.querySelector.bind(document);
    this._campoData = $('#data');
    this._campoQuantidade = $('#quantidade');
    this._campoValor = $('#valor');

    this._listaNegociacoes = new ListaNegociacoes();

    this._listaNegociacoesView = new ListaNegociacoesView($('#negociacoes'));
  }

  adiciona () {
    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._listaNegociacoesView.update(this._listaNegociacoes);
    this._limpaFormulario();
  }

  _criaNegociacao () {
    return new Negociacao(
      DateHelper.textoParaData(this._campoData.value),
      parseInt(this._campoQuantidade.value),
      parseFloat(this._campoValor.value)
    );
  }

  _limpaFormulario () {
    this._campoData.value = '';
    this._campoQuantidade.value = 1;
    this._campoValor.value = 0.0;
  }
}
