const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  it('Convert a valid input such as 10L: GET request to /api/convert', function(done) {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: '10L' })
      .end(function(err, res) {
        assert.isNull(err);
        assert.strictEqual(res.status, 200);
        assert.deepEqual(res.body, { initNum: 10, initUnit: 'L', returnNum: 2.64172, returnUnit: 'gal', string: '10 liters converts to 2.64172 gallons' });
        done();
      });

  });
