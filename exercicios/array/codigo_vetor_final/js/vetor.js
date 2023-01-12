let nomes = [];

function _limpar(){
    var res = document.getElementById("resposta");
    res.innerHTML = "";
}

function _mostra_vetor() {

    var res = document.getElementById("resposta");

    res.innerHTML = "<h3>Retorno do vetor</h3>";

    for(var i=0; i<nomes.length; i++){
        res.innerHTML += `${i+1} - Nome: ${nomes[i][0]}<br> Idade: ${nomes[i][1]}<br> Email: ${nomes[i][2]} <br>`;
    }
}

function _push(){

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;

    nomes.push([nome, idade, email]);

    _mostra_vetor();
}

function _pop(){

    nomes.pop();
    _mostra_vetor();
}
function _sort(){        

    nomes.sort();
    _mostra_vetor();    
}

function _procura(){

    var res = document.getElementById("resposta");
    var nome = document.getElementById("nome").value;    

   _nome = nomes.map(function (x){return x[0]});

    indice = _nome.indexOf(nome);
    if(indice <0){
        res.innerHTML += 'Pessoa <strong>não</strong> encontrada<br>';
    } else {              
        res.innerHTML += `<strong>Pessoa encontrada</strong><br> Achei a pessoa em indice: ${indice}<br> ${nomes[indice]}<br>`;        
    }

}

function _exclui(){

    var nome = document.getElementById("nome").value;    
    var res = document.getElementById("resposta");

    _nome = nomes.map(function (x){return x[0]});
    indice = _nome.indexOf(nome);

    if(indice <0){
        res.innerHTML += 'Pessoa <strong>não</strong> encontrada<br>';
    } else {
        nomes.splice(indice,1);      
    }
    _mostra_vetor();
}

function _alterar() {

    varWindow = window.prompt ("Digite o index que quer alterar");

    var res = document.getElementById("resposta");
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;

    //_nome = nomes.map(function (x){return x[0][0][0]});
    // indice = _nome.indexOf(nome);

    if(varWindow <0){
        res.innerHTML += 'Não encontrado <br>';
    } else {
        nomes.splice(varWindow, 1, [nome,idade,email]);
             
    }
    _mostra_vetor();
}

