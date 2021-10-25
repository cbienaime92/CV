let server = require("../bin/www");
let chai = require("chai");
let chaiHttp = require("chai-http");

// Assertion 
chai.should();
chai.use(chaiHttp);

describe('Contact API', () => {

    describe("Test GET route /contact", () => {
        it("It should return all contact", (done) => {
            chai.request(server)
                .get("/contact")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                    done();
                });
        });

        

    })
})