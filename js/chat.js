function enviarMensagem() {
    var mensagem = document.getElementById("mensagem").value;
    var listaMensagens = document.getElementById("mensagens");
    var novaMensagem = document.createElement("li");
    novaMensagem.innerText = mensagem;
    listaMensagens.appendChild(novaMensagem);
  }