//classe 
class Clientes {
    conta = 0;

    constructor(nome, cpf, conta, telefone, endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this._conta = conta;
        this.telefone = telefone;
        this.endereco = endereco;
    }
//função 
    assinarNotificacoes() {
        console.log(`Cliente ${this.nome} assinou notificações.`);
    }
//get
    get conta() {
        return this._conta;
    }
//set
    set conta(valor) {
        this._conta = valor;
    }
//alert
    alert(message) {
        window.alert(`ALERTA ${message}`)
        console.log(`ALERTA: ${message}`);
    }
}
// try catch
try {
    let c1 = new Clientes('Lucas', 8056487, 'corrente', 719400289922, 40830590);
    c1.assinarNotificacoes();
    console.log(`${c1.nome} tem o cpf ${c1.cpf} e conta ${c1.conta} e o telefone ${c1.telefone} e o seu endereco e ${c1.endereco}`);
    //document.getElementById('c1').innerHTML = 'LUCAS';
    c1.alert('Exemplo de alerta.');
} catch (error) {
    console.error('Erro ao criar instancia de Cliente:', error.message);
}
//herança
class Conta_P extends Clientes {
    constructor(nome, conta_Poupanca) {
        super(nome);
        this._conta_Poupanca = conta_Poupanca;

    }
//retornar conta
    get conta_Poupanca() {
        return this._conta_Poupanca;
    }
//setar conta
    set conta_Poupanca(valor) {
        this._conta_Poupanca = valor;
    }
//sobrescrever função
    desativarNotificacoes(desejo) {
        if (desejo = desejo) {
            window.alert(desejo)
            console.log(desejo)
        }
        this.assinarNotificacoes()
        window.alert(`Cliente ${this.nome} não foi sucedido ao desativar notificações.`)
        console.log(`Cliente ${this.nome} não foi sucedido ao desativar notificações.`)

    }
}
//tentar instanciar objeto da superclasse
try {
    let cP = new Conta_P('mariia', 'Poupanca');
    console.log(`${cP.nome} tem o cpf ${cP.cpf} e conta ${cP.conta_Poupanca} e o telefone ${cP.telefone} e o seu endereco é ${cP.endereco}`);
} catch (error) {
    console.error('Erro ao criar instancia de Conta_P:', error.message);
}

let cB = new Conta_P("Lucas")

let desejo = `O cliente ${this.nome} desativou as notificações efetivamente de acordo com seu desejo`

//sobrescrever iguaalndo função
cB.desativarNotificacoes()
//sobrescrita não idêntica
cB.desativarNotificacoes(desejo);

