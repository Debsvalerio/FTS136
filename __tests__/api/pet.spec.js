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
    it("Post Pet", () => {
        // Configura
        const jsonFile = require("../../vendors/json/pet1.json") // Apontamento para o arquivo com os dados do animal.
        //Realizar a requisição e receber a resposta

        // Executa
        return request // chama para a requisição
        .post("/pet")  // endpoint / função para inclusão do animal
        .send(jsonFile)// envia os dados no corpo da requisição

        //Valida
        .then((response) => {
            assert.equal(response.statusCode, 200);
            assert.equal(response.body.id, petId);
            assert.equal(response.body.name, "Katrina");
            assert.equal(response.body.status, "available");
        });

    });
});