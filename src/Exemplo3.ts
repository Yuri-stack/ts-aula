function listarPessoa(nome: string, idade: number) {
    return {
        nome,
        idade,
    };
}

const pessoa: [string, number] = ['Márcia da Silva', 30]; // tupla
// const x: ["Marcia", 30, true, 8.5]

// console.log(listarPessoa(pessoa[0], pessoa[1]));
console.log(listarPessoa(...pessoa));

console.log(" ");

let vetor: number[] = [0, 1, 2, 3];

function listarDados(...num: number[]): void {  // Aqui usamos o Rest Operator
    console.log('{', ...num, '}');              // Aqui usamos o Rest Operator
}

listarDados(...vetor);  // Aqui usamos o Spread Operator