function encryptText() {
  // Obtener elemento textArea
  var textUser = document.getElementById("textUser");

  // Capturar el texto y convertirlo a minúsculas
  var text = textUser.value.toLowerCase();

  // Encriptar el texto
  var encryptedText = "";

  for (var i = 0; i < text.length; i++) {
    var charCode = text.charCodeAt(i);
    // Si el carácter es una letra minúscula (a-z)
    if (charCode >= 97 && charCode <= 122) {
      // Avanzar 12 letras en el alfabeto
      charCode = ((charCode - 97 + 12) % 26) + 97;
    }
    encryptedText += String.fromCharCode(charCode);
  }

  // Crear resultado
  createResult(encryptedText);
}

function decryptText() {
  // Obtener elemento textArea
  var textUser = document.getElementById("textUser");

  // Capturar el texto y convertirlo a minúsculas
  var text = textUser.value.toLowerCase();

  // Desencriptar el texto
  var decryptedText = "";

  for (var i = 0; i < text.length; i++) {
    var charCode = text.charCodeAt(i);
    // Si el carácter es una letra minúscula (a-z)
    if (charCode >= 97 && charCode <= 122) {
      // Retroceder 12 letras en el alfabeto
      charCode = ((charCode - 97 - 12 + 26) % 26) + 97;
    }
    decryptedText += String.fromCharCode(charCode);
  }

  // Crear resultado
  createResult(decryptedText);
}

function createResult(text) {
  // Obtener contenedor
  var container = document.getElementById("container-result");

  // Limpiar contenido anterior del contenedor
  container.innerHTML = "";

  // Crear y agregar nuevo span
  var newTextArea = document.createElement("textarea");
  newTextArea.textContent = text;
  newTextArea.classList.add("textResult");
  container.appendChild(newTextArea);

  // Crear botón de copiar
  var newBtn = document.createElement("button");
  newBtn.textContent = "Copiar";
  newBtn.classList.add("btn", "copy");

  // Añadir evento de clic al botón de copiar
  newBtn.onclick = function () {
    copyText(newTextArea);
  };

  // Añadir el botón al contenedor
  container.classList.add("result");
  container.appendChild(newBtn);
}

function copyText(elemento) {
  // Crear un campo de texto temporal
  var tempInput = document.createElement("input");
  tempInput.value = elemento.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
