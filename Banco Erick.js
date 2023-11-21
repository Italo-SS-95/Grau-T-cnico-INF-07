class Pessoa {
idade = 0
constructor(nome, conta) {
    this.nome = nome
    this.conta = conta
}

setarIdade(idade){
if (typeof novaIdade =)
}

setarConta(conta){
    if (typeof novaConta == "string") {
        this.conta = novaConta
    }
}

    get conta() {
        return this.conta
    }

    set conta(x) {
        if (typeof x == "string") {
            this.x = x
        }
    }

}

let p1 = new Pessoa ("Leo")
let p2 = new Pessoa ("Laissa")

p1.conta = ("pagamento")
p2.conta = ("salário")

console.log(`${p1.nome} tem conta ${p1.conta}`)
console.log(`${p2.nome} tem conta ${p2.conta}`)