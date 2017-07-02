'use strict';
var assert = require('assert');
const graphql = require('graphql');
const chai = require('chai');
const song_type = require('../../server/schema/song_type');
const expect = chai.expect;

describe('SongType Test', () => {

  	// Check to see if there is an id field of type ID
    it('Should have an id field of type ID', () => {
		expect(song_type.getFields()).to.have.property('id');
		expect(song_type.getFields().id.type).to.deep.equals(graphql.GraphQLID);
	});

  	// Check to see if there is an title field of type String
    it('Should have an title field of type String', () => {
		expect(song_type.getFields()).to.have.property('title');
		expect(song_type.getFields().title.type).to.deep.equals(graphql.GraphQLString);
	});


});