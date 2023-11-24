const chaveDoApi = "cd31863ae267407cb01212131232011";
const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    if(!cidade) return;

    const dados = await buscarDadosDaCidade(cidade);
    
    if(dados) peencherDadosNaTela(dados, cidade);
});

async function buscarDadosDaCidade(cidade){
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDoApi}&q=${cidade}&aqi=no&lang=pt`;
    const response = await fetch(apiUrl);

    if(response.status !== 200) return;

    const dados = response.json();
    
    return dados;
};

function peencherDadosNaTela(dados, cidade){
    const tempetatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const humidade = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;

    document.getElementById("cidade").textContent = cidade;
    document.getElementById("temperatura").textContent = `${tempetatura} °C`;
    document.getElementById("condicao").textContent = condicao;
    document.getElementById("humidade").textContent = `${humidade}%`;
    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento}km/h`;
    document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);
};