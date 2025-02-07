
// Criar uma tipagem/estrutura a ser seguida
interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

let p1: Pessoa = { nome: "Juliana", sobrenome: "Silva", idade: 19 };

let p2: Pessoa = { nome: "Maria", sobrenome: "Fernanda", idade: 26 };

console.log("Nome: " + p1.nome + p1.sobrenome + " | Idade: " + p1.idade);
console.log("Nome: " + p2.nome + p2.sobrenome);