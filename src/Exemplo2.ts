// Função com Retorno
function subtrair(numero1: number, numero2: number): number {
    return numero1 - numero2;
}

let resultado: number = subtrair(20, 10); // resultado = 10

console.log(resultado);
console.log(" ");

// Funções sem retorno
function tabuada(numero: number): void {

    for (let contador = 1; contador <= 10; contador++) {

        let resultado = numero * contador;
        console.log(`${numero} x ${contador} = ${resultado}`);  // Template Strings / Template Literals

        // console.log(numero + " x " + contador + " = " + resultado);

    }

}

// Chamando a função
tabuada(5);