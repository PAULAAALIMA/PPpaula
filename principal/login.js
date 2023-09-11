// function verificarLogin() {
//     var nome = document.getElementById('Usuário').value;
//     var senha = document.getElementById('senha').value;


//     if (nome === 'usuario' && senha === 'senha') {
//       alert('Login bem-sucedido!');
//     } else {
//       alert('Nome de usuário ou senha inválidos. Tente novamente!');
//     }
//   }


const botao2 = document.getElementById('botao2');


botao2.addEventListener('click', function(event){
  event.preventDefault()
  window.location.href = 'principal.html'

})
