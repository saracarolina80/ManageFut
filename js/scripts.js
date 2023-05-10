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
  var code =  num1 + " " + num2 + " " + num3;

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
  
  // function limparLista() {
  //   const listaExercicios = document.getElementById("listaExercicios");
  //   listaExercicios.innerHTML = "<h3 style='border-bottom: 1px solid black; padding-bottom: 10px;'>Lista de exercícios</h3>";
  // }

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
    const abrirPopup = document.getElementById("abrirPopup2");
    const popup = document.getElementById("popup2");
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
  
  
  
  