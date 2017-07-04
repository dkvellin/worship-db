'use strict';

const request = require('request-promise');
const integrationServer = require("../../utils/integrationServer");
const chai = require('chai');

const expect = chai.expect;

describe('Integration', () => {

  let app;

  before((done) => {
    app = integrationServer.start(done);
  });

  after((done) => {
    integrationServer.stop(app, done);
  });

  it('Should resolve I Surrender - Hillsong', () => {

    const query = `{
      song(id: "595446c9b454650fe0bea87a") {
    		title
      }
    }`;

    const expected = {
		"data": {
			"song": {
			  "title": "I Surrender - Hillsong"
			}
		}
	};

    return integrationServer
      .graphqlQuery(app, query)
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.deep.equals(expected);

      }).done();
  });

});
