// Bibliotecas
// Configura
const supertest = require("supertest"); // Framework de teste de API;
const assert = require("chai").assert; // Função de asssertiva do resultado;

// Constantes, variáveis e Objetos
const baseUrl = "https://petstore.swagger.io/v2"; // URL base da API;
const petId = 2712871;

// Descrição = Conjunto de Testes ~ Classe
describe("PestStore Swagger - Pet", () => {
    const request = supertest(baseUrl);

    // POST - Teste de incluir animal
    It("Post Pet", () => {
        // Configura
        

    });
});