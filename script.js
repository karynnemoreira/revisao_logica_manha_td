// //console.log é uma função nativa do Js que exibe uma mensagem no console do navegador. 
// //Entrada - Processamento - Saída

// console.log("Uhull Sextou!!")

// //Variáveis: VAR, LET e CONST
// //VAR ela tem escopo global (pode ser chamada em qualquer lugar) por isso, ela não é mais utilizada, pq causa bastante conflitos e bugs. NÃO É MAIS UTILIZADA.

// var cor = "azul"
// cor = "vermelho"
// console.log(cor)

// //LET ela tem escopo local, não causa tantos danos e bugs e é a mais utilizada entre os programadores

// let animal = "girafa"
// animal = "pato"
// console.log(animal)

// //CONST é uma variável constante ela não muda, NÃO CONSIGO REDEFINIR. 

// const fruta = "laranja"
// console.log(fruta)
// //fruta = "uva"

// //Deu erro pq uma variável constante não pode ser alterada.

// //NOMES DAS VARIÁVEIS:  não podem ser começadas com números ou símbolos, execeto _ e $ 

// let carro = "uninho"
// let _carro = "pálio"
// let $carro = "siena"
// let carroNovo = "strada" 

// //TIPOS DE VARIÁVEIS

// //number
// let ano = 2023  //tipo numérico
// console.log(typeof ano) //informa o tipo da variável

// //string
// let mes = "dezembro" //ou '' ou ``quer dizer que é string (um valor textual)

// let dia = 'sexta' //string

// let frase = `Natal está chegando` //string

// //boolean
// let feliz = true

// let triste = false

// // Vamos ver com calma com o tempo 

// let teste = null  //valor nulo
// let teste2 = undefined //valor indefinido  
// let teste3 = NaN //não é um valor numérico

// //TemplateString, também é uma string, porém, ela é mais robusta, elegante. Conseguimos guardar mais informações ou chamar de uma outra forma. E ela é chamada com crase ` `  
// // forma de chamar o templateString  `${}`


// let fraseGrande = `Hoje é ${dia} do mês de ${mes} o ${frase}` 

// console.log(fraseGrande)

// console.log( `Hoje iniciou o mês de ${mes}`)


// let exemploComTemplateString = "calor"
// console.log(`Hoje está muito ${exemploComTemplateString}`)


// //CONDIÇÕES 
// //IF = SE
// //ELSE = SENÃO
// //ELSE IF = SENÃO SE (usado para nos dar mais opções de escolha)

// let a = 3 > 2 //true

// if(a == false){ // a =true ; true é igual a false? Não! Por isso caiu no else
// console.log("Essa condição é verdadeira")
// } else {
//     console.log("Essa informação não bate")
// }


// //Exemplo com Else If

// let estiloMusical = "eletrônica" //imagine o usuário digitando um estilo musical 

// if(estiloMusical === "rock" ){
// console.log("O estilo musical é o Rock")
// } else if (estiloMusical === "sertanejo"){
// console.log ("O estilo musical é sertanejo")
// } else if(estiloMusical === "funk"){
// console.log ("O estilo musical é funk")
// } else {
//     console.log("Estilo musical não encontrado")
// }



//OPERADORES LÓGICOS 
//PERGUNTA SE UMA E A OUTRA SÃO VERDADEIRAS
// &&  (TRUE && FALSE) // FALSE 
// && (TRUE && TRUE) //TRUE

//PERGUNTA SE UMA OU A OUTRA É VERDADEIRA
// || (TRUE || FALSE)  //TRUE
// || (TRUE || TRUE) //TRUE
// || (FALSE || FALSE)



// //&& COMPARAR SE AS DUAS INFORMAÇÕES SÃO VERDADEIRAS

// let a = true
// let b = false


// if(a == true && b == false) {
// console.log("Hoje é segunda feira")
// }else{
// console.log("Hoje não é segunda feira")
// }


// let animal1 = "cachorro"
// let animal2 = "papagaio"

// if(animal1 == "cachorro" && animal2 == "gato"){
// console.log("As duas informações são corretas")
// }else{
//     console.log("Informações não batem")
// }

// // true e && true 
// let teste1 = "menos -"
// let teste2 = "mais +" 


// if(teste1 == "menos -" && teste2 == "mais ++"){
//     console.log("As duas informações são verdadeiras")
// }else{
//     console.log("Essas informações não estão corretas")
// }



// //|| or / Compara se um OU o outro são verdadeiros


// let c = 10 > 2 // 10 é maior > que 2 ? sim! true, é verdade.
// let d = 50 >= 50 // 50 é maior > ou igual = a 50 ? Maior não é, informação falsa. 50 é igual a 50, informação verdadeira, true. 

// if(c == false || d == true ){
// console.log("Essa informação ta certinha")
// }


// let fruta1 = "morango"
// let fruta2 = "abacaxi" 

// if(fruta1 === "uva" || fruta2 === "abacaxi"){
// console.log(`Adorooo essas frutas ${fruta1} e ${fruta2}`)
// } else{
//     console.log("Você é muito fresco") 
// }


// // || OU uma OU a outra informação precisa ser verdadeira
// // && E as duas informações PRECISAM SER VERDADEIRAS


// let carro1 = "gol"
// let carro2 = "celta"

// if(carro1 === "gol" || carro2 === "strada"){
// console.log("Um ou o outro estão certos")
// } else{
//     console.log("Nenhum dos dois estão certos")
// }


// //  ! not : ele inverte um valor que é dado a ele
// let segunda = false
// console.log(!segunda)



//Exemplo 

// let cantora = "Mariah Carey"
// let mes = "Dezembro"
// let cantor = "Roberto Carlos"
// let natal = `Ano novo em Copacabana com participação especial da ${cantora} e ${cantor}`

// if (mes === "Janeiro" || cantora === "Mariah Carey" && cantor === "Roberto Carlos") {
//     console.log(`Natal está chegando, vamos descongelar a ${cantora} e partiu cruzeiro do ${cantor}`)
// } else {
//     console.log("Estamos longe do natal")
// }

// console.log(natal)


//OPERADORES DE ATRIBUIÇÃO
// = ATRIBUIÇÃO DE TIPO
// + ATRIBUIÇÃO DE SOMA  +=
// - ATRIBUIÇÃO DE SUBTRAÇÃO -=
// * ATRIBUIÇÃO DE MULTIPLICAÇÃO *=
// / ATRIBUIÇÃO DE DIVISÃO /= 
//  ++ ATRIBUI UM INCREMENTO (ADICIONA 1 VALOR)
// -- ATRIBUI UM DECREMENTO (RETIRA 1 VALOR)
// % ATRIBUIÇÃO DE RESTO  %= (VAMOS VER COM O TEMPO)

// let x = 1
// let y = 2

//SOMAR
//console.log(x=x+1) //Forma mais completa de somar
//console.log(x+=y) //Forma mais simplicada de somar 

//SUBTRAIR
//console.log(x=x-y) //Forma mais completa de subtrair
//console.log(x-=y) //Forma mais simplificada de subtrair

//MULTIPLICAÇÃO
//console.log(x=x*y)  //Forma mais completa de multiplicar
//console.log(x*=y) //Forma mais simplificada de multiplicar


//DIVISÃO 
//console.log(x=x/y) //Forma mais completa de dividir
//console.log(x/=y) //Forma mais simplificada de dividir

//incremento é a mesmo coisa que x = x+1  (x++)
// x = 1 + 1 = 2
// x = 2 + 1 = 3
// x = 3 + 1 = 4
// x = 4 + 1 = 5


//decremente é a mesma coisa que x = x - 1 (x--)
// x = 1 - 1 = 0
// x = 0 - 1 = -1
// x = -1 - 1 = -2
// x = -2 - 1 = -3 
// x = -3 - 1 = -4
// x = -4 - 1 = -5 

//RESUMÃO SOBRE A FORMA SIMPLIFICADA E COMPLETA

//let precoTotal = 5

//SOMA
//console.log(precoTotal += 15) //simplificada
//console.log(precoTotal = precoTotal + 15) //completa

//SUBTRAÇÃO
//console.log(precoTotal -= 15) //simplificada
//console.log(precoTotal = precoTotal - 15) //completa

//MULTIPLICAÇÃO
//console.log(precoTotal *= 15) //simplificada
//console.log(precoTotal = precoTotal * 15) //completa

//DIVISÃO
//console.log(precoTotal /= 15) //simplificada
//console.log(precoTotal = precoTotal / 15) //completa

//-------------------------LOOPS-------------

//LOOPS: SÃO LAÇOS DE REPETIÇÕES, EXECUTAR UMA TAREFA DIVERSAS VEZES. 

//IMAGINE UM CONTADOR FEITO DE FORMA MANUAL, CONTANDO DE 1 ATÉ 10

//let contador = 0

// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)
// console.log(contador = contador + 1)


//while (enquato) Executa o loop enquanto a condição for verdadeira.  

// while(condição){
//     terefa
//     iteração
// }

//Exemplo 1 - números ímpares

// let _contador = 1; //guardando o valor 0

// while(_contador < 50){ //enquanto contador for menor que 50, execute isso.
// _contador += 2 //o valor atual do _contador + 2
//  console.log(_contador)
// }

//valor inicial é 1, 1 + 2 = 3
//valor atual é 3, 3 + 2 = 5
// valor atual é 5, 5 + 2 = 7 ... 


//EXEMPLO 2, NÚMEROS PARES

// let contandoPares = 0

// while(contandoPares < 50){
// contandoPares +=2 
// console.log(contandoPares)
// }


//EXEMPLO 3 
//DEFININDO AUMENTO DE SALÁRIO

// let salario = 1000

// while(salario < 3000){
// salario += 100
// console.log(`O salário ainda é R$ ${salario}`)
// }

//EXEMPLO 4 

let numero = 3 
while( numero <= 3 ){
//numero = numero *= 3
numero *= 3
console.log(numero)
}


//EXEMPLO 5

let numero2 = 10

while(numero2 < 20 && numero2 > 0 ){
numero2 -=2 
console.log(numero2)
}













//----console.log 
// let teste = 6 
// console.log(teste *= 6)
// console.log(teste *= 6)
// console.logf(teste = teste * 6)