
const supertest = require("supertest"); 
const assert = require("chai").assert; 

const baseUrl = "https://petstore.swagger.io/v2"; 
const userId = 2703;
const username = "Debs";


describe("PestStore Swagger - User", () => {
    const request = supertest(baseUrl);

    it("Post User", () => {
        
        const jsonFile = require("../../vendors/json/user1.json");
         return request 
            .post("/user")  
            .send(jsonFile)
            .then((response) => {
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.code, 200);
                assert.equal(response.body.type, "unknown");
                assert.equal(response.body.message, userId);
        });
    });

    it ("Get User", () => {
        return request
            .get("/user/" + username)
            .then((response) => {
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.id, userId);
                assert.equal(response.body.phone, "969694299");
                assert.equal(response.body.password, "senha123");
            });
    });

    it ("Put User", () => {
        const jsonFile = require ("../../vendors/json/user2.json");

        return request
            .put("/user/" + username)
            .send(jsonFile)
            .then((response) => {
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.code, 200);
                assert.equal(response.body.type, "unknown");
                assert.equal(response.body.message, userId)
            });
    });
    it ("Delete User", () => {
        return request
            .delete("/user/" + username)
            .then((response) => {
                assert.equal(response.statusCode, 200);
            });
    });
});