// Dicionário com o nome das pessoas e as distâncias
const pessoas: { [key: string]: number } = {
    "pessoa 1": 5,
    "pessoa 2": 15,
    "pessoa 3": 20
};

// Função para calcular o preço do frete baseado na distância
function calcularFrete() {
    const nomePessoa = (document.getElementById("nomePessoa") as HTMLInputElement).value;
    const mensagemResultado = document.getElementById("mensagemResultado") as HTMLParagraphElement;

    if (nomePessoa in pessoas) {
        const distancia = pessoas[nomePessoa];
        let valorFrete: number;

        if (distancia <= 5) {
            valorFrete = 5;
        } else if (distancia <= 15) {
            valorFrete = 10;
        } else {
            valorFrete = 15;
        }

        mensagemResultado.innerHTML = `O valor do frete para ${nomePessoa} (${distancia} km) é R$${valorFrete}.`;
    } else {
        mensagemResultado.innerHTML = "Pessoa não encontrada. Por favor, tente novamente.";
    }
}
