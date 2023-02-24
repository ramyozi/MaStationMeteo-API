function isError(elt) {
    elt.classList.add("nok");
    elt.classList.remove("ok");
    // Récupérer la div qui porte le message d'erreur
    // pour lui appliquer la classe isError
    const div = elt.closest("div[data-error-msg]");
    div.classList.add("isError");
}

function isOk(elt) {
    elt.classList.add("ok");
    elt.classList.remove("nok");
    const div = elt.closest("div[data-error-msg]");
    div.classList.remove("isError");
}

function isStringLengthValid(string, minLength=0, maxLength=Infinity) {
    const toCheck = string.trim();
    return toCheck.length>minLength && toCheck.length<maxLength;
}
function validateForm(evt) {
    let isValid = true; // un drapeau


    // Test du nom
    const name = document.querySelector("#c_name");
    if (!isStringLengthValid(name.value, 1)) {
        isValid = false;
        isError(name);
    } else {
        isOk(name);
    }

    // Test du pseudo
    const objet = document.querySelector("#c_objet");
    if (!isStringLengthValid(objet.value, 3)) {
        isValid = false;
        isError(objet);
    } else {
        isOk(objet);
    }
    // Test du email
    const email = document.querySelector("#c_email");
    if (!email) {
      isValid = false;
      isError(email);
  } else {
      isOk(email);
  }
    // Test du message
    const message = document.querySelector("#c_message");
    if (!isStringLengthValid(message.value, 9)) {
        isValid = false;
        isError(message);
    } else {
        isOk(message);
    }

    if (!isValid) {
        evt.preventDefault();
    }else{
      alert("Votre message vient d'être envoyé");
    }
}

document.querySelector("form").addEventListener("submit", validateForm);

