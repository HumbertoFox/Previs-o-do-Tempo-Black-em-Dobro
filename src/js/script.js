const chaveDoApi = "cd31863ae267407cb01212131232011";
const botaoDeBusca = document.querySelector(".btn-busca");
const selectMainContainer = document.querySelector("#container");

setInterval(() => {
    getHours()
}, 1000);

const getHours = () => {
    const clock = document.getElementById("hora");
    const dataAtual = document.getElementById("data");
    const date = new Date();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours < 10 ? `0${hours}` : hours;
    const minute = minutes < 10 ? `0${minutes}` : minutes;
    const second = seconds < 10 ? `0${seconds}` : seconds;
    clock.innerHTML = `${hour}:${minute}:${second}`;
    dataAtual.innerHTML = `${year}`;

    if (hour <= 5) {
        selectMainContainer.style.backgroundImage = "url(./src/images/background-0.png)";
    } else if (hour >= 6 && hour <= 11) {
        selectMainContainer.style.backgroundImage = "url(./src/images/background-1.png)";
    } if (hour >= 12 && hour <= 17) {
        selectMainContainer.style.backgroundImage = "url(./src/images/background-2.png)"
    } else if (hour >= 18 && hour <= 23) {
        selectMainContainer.style.backgroundImage = "url(./src/images/background-3.png)"
    };
};

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    if (!cidade) return;

    const dados = await buscarDadosDaCidade(cidade);

    if (dados) peencherDadosNaTela(dados, cidade);
});

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDoApi}&q=${cidade}&aqi=no&lang=pt`;
    const response = await fetch(apiUrl);

    if (response.status !== 200) return;

    const dados = response.json();

    return dados;
};

function peencherDadosNaTela(dados, cidade) {
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