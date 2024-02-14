document.addEventListener('DOMContentLoaded', function () {
    window.renderHistoricoLista = function (lista) {
        const historicoDiv = document.getElementById("historicoLista");
        if (lista && lista.length > 0) {
            for (let i = 0; i < lista.length; i++) {
                historicoDiv.innerHTML += (lista[i]);
            }
        }
    };

    window.criaHistoricoComponente = function () {
        const title = document.getElementById("imcTitulo").innerHTML;
        const span = document.getElementById("imcSpan").innerHTML;
        var dataAtual = formatarDataISO();
        console.log(dataAtual)
        const divElement = document.createElement('div');
        divElement.classList.add("historyDiv", "historySmallScreenFontSite");
        divElement.innerHTML = `
            <div class="historyDivHeader">
            <div class="historyDivProfileImg"></div>
            <div class="historyDivHeaderTextDiv">
                <p>${title}</p>
                <p class="historyDivTimer"> ${dataAtual}</p>
            </div>
            </div>
            <p class="historyInfoText">${span}</p>
        `
        return divElement.outerHTML;
    }

    window.finalizaRegistro = function () {
        document.getElementById("salvarImc").style.display = 'none';
    }
});

function formatarDataISO() {
    var data = new Date();

    var dia = ('0' + data.getDate()).slice(-2);
    var mes = ('0' + (data.getMonth() + 1)).slice(-2);
    var ano = data.getFullYear();

    return dia + '/' + mes + '/' + ano;
}
