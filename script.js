//console.log é uma função nativa do Js que exibe uma mensagem no console do navegador. 
//Entrada - Processamento - Saída

console.log("Uhull Sextou!!")

//Variáveis: VAR, LET e CONST
//VAR ela tem escopo global (pode ser chamada em qualquer lugar) por isso, ela não é mais utilizada, pq causa bastante conflitos e bugs. NÃO É MAIS UTILIZADA.

var cor = "azul"
cor = "vermelho"
console.log(cor)

//LET ela tem escopo local, não causa tantos danos e bugs e é a mais utilizada entre os programadores

let animal = "girafa"
animal = "pato"
console.log(animal)

//CONST é uma variável constante ela não muda, NÃO CONSIGO REDEFINIR. 

const fruta = "laranja"
console.log(fruta)
//fruta = "uva"

//Deu erro pq uma variável constante não pode ser alterada.

//NOMES DAS VARIÁVEIS:  não podem ser começadas com números ou símbolos, execeto _ e $ 

let carro = "uninho"
let _carro = "pálio"
let $carro = "siena"
let carroNovo = "strada" 

//TIPOS DE VARIÁVEIS

//number
let ano = 2023  //tipo numérico
console.log(typeof ano) //informa o tipo da variável

//string
let mes = "dezembro" //ou '' ou ``quer dizer que é string (um valor textual)

let dia = 'sexta' //string

let frase = `Natal está chegando` //string

//boolean
let feliz = true

let triste = false

// Vamos ver com calma com o tempo 

let teste = null  //valor nulo
let teste2 = undefined //valor indefinido  
let teste3 = NaN //não é um valor numérico

//TemplateString, também é uma string, porém, ela é mais robusta, elegante. Conseguimos guardar mais informações ou chamar de uma outra forma. E ela é chamada com crase ` `  
// forma de chamar o templateString  `${}`


let fraseGrande = `Hoje é ${dia} do mês de ${mes} o ${frase}` 

console.log(fraseGrande)

console.log( `Hoje iniciou o mês de ${mes}`)


let exemploComTemplateString = "calor"
console.log(`Hoje está muito ${exemploComTemplateString}`)


//CONDIÇÕES 
//IF = SE
//ELSE = SENÃO
//ELSE IF = SENÃO SE (usado para nos dar mais opções de escolha)

let a = 3 > 2 //true

if(a == false){ // a =true ; true é igual a false? Não! Por isso caiu no else
console.log("Essa condição é verdadeira")
} else {
    console.log("Essa informação não bate")
}


//Exemplo com Else If

let estiloMusical = "eletrônica" //imagine o usuário digitando um estilo musical 

if(estiloMusical === "rock" ){
console.log("O estilo musical é o Rock")
} else if (estiloMusical === "sertanejo"){
console.log ("O estilo musical é sertanejo")
} else if(estiloMusical === "funk"){
console.log ("O estilo musical é funk")
} else {
    console.log("Estilo musical não encontrado")
}



//OPERADORES LÓGICOS 
//PERGUNTA SE UMA E A OUTRA SÃO VERDADEIRAS
// &&  (TRUE && FALSE) // FALSE 
// && (TRUE && TRUE) //TRUE

//PERGUNTA SE UMA OU A OUTRA É VERDADEIRA
// || (TRUE || FALSE)  //TRUE
// || (TRUE || TRUE) //TRUE
// || (FALSE || FALSE)
console.log (false || false) //false