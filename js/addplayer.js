function adicionarJogador() {
    // Obtém as informações do novo jogador
    var nomeJogador = prompt("Enter the player's name:");
    var idadeJogador = prompt("Enter the player's age:");
    var posicaoJogador = prompt("Enter the player's position:");
    var numeroJogador = prompt("Enter the player's number:");
    var golosJogador = prompt("Enter the number of goals scored by the player:");
    var assistenciasJogador = prompt("Enter the number of assists made by the player:");
    var caJogador = prompt("Enter the number of yellow cards received by the player:");
    var cvJogador = prompt("Enter the number of red cards received by the player:");

  
    // Manipula a tabela para adicionar o novo jogador
    var tabela = document.getElementById("tabela_jogadores");
    var novaLinha = tabela.insertRow();
  
    // Insere as células com as informações do jogador
    var celulaNome = novaLinha.insertCell();
    celulaNome.innerHTML = nomeJogador;
  
    var celulaIdade = novaLinha.insertCell();
    celulaIdade.innerHTML = idadeJogador;
  
    var celulaPosicao = novaLinha.insertCell();
    celulaPosicao.innerHTML = posicaoJogador;
  
    var celulaNumero = novaLinha.insertCell();
    celulaNumero.innerHTML = numeroJogador;
  
    var celulaGolos = novaLinha.insertCell();
    celulaGolos.innerHTML = golosJogador;
  
    var celulaAssistencias = novaLinha.insertCell();
    celulaAssistencias.innerHTML = assistenciasJogador;
  
    var celulaCA = novaLinha.insertCell();
    celulaCA.innerHTML = caJogador;
  
    var celulaCV = novaLinha.insertCell();
    celulaCV.innerHTML = cvJogador;

    var celulaEditar = novaLinha.insertCell();
    celulaEditar.innerHTML = '<button class="editar" onclick="editarJogador(event)">Editar</button>';
  }
  
  var botaoAdicionar = document.getElementById("addPlayer");
  botaoAdicionar.addEventListener("click", adicionarJogador);




var botoesEditar = document.getElementsByClassName("editar");

// Adiciona um evento de clique a cada botão
for (var i = 0; i < botoesEditar.length; i++) {
  botoesEditar[i].addEventListener("click", editarJogador);
}

// Função para editar os dados de um jogador
function editarJogador(event) {
  var linha = event.target.parentNode.parentNode;
  
  // Obtém os dados atuais do jogador
  var nome = linha.cells[0].textContent;
  var idade = linha.cells[1].textContent;
  var posicao = linha.cells[2].textContent;
  var numero = linha.cells[3].textContent;
  var golos = linha.cells[4].textContent;
  var assistencias = linha.cells[5].textContent;
  var ca = linha.cells[6].textContent;
  var cv = linha.cells[7].textContent;

  // Solicita os novos valores usando prompts
  var novoNome = prompt("Enter the new player's name:", nome);
  var novaIdade = prompt("Enter the new player's age:", idade);
  var novaPosicao = prompt("Enter the new player's position:", posicao);
  var novoNumero = prompt("Enter the new player's number:", numero);
  var novosGolos = prompt("Enter the new number of goals scored by the player:", golos);
  var novasAssistencias = prompt("Enter the new number of assists made by the player:", assistencias);
  var novoCA = prompt("Enter the new number of yellow cards received by the player:", ca);
  var novoCV = prompt("Enter the new number of red cards received by the player:", cv);
  
  // Atualiza os valores na tabela
  linha.cells[0].textContent = novoNome;
  linha.cells[1].textContent = novaIdade;
  linha.cells[2].textContent = novaPosicao;
  linha.cells[3].textContent = novoNumero;
  linha.cells[4].textContent = novosGolos;
  linha.cells[5].textContent = novasAssistencias;
  linha.cells[6].textContent = novoCA;
  linha.cells[7].textContent = novoCV;
}
