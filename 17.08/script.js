function getAddress() {
  const cep = document.querySelector('#cep').value
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(data => data.json())
  .then(data => this.showAddress(data));
}

function showAddress(address) {
  document.querySelector("#address").innerHTML =
    `${address.logradouro} ${address.complemento},<br/>
    ${address.bairro}<br/>${address.localidade}, ${address.uf}`;
}