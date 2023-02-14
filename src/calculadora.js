  // Importação de Bibliotecas

  // Classe (opcional)

  // Funções e Métodos (Função tem retorno - 'return'; método não da retorno).

  // var:   variavel
  // let:   variavel aperfeiçoada
  // const: constante


  let somarDoisNumeros = function somarDoisNumeros(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
  }

   let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2) {
    const resultado = num1 - num2;
    return resultado;
  }

  const multiplicarDoisNumeros = (num1, num2) => {
        return num1 * num2;
  }

  const dividirDoisNumeros = (num1, num2) => num1 / num2;
  
  module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
};