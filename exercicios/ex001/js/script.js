function produtos(){
    var nomedoproduto = document.getElementById("nomedoproduto").value;
    var quantidade = document.getElementById("quantidade").value;
    var quantidadedias = document.getElementById("quantidadedias").value;
    var quantidadeintegrantes = document.getElementById("quantidadeintegrantes").value;
    //var quantidadeSemanal = document.getElementById("quantidadeSemanal").value;

    conversao = quantidade / 1000;
    semanal = conversao * quantidadedias * quantidadeintegrantes;
    mensal = conversao * quantidadedias * 5 * quantidadeintegrantes;

    /*console.log(nomedoproduto);
    console.log(quantidade);
    console.log(quantidadedias);
    console.log(quantidadeintegrantes);
    console.log(quantidadeSemanal);
    console.log(quantidadeMensal);*/

    document.body.innerHTML += "<p>Nome do produto" + nomedoproduto;
    document.body.innerHTML += "<p>Quantidade de produtos" + quantidade;
    document.body.innerHTML += "<p>Quantos dias" + quantidadedias;
    document.body.innerHTML += "<p> Quantas pessoas" + quantidadeintegrantes;
    document.body.innerHTML += "<p> Quantidade Senanal" + semanal;
    document.body.innerHTML += "<p> Quandtidade Mensal" + mensal;
}
