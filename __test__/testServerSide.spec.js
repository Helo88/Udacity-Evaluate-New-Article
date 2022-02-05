import { app } from "../src/server/index"
const request = require('supertest');
const assert = require('assert');

describe('GET /', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /html/)
        .expect(200, done);
    });
  });


  describe('POST /sentiments', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/sentiments')
        .send({url: 'https://jamesclear.com/beginners-guide-deliberate-practice'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });