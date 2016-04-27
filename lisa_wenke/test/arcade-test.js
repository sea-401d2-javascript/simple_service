'use strict';
process.env.MONGOLAB_URI = 'mongodb://localhost/arcade-test';
require(__dirname + '../../server.js');
var mongoose = require('mongoose');
var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var request = chai.request;
var expect = chai.expect;
var Arcade = require(__dirname +'./../models/Arcade');
var newId;

describe('testing Arcade REST api routes', () => {
  beforeEach((done)=>{
    var newArcade = new Arcade({
      name: 'Test Name',
      address: 'Test Address'
    });
    newArcade.save((err)=>{
      if(err) return console.log(err);
      done();
    });
  });
  afterEach((done)=>{
    mongoose.connection.db.dropDatabase(function(){
      done();
    });
  });
  it('POST should post new data to /Arcades', (done)=>{
    request('localhost:5000')
    .post('/api/arcades')
    .send({name: 'test arcade'})
    .end((err, res) =>{
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body.data['name']).to.have.eql('test arcade');
      expect(res.body.data).to.have.property('_id');
      done();
    });
  });
  it('GET should receive the /arcades data', (done)=>{
    request('localhost:5000')
    .get('/api/arcades')
    .end((err, res)=> {
      expect(err).to.eql(null);
      expect(res).to.be.status(200);
      expect(res).to.be.json;
      console.log(res.body);
      expect(res.body).to.exist;
      expect(Array.isArray(res.body)).to.eql(true);
      done();

    });
  });
});
describe('needs an array to get id', () =>{
  beforeEach((done)=>{
    var testArcade = new Arcade({name:'test arcade'});
    testArcade.save((err, data)=>{
      newId = data.body;
      this.testArcade = data;
      done();
    });
  });
  it('should be able to make a note in a beforeEach block', ()=>{
    expect(this.testArcade.name).to.eql('test arcade');
    expect(this.testArcade).to.have.property('_id');
  });
  it('GET should receive the /arcades/:id data', (done)=>{
    request('localhost:5000')
    .get('/api/arcades/' + newId)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.be.status(200);
      console.log('NEW ID:' + res.body.newId);
      expect(res.body).to.exist;
      done();
    });
  });

  it('PUT should receive the /arcades/:id data', (done)=>{
    request('localhost:5000')
    .put('/api/arcades/' + newId)
    .send({name: 'test PUT name'})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res).to.be.status(200);
      console.log('CHECK' + newId);
      expect(res).to.be.json;
      done();
    });

  });
  it('DELETE should remove the arcade by the id', (done)=>{
    request('localhost:5000')
        .delete('/api/arcades/'+ newId)
        .end((err, res)=>{
          expect(err).to.eql(null);
          expect(res).to.be.status(200);
          expect(res).to.be.json;
          done();
        });
  });
  it('should make an array of arcade names for /arcade-names', (done)=>{
    request('localhost:5000')
      .get('/api/arcade-names')
      .end((err, res)=>{
        expect(err).to.eql(null);
        expect(res).to.be.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property('nameArray');
        done();
      });
  });
});
