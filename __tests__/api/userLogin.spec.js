const supertest = require("supertest"); 
const assert = require("chai").assert; 

const baseUrl = "https://petstore.swagger.io/v2"; 
let frase;
let token;

describe("PestStore Swagger - User Login", () => {
    const request = supertest(baseUrl);

    it("Get User Login", () => {
       
        username = "Debsvalerio";
        password = "senha123";
        
        return request 
            .get("/user/login?username=" + username + "&password=" + password)
            .then((response) => {
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.code, 200);
                assert.equal(response.body.type, "unknown");
                mensagem = response.body.message;
                frase = mensagem.substring(0,mensagem.indexOf(":") + 1);
                console.log("A frase é " + frase);
                assert.equal(frase, "logged in user session:");
                token = mensagem.substring(mensagem.indexOf(":") + 1);
                console.log("O token eh " + token);
            });
    });
});

