//INÍCIO TESTES DE CONSOLE
//constante não alterada, como variável
const robotron = document.querySelector("#robotron")//recebe a informação 
robotron.addEventListener("click", (evento) => {  //função de seta/anônima mostra evento
    console.log(evento)
}) //retorna a informação

//função pois é utilizado várias vezes, ele somo os ois
function dizoi(nome){
    console.log('Oi ' + nome)
    console.log('Seja Bem-vindo') //mostra no console 
}
dizoi('Ana')//função executa ao recarregar


//MEXE NOS VALORES DO ROBÔ
const controle = document.querySelectorAll("[data-controle]")//guarda valores de controles data do HTML

const estatisticas = document.querySelectorAll("[data-estatistica]") //ALTERA FORÇA, PODER... DE ACORDO COM VALORES
//console.log(estatisticas)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => { //percorre o array usando a função anônima
    elemento.addEventListener("click", (evento) => { //para cada elemento, traz o evento e suas propriedade e manda para função
        manipula_dados(evento.target.dataset.controle,evento.target.parentNode) //pega o target e pega o parente/pai do controle clicado
        //console.log(evento.target.parentNode) //identifica controle 
        //console.log(evento.target.dataset.controle) //identifica + ou -
        atualiza_estatisticas(evento.target.dataset.peca)//atualiza estatística da tela e envia qual peça o click está se refirindo
    })
})

function manipula_dados(operacao,controle){
    //Ao clicar no controle, buscar o contador e somar e subtrair
    const peca = controle.querySelector("[data-contador]") //busca a peça do elemento clicado

    if(operacao == "-"){
        peca.value = parseInt(peca.value) - 1
    } else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualiza_estatisticas(peca) {
    //console.log(peca) //mostra qual peça o click está se refirindo
    estatisticas.forEach( (elemento ) => { //navega por todas as estatísticas
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        //console.log(parseInt(elemento.textContent)) traz os valores da tela de cada estatística e soma com o dataset já existe 
        //console.log(pecas[peca][elemento.dataset.estatistica])
    })
}


//Com o Vercel.com é possível colocar o projeto no ar e fazer um deploy