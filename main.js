// lista para a tabela
var tabelaGasto = [];

function salvarGasto() {

    let Gasto = document.getElementById('gasto').value;
    let Valor = document.getElementById('valor').value;
    let Categoria = document.getElementById('categoria').value;

    if(!Gasto) {

        alert("Preencha o campo obrigatório: Gasto.");
        return;

    }
    if(!Valor) {

        alert("Preencha o campo obrigatório: Gasto.");
        return;

    }
    if(!Categoria) {

        alert("Preencha o campo obrigatório: Gasto.");
        return;

    }

    tabelaGasto.push([Gasto, Valor, Categoria]);

    console.log(tabelaGasto);
    criaTabela();

    document.getElementById('gasto').value = "";
    document.getElementById('valor').value = "";
    document.getElementById('categoria').value = "";

};

// Criando a tabela de gastos
function criaTabela() {

    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Gasto</th><th>Categoria</th><th>Valor</th></tr>";
    for(let i=0; i<tabelaGasto.length; i++) {

        tabela += "<tr><td>" + tabelaGasto[i][0] + "</td> <td>" + tabelaGasto[i][1] + "</td> <td>" + tabelaGasto[i][2] + "</td></tr>";
        document.getElementById('tabela').innerHTML = tabela;

    };

}