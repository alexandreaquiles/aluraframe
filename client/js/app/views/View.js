class View {
  constructor(elemento) {
      this._elemento = elemento;
  }

  template(model) {
    throw new Error('O método template(model) deve ser sobrescrito.');
  }

  update(model) {
      this._elemento.innerHTML = this.template(model);
  }
}
