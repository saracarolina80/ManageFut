function showModal() {
  var modalBg = document.querySelector(".modal-bg");
  var modal = document.querySelector(".modal");
  var modalBgP = document.querySelector(".modal-bgP");
  var modalP = document.querySelector(".modalP");

  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.value === "player") {
        // display player popup
        modalBgP.style.display = "block";
        modalP.style.display = "block";
      } else if (radio.value === "coach") {
        // display coach popup
        modalBg.style.display = "block";
        modal.style.display = "block";
      }

      // Desativa os botões de opção após a seleção
      radios.forEach((r) => {
        r.disabled = true;
      });
    });
  });
}

function hideModal() {
  // esconde o fundo modal e o pop-up
  document.querySelector('.modal-bg').style.display = 'none';
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('.modal-bgP').style.display = 'none';
  document.querySelector('.modalP').style.display = 'none';
}

function generateCode(event) {
  // obtém os valores dos números do formulário
  var num1 = event.target.num1.value;
  var num2 = event.target.num2.value;
  var num3 = event.target.num3.value;

  // gera o código usando os números
  var code = num1 + " " + num2 + " " + num3;

  // exibe o código em um alerta
  // alert("Seu código é: " + code);

  // esconde o pop-up e o fundo modal
  hideModal();
}

function closeModal() {
  // Armazena a URL atual em uma variável
  var currentUrl = window.location.href;

  // Redireciona de volta para a página atual
  window.location.href = currentUrl;
}

function redirectToPage() {
  var selectedRole = document.querySelector('input[name="role"]:checked').value;

  if (selectedRole === "player") {
    window.location.href = "player.html";
  } else if (selectedRole === "coach") {
    window.location.href = "coach.html";
  }
}


// function adicionarExercicio() {
//   // Crie um novo elemento <p> para representar o exercício adicionado
//   const novoExercicio = document.createElement("p");
//   novoExercicio.textContent = "Exercício adicionado!"; // Aqui você pode definir o texto do exercício ou obter informações de um formulário

//   // Selecione a caixa "Lista de exercícios" e adicione o novo exercício a ela
//   const listaExercicios = document.getElementById("listaExercicios");
//   listaExercicios.appendChild(novoExercicio);
// }

function limparLista() {
  const tabelaExercicios = document.getElementById("tabela_exercicios");
  const totalLinhas = tabelaExercicios.rows.length;

  if (totalLinhas > 1) { // Verifica se há mais de uma linha na tabela
    tabelaExercicios.deleteRow(totalLinhas - 1); // Remove a última linha (índice totalLinhas - 1)
  }
}

function limparCampos() {
  document.getElementById("nome_exercicio").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("duracao").value = "";
  document.getElementById("num_repeticoes").value = "";
}

function adicionarExercicio() {
  // Obter valores dos campos de entrada
  var nomeExercicio = document.getElementById("nome_exercicio").value;
  var descricaoExercicio = document.getElementById("descricao").value;
  var duracao = document.getElementById("duracao").value;
  var numRepeticoes = document.getElementById("num_repeticoes").value;

  // Obter a tabela e criar uma nova linha
  var tabela = document.getElementById("tabela_exercicios");
  console.log(tabela);
  var novaLinha = tabela.insertRow(-1);

  // Criar as células para a nova linha
  var celulaNome = novaLinha.insertCell(0);
  var celulaDescricao = novaLinha.insertCell(1);
  var celulaDuracao = novaLinha.insertCell(1);
  var celulaRepeticoes = novaLinha.insertCell(2);

  // Inserir os valores dos campos de entrada nas células
  celulaNome.innerHTML = nomeExercicio;
  celulaDescricao.innerHTML = descricaoExercicio;
  celulaDuracao.innerHTML = duracao;
  celulaRepeticoes.innerHTML = numRepeticoes;

  limparCampos();
}

const form = document.querySelector('form');
const input = document.querySelector('#mensagem');
const listaMensagens = document.querySelector('#mensagens');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // evitar que a página seja recarregada
//   const mensagem = input.value;
//   input.value = ''; // limpar o campo de entrada
//   adicionarMensagem('Você', mensagem); // adicionar a mensagem à lista
// });

function adicionarMensagem(usuario, texto) {
  const mensagemLi = document.createElement('li');
  mensagemLi.textContent = `${usuario}: ${texto}`;
  listaMensagens.appendChild(mensagemLi);
}

// const popup = document.getElementById("popup");
// console.log(popup);

document.addEventListener("DOMContentLoaded", () => {
  const abrirPopup = document.getElementById("abrirPopup");
  const popup = document.getElementById("popup");
  const form = document.querySelector("form");

  abrirPopup.addEventListener("click", () => {
    popup.style.display = "block";
    popup.showModal();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent form submission

    const formData = new FormData(form);
    console.log(formData.getAll("jogador"));

    popup.close();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const abrirPopup2 = document.getElementById("abrirPopup2");
  const popup2 = document.getElementById("popup2");
  const form = document.querySelector("form");

  abrirPopup2.addEventListener("click", () => {
    popup2.style.display = "block";
    popup2.showModal();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent form submission

    const formData = new FormData(form);
    console.log(formData.getAll("jogador"));

    popup2.close();
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const abrirPopup = document.getElementById("abrirPopup3");
  const popup = document.getElementById("popup3");
  const form = document.querySelector("form");

  abrirPopup.addEventListener("click", () => {
    popup.style.display = "block";
    popup.showModal();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent form submission

    const formData = new FormData(form);
    console.log(formData.getAll("jogador"));

    popup.close();
  });
});

var role; // declaração da variável

function setRole(selectedRole) { // definição da função
  role = selectedRole;
  console.log(role);
}

document.getElementById("login-button").addEventListener("click", function () {
  setRole();
});

document.getElementById("login-button").onclick = function () {
  if (role === "player") {
    window.location.href = "player.html";
  } else if (role === "coach") {
    window.location.href = "coach.html";
  } else {
    alert("Please select a role.");
  }
};

function loginfunc() {
  var role = document.querySelector('input[name="role"]:checked').value;
  var loginButton = document.querySelector('#login-button');

  // Change the link of the login button based on the role choice
  if (role === 'player') {
    loginButton.href = 'player.html';
  } else if (role === 'coach') {
    loginButton.href = 'coach.html';
  }
}

var loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the default behavior of the link
  var href = loginButton.href;
  if (href !== '#') {
    window.location.href = href; // Redirect to the new link
  }
});


// guardar.addEventListener("click", function () {
//   save_popup.classList.add("show");
// });
// close_popup.addEventListener("click", function () {
//   save_popup.classList.remove("show");
// });
// window.addEventListener("click", function (event) {
//   if (event.target == save_popup) {
//       save_popup.classList.remove("show");
//   }
// });

function exibirLista() {
  const listaConvocatoria = document.getElementById("listaConvocatoria");
  const botao = document.getElementById("botaoLista");

  // Verifica se a lista está oculta
  if (listaConvocatoria.style.display === "none") {
    // Limpa a lista antes de exibir
    listaConvocatoria.innerHTML = "";

    // Opções da lista
    const opcoes = ["João", "Francisco", "António", "Pedro", "Afonso", "Marco", "Filipe", "Diogo", "Martim"];

    // Cria uma checkbox para cada opção e adiciona à lista
    opcoes.forEach((opcao) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = opcao;

      const label = document.createElement("label");
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(opcao));
      label.style.fontSize = "15px";

      const listItem = document.createElement("li");
      listItem.appendChild(label);

      listaConvocatoria.appendChild(listItem);
    });

    // Exibe a lista
    listaConvocatoria.style.display = "block";
    botao.textContent = "Esconder Lista"; // Atualiza o texto do botão
  } else {
    // Oculta a lista
    listaConvocatoria.style.display = "none";
    botao.textContent = "Mostrar Lista"; // Atualiza o texto do botão
  }
}


// LOGIN 
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Realizar a verificação do email e redirecionar
  if (username === "sergio@gmail.com") {
    window.location.href = "coach.html";
  } else if (username === "tiago@gmail.com") {
    window.location.href = "player.html";
  } else {
    alert("Invalid credentials. Try Again!");
  }
}



// function adicionarJogador() {
//   // Obtém as informações do novo jogador
//   var nomeJogador = prompt("Digite o nome do jogador:");
//   var idadeJogador = prompt("Digite a idade do jogador:");
//   var posicaoJogador = prompt("Digite a posição do jogador:");
//   var numeroJogador = prompt("Digite o número do jogador:");
//   var golsJogador = prompt("Digite a quantidade de gols do jogador:");
//   var assistenciasJogador = prompt("Digite a quantidade de assistências do jogador:");
//   var caJogador = prompt("Digite a quantidade de cartões amarelos do jogador:");
//   var cvJogador = prompt("Digite a quantidade de cartões vermelhos do jogador:");

//   // Manipula a tabela para adicionar o novo jogador
//   var tabela = document.getElementById("tabela_jogadores");
//   var novaLinha = tabela.insertRow();

//   // Insere as células com as informações do jogador
//   var celulaNome = novaLinha.insertCell();
//   celulaNome.innerHTML = nomeJogador;

//   var celulaIdade = novaLinha.insertCell();
//   celulaIdade.innerHTML = idadeJogador;

//   var celulaPosicao = novaLinha.insertCell();
//   celulaPosicao.innerHTML = posicaoJogador;

//   var celulaNumero = novaLinha.insertCell();
//   celulaNumero.innerHTML = numeroJogador;

//   var celulaGols = novaLinha.insertCell();
//   celulaGols.innerHTML = golsJogador;

//   var celulaAssistencias = novaLinha.insertCell();
//   celulaAssistencias.innerHTML = assistenciasJogador;

//   var celulaCA = novaLinha.insertCell();
//   celulaCA.innerHTML = caJogador;

//   var celulaCV = novaLinha.insertCell();
//   celulaCV.innerHTML = cvJogador;
// }

// var botaoAdicionar = document.getElementById("addPlayer");
// botaoAdicionar.addEventListener("click", adicionarJogador);