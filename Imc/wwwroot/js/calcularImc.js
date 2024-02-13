window.calcularImc = function (altura, peso, sexo) {
    return peso / (altura * altura);
}

window.imcResultado = function (imcValor, isIdoso, sexo) {
    switch (isIdoso) {
        case true:
            if (sexo === 'masculino') {
                return resultadoMasculinoIdoso(imcValor);
            } else if (sexo === 'feminino') {
                return resultadoFemininoIdosa(imcValor);
            }
            break;
        case false:
            if (sexo === 'masculino') {
                return resultadoMasculino(imcValor);
            } else if (sexo === 'feminino') {
                return resultadoFeminino(imcValor);
            }
            break;
        default:
            break;
    }
}

function resultadoMasculino(imcValor) {
    if (imcValor < 18.5) {
        return 'AbaixoDoPeso';
    } else if (imcValor >= 18.5 && imcValor < 25) {
        return 'PesoNormal';
    } else if (imcValor >= 25 && imcValor < 29.9) {
        return 'Sobrepeso';
    } else if (imcValor >= 29.9) {
        return 'Obesidade';
    } else {
        return 'Invalido';
    }
}

function resultadoMasculinoIdoso(imcValor) {
    if (imcValor < 23) {
        return 'AbaixoDoPeso';
    } else if (imcValor >= 23 && imcValor < 29.9) {
        return 'PesoNormal';
    } else if (imcValor >= 29.9) {
        return 'Obesidade';
    } else {
        return 'Invalido';
    }

}

function resultadoFeminino(imcValor) {
    if (imcValor < 19.1) {
        return 'AbaixoDoPeso';
    } else if (imcValor >= 19.1 && imcValor < 25.8) {
        return 'PesoNormal';
    } else if (imcValor >= 25.8 && imcValor < 27.3) {
        return 'Sobrepeso';
    } else if (imcValor >= 27.3) {
        return 'Obesidade';
    } else {
        return 'Invalido';
    }
}

function resultadoFemininoIdosa(imcValor) {
    if (imcValor < 17) {
        return 'AbaixoDoPeso';
    } else if (imcValor >= 17 && imcValor < 24.4) {
        return 'PesoNormal';
    } else if (imcValor >= 24.4 && imcValor < 28.9) {
        return 'Sobrepeso';
    } else if (imcValor >= 29) {
        return 'Obesidade';
    } else {
        return 'Invalido';
    }
}
