document.querySelector('.form')
.addEventListener('submit', function (e) {
  e.preventDefault();

  var campoData = document.querySelector('#data');
  var campoQuantidade = document.querySelector('#quantidade');
  var campoValor = document.querySelector('#valor');

  var tdData = document.createElement('td');
  tdData.textContent = campoData.value;

  var tdQuantidade = document.createElement('td');
  tdQuantidade.textContent = campoQuantidade.value;

  var tdValor = document.createElement('td');
  tdValor.textContent = campoValor.value;

  var tdVolume = document.createElement('td');
  tdVolume.textContent = campoValor.value * campoQuantidade.value;

  var trNegociacao = document.createElement('tr');
  trNegociacao.appendChild(tdData);
  trNegociacao.appendChild(tdQuantidade);
  trNegociacao.appendChild(tdValor);
  trNegociacao.appendChild(tdVolume);

  document.querySelector('table tbody').appendChild(trNegociacao);

  campoData.value = '';
  campoQuantidade.value = 1;
  campoValor.value = 0;

  campoData.focus();
});
