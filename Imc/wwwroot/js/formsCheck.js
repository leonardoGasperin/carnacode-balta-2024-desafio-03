window.checkingLoginForms = function () {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let notRobot = document.getElementById("notRobot").checked;

    if (email.trim() === "" || senha.trim() === "" || !notRobot) {
        alert("Por favor, preencha todos os campos.");
    }
    else {
        window.location.href = '/calculadora'
    }
}

window.checkingRecuperarLoginForms = function () {
    let email = document.getElementById("email").value;
    let notRobot = document.getElementById("notRobot").checked;

    if (email.trim() === "" || !notRobot) {
        alert("Por favor, preencha todos os campos.");
    }
    else {
        window.location.href = '/'
    }
}

window.checkingCadastroForms = function () {
    let email = document.getElementById("email").value;
    let notRobot = document.getElementById("notRobot").checked;

    if (email.trim() === "" || !notRobot) {
        alert("Por favor, preencha todos os campos.");
    }
    else {
        window.location.href = '/calculadora'
    }
}

window.chekingCalculoValores = function (altura, peso, sexo) {
    if (altura <= 0 || peso <= 0) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    else {
        return true;
    }
}