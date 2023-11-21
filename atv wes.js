class Clientes {
    conta = 0;

    constructor(nome, cpf, conta, telefone, endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    assinarNotificacoes() {
        console.log(`${this.nome} assinou notificações.`);
    }
}

try {
    let c1 = new Clientes('Lucas', 8056487, 'corrente', 719400289922, 40830590);
    c1.assinarNotificacoes();
    console.log(`${c1.nome} tem o cpf ${c1.cpf} e conta ${c1.conta} e o telefone ${c1.telefone} e o seu endereco e ${c1.endereco}`);
    document.getElementById('c1').innerHTML = 'LUCAS';
} catch (error) {
    console.error('Erro ao criar instancia de Cliente:', error.message);
}

class Conta_P extends Clientes {
    constructor(nome, conta_Poupanca) {
        super(nome);
        this.conta_Poupanca = conta_Poupanca;
    }
}

try {
    let cP = new Conta_P('mariia', 'Poupanca');
    cP.assinarNotificacoes();
    console.log(`${cP.nome} tem o cpf ${cP.cpf} e conta ${cP.conta_Poupanca} e o telefone ${cP.telefone} e o seu endereco e ${cP.endereco}`);
} catch (error) {
    console.error('Erro ao criar instancia de Conta_P:', error.message);
}