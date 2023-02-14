// Bibliotecas
// Apontamento para o arquivo de desenvolvimento que vamos testar

// const { exportAllDeclaration } = require("@babel/types");
// const { default: test } = require("node:test");
const calculadora = require("../../src/calculadora");

// Apontamento para o arquivo de massa de teste
const arquivoCsv = require("../../vendors/csv/massaDivisao.csv");

//Funções de Teste de Unidade
test("Somar 5 + 7", () => {

    // 1 - Configura
        // 1.1 Dados de entrada
        const num1 = 5;
        const num2 = 7;

        // 1.2 Dados de saída
        resultadoEsperado = 12;

    //2 - Executa
        // criando objeto para receber a funçao calculadora
        const somarDoisNumeros = calculadora.somarDoisNumeros;
        
        // executando a funçao somar dois numeros e guardando o resultado
        const resultadoAtual = somarDoisNumeros(num1, num2);

    //3 - Valida
        expect(somarDoisNumeros(num1, num2)).toBe(resultadoEsperado);
})

test("Subtrair 15 - 7", () => {

    // 1 - Configura / Arrange
        // 1.1 - Dados de Entrada
            const num1 = 15;
            const num2 = 7;

        // 1.2 - Dados de Saída
            resultadoEsperado = 8;
         
    // 2 - Executa / Act
            const subtrairDoisNumeros = calculadora.subtrairDoisNumeros;
            const resultadoAtual = subtrairDoisNumeros(num1, num2);

    // 3 - Valida / Assert
            expect(resultadoAtual).toBe(resultadoEsperado);
})

test("Multiplicar 3 * 7", () => {
    // 1 - Configura
     // 1.1 - Dados de Entrada
            const num1 = 3;
            const num2 = 7;

     // 1.2 - Dados de Saída
        resultadoEsperado = 21;
        
     // 2 - Executa
            const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;
            const resultadoAtual = multiplicarDoisNumeros(num1, num2);

     // 3 - Valida
            expect(resultadoAtual).toBe(resultadoEsperado);
})  
// HP ALM Data Driven Test

// massa de dados: contem os dados de entrada.
// massa de teste: contem os dandos de entrada E os resultados esperados;
let massaDivisao = [
    [10, 5, 2],
    [15, 3, 5],
    [ 8, 4, 2],
    [ 7, 0, Infinity]
];


test.each(massaDivisao)("Dividir %f / %f", (num1, num2, resultadoEsperado) => {
    // 1 - Configura
    
            /* const num1 = 50;
            const num2 = 5;
            resultadoEsperado = 10; */

    // Dados de entrada e resultado esperado são providos pela lista massaDivisao        

    // 2 - Executa
            const dividirDoisNumeros = calculadora.dividirDoisNumeros;
            const resultadoAtual = dividirDoisNumeros(num1, num2);

    // 3 - Validada
            expect(resultadoAtual).toBe(resultadoEsperado);
})

test("Dividir 27 / 9", () => {
    // 1 - Configura
            const num1 = 27;
            const num2 = 9;
            resultadoEsperado = 3;

    // 2 - Executa
            const dividirDoisNumeros = calculadora.dividirDoisNumeros;
            const resultadoAtual = dividirDoisNumeros(num1, num2);

    // 3 - Validada
            expect(resultadoAtual).toBe(resultadoEsperado);
})

test("Dividir 50 / 5", () => {
    // 1 - Configura
            const num1 = 50;
            const num2 = 5;
            resultadoEsperado = 10;

    // 2 - Executa
            const dividirDoisNumeros = calculadora.dividirDoisNumeros;
            const resultadoAtual = dividirDoisNumeros(num1, num2);

    // 3 - Validada
            expect(resultadoAtual).toBe(resultadoEsperado);
})

test.each(arquivoCsv.array.map(elemento => [
        elemento.num1,
        elemento.num2,
        elemento.resultadoEsperado

]))
("DDT: Dividir %f / %f", (num1, num2, resultadoEsperado) => {
    // 1 - Configura
   
    // 2 - Executa
            const dividirDoisNumeros = calculadora.dividirDoisNumeros;
            const resultadoAtual = dividirDoisNumeros(num1, num2);

    // 3 - Validada
            expect(resultadoAtual).toBe(resultadoEsperado);
})