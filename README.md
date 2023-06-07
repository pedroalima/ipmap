![#](./public/logo%201.svg)

Bem-vindo ao IPMap, um rastreador de endereços de IP! Este aplicativo permite que você localize e obtenha informações detalhadas sobre qualquer endereço IP ou domínio. Com a ajuda da API de Geolocalização de IP do IPify e a funcionalidade do mapa fornecida pelo LeafletJS, você poderá visualizar visualmente a localização geográfica associada a um endereço IP específico. Além disso, ao carregar a página inicial, você verá automaticamente o seu próprio endereço IP no mapa. Explore e descubra informações-chave, como região, país, provedor de internet e muito mais.

Projeto construído a partir do desafio disponível da [FrontendMentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Utilizei o design fornecido pela plataforma e elaborei a página da maneira mais fidedigna possível, desenvolvido com React.js e SASS. E esse foi o meu resultado final 💻<https://ipmap.vercel.app/>.

![#](./public/Frame%201.svg)

> Veja o comparativo da minha solução com o resultado esperado, [clicando aqui!](https://www.frontendmentor.io/solutions/ipmap-um-rastreador-de-endereos-de-ip-5ymh0CFQ6Y)

</br>

## 🎯 Objetivos

Os usuários devem ser capazes de:

> - Visualizar o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo
> - Visualizar os estados de destaque (hover) para todos os elementos interativos na página
> - Visualizar seu próprio endereço IP no mapa ao carregar a página inicial
> - Procurar por quaisquer endereços IP ou domínios e ver as informações-chave e a localização correspondente

</br>

## 🔧 Propriedades e Tecnologias

> - React
> - Vite
> - SASS
> - Mobile-first
> - Semântica HTML
> - Manipulação do DOM
> - API (IPify)
> - Map (LeafletJS)

</br>

## 🧠 Meu aprendizado

Vários conceitos foram abordados, com foco no consumo de API em ReactJS, como:

> - Hooks: useState e useEffect
> - função async..await
> - Requisições: fetch
> - Promises
> - Estrutura try-catch
> - API (IPify)

Compreender esses conceitos é essencial para desenvolver aplicações web interativas e interagir com APIs externas de forma eficiente.

React.js

```js
...
useEffect(() => {
    try {
      const getDataApi = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=`
        );
        const jsonRes = await res.json();
        setAddress(jsonRes);
      }

      getDataApi()

    } catch(error) {
      console.log(error)
    }

  }, [])
...
```

Os hooks useState e useEffect são recursos do React que permitem gerenciar o estado e lidar com efeitos colaterais em componentes funcionais. A função async...await facilita a manipulação de promises com escrita de código assíncrono de forma mais legível e concisa. A função fetch é utilizada para fazer requisições HTTP e obter dados de uma URL, retornando uma promise que pode ser manipulada com os métodos then() e catch(). Promises são objetos que representam a conclusão ou falha de operações assíncronas. A estrutura try-catch é usada para capturar erros e realizar tratamentos adequados. As APIs, como o IPify, fornecem conjuntos de regras e protocolos para interação entre softwares, permitindo que você faça requisições e obtenha dados úteis para o seu aplicativo.

</br>

## 💻 Rodando o projeto

Para conferir a versão final é só acessar o link: 💻<https://ipmap.vercel.app/>.

Observação: os testes referente ao layout e responsividade foram realizadas somente utilizando as resoluções 375px e 1360px.

Veja uma demonstração

<video src="public/2023-06-07%2016-27-05.mp4" controls title="Title"></video>

</br>

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)
