// Dicionário com o nome das pessoas e as distâncias
var pessoas = {
    "pessoa 1": 5,
    "pessoa 2": 15,
    "pessoa 3": 20
};
// Função para calcular o preço do frete baseado na distância
function calcularFrete() {
    var nomePessoa = document.getElementById("nomePessoa").value;
    var mensagemResultado = document.getElementById("mensagemResultado");
    if (nomePessoa in pessoas) {
        var distancia = pessoas[nomePessoa];
        var valorFrete = void 0;
        if (distancia <= 5) {
            valorFrete = 5;
        }
        else if (distancia <= 15) {
            valorFrete = 10;
        }
        else {
            valorFrete = 15;
        }
        mensagemResultado.innerHTML = "O valor do frete para ".concat(nomePessoa, " (").concat(distancia, " km) \u00E9 R$").concat(valorFrete, ".");
    }
    else {
        mensagemResultado.innerHTML = "Pessoa não encontrada. Por favor, tente novamente.";
    }
}
