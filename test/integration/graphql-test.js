const tester = require('graphql-tester').tester;
const chai = require('chai');
const expect = chai.expect;
var assert = require('chai').assert;
var should = require('chai').should();
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('WorshipDB', () => {
    let test = tester({
        url: 'http://localhost:4000/graphql'
    });

    describe('Successfully getting the name of Person #1', () => {
        const response = test('{song(id: 59544862b454650fe0bea888) { title } }');

        it('Returns success', () => {
            return response.should.eventually.have.property('status').equal(200);
        });
        it('Returns the correct name', () => {
           return response.should.eventually.have.deep.property('data.song.title').equal('Luke Skywalker');
       });
    });
});
