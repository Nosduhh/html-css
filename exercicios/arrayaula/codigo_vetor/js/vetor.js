let nomes = [];

function _limpar(){
    var res = document.getElementById("resposta");
    res.innerHTML = "";
}

function _mostra_vetor() {

    var res = document.getElementById("resposta");

    res.innerHTML = "<h3>Retorno do vetor</h3>";

    for(var i=0; i<nomes.length; i++){
        res.innerHTML += `${i+1} - Nome: ${nomes[i][0]}<br> Idade: ${nomes[i][1]} <br>`;
    }
}

function _push(){

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;

    nomes.push([nome, idade]);
}

function _pop(){

    nomes.pop();
    _mostra_vetor();
}

function _unshift(){

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;

    nomes.unshift([nome, idade]);
}

function _shift(){

    nomes.shift();
    _mostra_vetor();
}

function _sort(){

    nomes.sort();
    _mostra_vetor();
}

function _procura(){

    var res = document.getElementById("resposta");
    var nome = document.getElementById("nome").value;
    var b_exclui = document.getElementById("exclui");

    _nome = nomes.map(function (x){return x[0]});

    indice = _nome.indexOf(nome);
    if(indice <0){
        res.innerHTML += 'Pessoa <strong>não</strong> encontrada<br>';
    } else {
        b_exclui.style.display = 'inline';
        res.innerHTML += `Achei a pessoa em: ${indice}<br>`;
    }

}

function _exclui(){

    var nome = document.getElementById("nome").value;
    var b_exclui = document.getElementById("exclui");

    _nome = nomes.map(function (x){return x[0]});
    indice = _nome.indexOf(nome);

    if(indice <0){
        res.innerHTML += 'Pessoa <strong>não</strong> encontrada<br>';
    } else {
        nomes.splice(indice,1);
        b_exclui.style.display = 'none';
    }
    _mostra_vetor();
}