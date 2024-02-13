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
        return false;
    }

    return true;
}

window.checkingCadastroForms = function () {
    let email = document.getElementById("email").value;
    let notRobot = document.getElementById("notRobot").checked;
    let senha = document.getElementById("senha").value;
    let confirmaSenha = document.getElementById("confirmaSenha").value;

    if (email.trim() === "" || !notRobot) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    else if (senha !== confirmaSenha) {
        alert("Confirmação da senha não é igual.");
        return false;
    }
    else {
        return true;
    }
}

window.cadastroDados = function () {
    let data = "Email:" + document.getElementById("email").value + "|";
    data += "Senha:" + document.getElementById("senha").value;

    return data;
}

window.finalizarCadastro = function () {
    alert("Conta cadastrada com Sucesso!");
    window.location.href = '/calculadora';
}

window.falhaCadastro = function () {
    alert("Este Email já tem um cadastro no app.");
}

window.recuperarConta = function (data) {
    if (!data || data.length === 0) {
        alert("Nenhuma conta encontrada com este E-mail.");
        return;
    }

    const regex = /Senha:\s*([^|]*)/;
    const match = data.match(regex);

    if (match && match[1]) {
        const passwordValue = match[1].trim();
        alert("Valor da senha: " + passwordValue);
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
