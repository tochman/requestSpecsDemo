const request = require('supertest')
const db = require('../data/db.json')
const app = require('./serverHelper')

describe('GET /users', () => {
  before(() => {
    app
  });

  after(() => {
    // app.close(function () {
    //   console.log('Json Server closed')
    // })
  });

  it('responds with collection of users', (done) => {
    request('http://localhost:3000')
      .get('/users')
      .set('Accept', 'application/json')
      .expect(db.users)
      .expect(200, done)
  });
});