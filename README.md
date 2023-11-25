# projeto-Previs-do-Tempo-fetch-Weather-Api

### Repositório contendo os arquivos iniciais do projeto de Fetch do tempo Weather API!

Os desafios do DevQuest ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Layout do projeto em tela de Desktop/Notebook/Tablet/Mobile.

<div align="center">

  <img src="https://github.com/HumbertoFox/repository/assets/126817628/a4e92e3a-c94d-48bb-9c9d-f435258dcb0f" width="400px"/>

</div>

### O que aprendi

Coletando informações do Date() e exibindo, hora e data, incluindo o 0 na frente das unidades e em seguida verificando a hora para trocar o background!

```Js
const getHours = () => {
    const selectClock = document.getElementById("hora");
    const selectData = document.getElementById("data");
    const date = new Date();
    const year = date.getFullYear();
    const months = date.getMonth()+1;
    const days = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours < 10 ? `0${hours}` : hours;
    const minute = minutes < 10 ? `0${minutes}` : minutes;
    const second = seconds < 10 ? `0${seconds}` : seconds;
    const month = months < 10 ? `0${months}` : months;
    const day = days < 10 ? `0${days}` : days;
    selectClock.innerHTML = `${hour}:${minute}:${second}`;
    selectData.innerHTML = `${day}/${month}/${year}`;

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

```

### Construído com

- Marcação semântica HTML5
- Propriedades personalizadas CSS
- Caixa flexível
- Js com Fetch para coletar informações do Weather API

## Desenvolvido em:

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30px"/>
</div>
