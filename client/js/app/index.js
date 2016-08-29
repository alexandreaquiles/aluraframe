let negociacaoController = new NegociacaoController();

document.querySelector('.form')
.addEventListener('submit', function (e) {
  e.preventDefault();

  negociacaoController.adiciona();
});
