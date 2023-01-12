function produtos() {
    var nomedoproduto = document.getElementById("nomedoproduto").value;
    var quantidade = document.getElementById("quantidade").value;
    var quantidadedias = document.getElementById("quantidadedias").value;
    var quantidadeintregrantes = document.getElementById("quantidadeintregrantes").value;


    conversao = quantidade/1000;
    semanal = conversao * quantidadedias * quantidadeintregrantes;
    mensal = conversao * quantidadedias * 5 * quantidadeintregrantes;


    document.body.innerHTML += "<p><br>Nome do produto é: "  + nomedoproduto;
    document.body.innerHTML += "<p>Quantidade de gramas por pessoa é: " + quantidade;
    document.body.innerHTML += "<p>O alimento é utilizado em: " + quantidadedias + ' dias'; 
    document.body.innerHTML += "<p> Quantas pessoas a familia possui: " + quantidadeintregrantes + ' pessoas';
    document.body.innerHTML += "<p> A quantidade semanal é: " + semanal + ' KG';
    document.body.innerHTML += "<p> A quantidade mensal é: " + mensal + ' KG';
    document.body.innerHTML += "<p> O KG do alimento é: " + conversao + ' gramas';
}