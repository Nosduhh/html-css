function produtos() {
    var nomedoProduto = document.getElementById("nomedoProduto").value;
    var quantidade = document.getElementById("quantidade").value;
    var quantidadeDias = document.getElementById("quantidadeDias").value;
    var quantidadeIntegrantes = document.getElementById("quantidadeIntegrantes").value;

    conversao = quantidade / 1000;
    semanal = conversao * quantidadeDias * quantidadeIntegrantes;
    mensal = conversao * quantidadeDias * 5 *quantidadeIntegrantes;


    document.body.innerHTML += "<p>Nome do produto" + nomedoProduto;
    document.body.innerHTML += "<p>Quantidade de produtos" + quantidade;
    document.body.innerHTML += "<p>Quantos dias" + quantidadeDias;
    document.body.innerHTML += "<p> Quantas pessoas" + quantidadeIntegrantes;
    document.body.innerHTML += "<p> Quantidade Senanal" + semanal;
    document.body.innerHTML += "<p> Quandtidade Mensal" + mensal;

}