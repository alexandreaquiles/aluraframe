class ListaNegociacoesView {
  constructor(elemento) {
      this._elemento = elemento;
  }

  _template(lista) {
    return `
      <table class="table table-hover table-bordered">
          <thead>
              <tr>
                  <th>DATA</th>
                  <th>QUANTIDADE</th>
                  <th>VALOR</th>
                  <th>VOLUME</th>
              </tr>
          </thead>
          <tbody>
              ${lista.negociacoes.map(n => `
                  <tr>
                      <td>${DateHelper.dataParaTexto(n.data)}</td>
                      <td>${n.quantidade}</td>
                      <td>${n.valor}</td>
                      <td>${n.volume}</td>
                  </tr>
              `).join('')}
          </tbody>
          <tfoot>
              <td colspan="4">
                  <span class="pull-right">Total: ${lista.total}</span>
              </td>
          </tfoot>
      </table>
      `;
  }

  update(model) {
      this._elemento.innerHTML = this._template(model);
  }
}
