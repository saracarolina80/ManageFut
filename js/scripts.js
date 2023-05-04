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