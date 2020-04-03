const request = require('supertest')
const app = require('./serverHelper')

describe('POST /users', () => {
  before(() => {
    app
  });

  after(() => {
    // we want to kill the json-server onc we are done
    // app.close(function () {
    //   console.log('Json Server closed')
    // })
  });
  it('responds with json',done => {
    request('http://localhost:3000')
      .post('/users')
      .send({name: 'John'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});