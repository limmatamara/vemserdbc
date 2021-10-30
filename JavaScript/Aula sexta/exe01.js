class Pet {    
    nome = ' ';
    raca = ' '; 
    idade = 0;    

    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    latirMiar () {
        console.log(`Oi meu nome é ${this.nome}, minha raça é ${this.raca} e minha idade é ${this.idade} anos`);
    }
}

const bruce = new Pet ('Bruce', 'labrador', 1);
bruce.latirMiar();

const floki = new Pet ('Floki', 'SRD', 1);
floki.latirMiar();