class Banco
constructor (nome, codigoBancario){
    this.nome = nome
 this.codigoBancario = codigoBancario

nomearBanco(novoBanco){
    if (typeof novoBanco == "string") {
        this.nome = novoBanco
    }
}
}
};
let b1 = new Banco;

b1.nomearBanco("Banco 1");

console.log(`${b1.nome} tem o ${b1.codigoBancario} registrado`);

class Cliente
constructor (nome, idade){
this.nome = nome
this.idade = idade

setarIdade(novaIdade){
    if (typeof novaIdade == "number") {
        this.idade = novaIdade
    }
}
};
let p1 = new Pessoa("nome");

p1.setarIdade(35);

p1.idade=25;

console.log(`${p1.nome} tem ${p1.idade} anos`);



