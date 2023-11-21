console.log("Registrar_Console")
//tipos de dados
let string = "string"
String(tipo)

let number = 0
number = 0.0
Number(tipo)

let bool = true
bool = false
Boolean(tipo)

let null = null
null(tipo)

//decalração de variáveis
declarar(variavelLocal, variavelGlobal, constante){ let variavelLocal, var variavelGlobal, const constante }

//inicialização de variáveis
inicializar(variavelLocal, variavelGlobal, constante){
    declarar()
    variavelLocal = variavelLocal; 
    variavelGlobal = variavelGlobal 
    constante = variavelGlobal
}

/*let inicializacao

let variavelLocal = "variavelLocal"

var variavelGlobal = "variavelGlobal"

const constante = "constante"*/

//Operadores Matemáticos
adição(parcela) { parcela + parcela = soma }

subtracao(minuendo,) { minuendo - = diferenca }

multiplicar(multiplicando * multiplicador) { multiplicando * multiplicador = produto }

dividir(dividendo, divisor) { dividendo / divisor = quociente }

restificar(dividendo, divisor, resto) { dividendo % divisor = resto }

concatenar(concatenacao) { "string", concatenacao + String(concatenacao) }

//
imprimir(impressao) { document.print(impressao) }

//Documento
document.getElementById("id")
document.getElementsByClassName("classe")
document.getElementsByTagName("tag")
document.getElementsByName("nome")
document.querySelector("#id .classe [atributo] tag")
document.querySelectorAll("elemento")
document.tag.atribute.property()

//
document.firstElementChild
document.lastElementChild
document.parentElement
document.nextSibling
document.previousSibling
document.children
document.children[]
Array.from(.children)
document.append
document.appendChild
document.prepend
document.insertBefore("inserir_anterior")

//
document.createElement("elemento")
document.createAttribute("atributo")
document.createComment("comentário")
document.innerHTML = "Interno_HTML"
document.textContent = "Conteúdo_Textual"

//
document.write("escrever")
document.writeln("escrever_linha")

    //eventos
    .onload = "Pós_Carregamento"
        .onchange = "Pós_Mudança"

            .onclick = "Após_Clicar"
                .onmouseover = "Mouse_Sobre"
document.onmouseout = "Saída_Mouse"
document.onmousedown = "Descer_Mouse"
document.onmouseup = "Subir_Mouse"

    .key = "tecla"
document.onkeydown = "Pressionar_Tecla"
    .onkeyup = "Soltar_Tecla"
        .addEventListener("evento, funcao, Capturar_Uso")

        .setInterval =
.clearInterval =
.setTimeout =
.clearTimeout =

    //Window
    window.alert("alerta_janela")
window.prompt("")
window.innerHeight
window.innerWidth
window.scrollX
window.scrollY
window.scrollBy
window.scrollTo
window.location.href
window.location.hostname
window.location.pathname
window.open("Abrir_Janela")
window.close("Fechar_Janela")
window.print("Imprimir_Janela")
window.confirm("Confirmar_Janela")

//Cookie
document.cookie
setCookie
deleteCookie
getCookie
navigator.cookieEnabled

//
class Classe { }

class superClasse { }

class subClasse extends superClasse { }