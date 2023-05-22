function enviarMensagem() {
  var mensagem = document.getElementById("mensagem").value;
  var listaMensagens = document.getElementById("mensagens");
  var novaMensagem = document.createElement("li"); // Alteração: criar um elemento <li> em vez de <mensagem>
  novaMensagem.innerText = mensagem;
  novaMensagem.classList.add("message"); // Adicionar a classe "message" para estilização da caixa
  listaMensagens.appendChild(novaMensagem);
  document.getElementById("mensagem").value = ""; // Limpar o campo de entrada após o envio da mensagem
}
