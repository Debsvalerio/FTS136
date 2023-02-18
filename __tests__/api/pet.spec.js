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
    const pets = require("../../vendors/json/petn");
    let pet = require("../../vendors/json/petBase.json");

    pets.array.forEach(({nomePet, idPet, nomeCategoria, idCategoria}) => {
        it("Setup Swagger - Add Pets - " + nomePet, () => {
            
            pet.id = idPet
            pet.name = nomePet
            pet.category.id = idCategoria
            pet.category.name = nomeCategoria
            pet.tags[0].id = 3
            pet.tags[0].name = "vaccinated"
            pet.status = "done"

            return request
            .post("/pet")
            .send(pet)
            .then((response) => {   
                assert.equal(response.statusCode, 200)
            });
    
        });
    })
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

    // Consulta o animal pelo seu petId
    it("Get Pet", () => {
        return request          // chama para a requisição
             .get("/pet/" + petId)   // Consultar o animal pelo Id
             .then((response) => {   // validar a resposta
            assert.equal(response.statusCode, 200);
            assert.equal(response.body.id, petId);
            assert.equal(response.body.name, "Katrina");
            assert.equal(response.body.status, "available");
        });
    });

    //Alterar dados do animal
    it("Put Pet", () => {
        const jsonFile = require("../../vendors/json/pet2.json") // Apontamento para o arquivo com os dados alterado.

        return request 
             .put("/pet")  
             .send(jsonFile)
             .then((response) => {
            assert.equal(response.statusCode, 200);
            assert.equal(response.body.id, petId);
            assert.equal(response.body.name, "Katrina");
            assert.equal(response.body.tags[1].id, 4);
            assert.equal(response.body.tags[1].name, "castrated");
            assert.equal(response.body.status, "solded");
        });
    });

    it("Delete Pet", () => {
        return request
            .delete("/pet/" + petId)
            .then((response) => {
                assert.equal(response.statusCode, 200);
            });
    });

    //Funçao de carga de animais
    pets.array.forEach(({nomePet, idPet}) => {
       
        it("Delete Pets - " + nomePet, () => {
            return request
                .delete("/pet/" + idPet)
                .then((response) => {
                    assert.equal(response.statusCode, 200)
                });
        });
    });

});