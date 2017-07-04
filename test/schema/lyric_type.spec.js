'use strict';
var assert = require('assert');
const graphql = require('graphql');
const chai = require('chai');
const lyric_type = require('../../server/schema/lyric_type');
const expect = chai.expect;

describe('LyricType Fields Validation', () => {

  	// Check to see if there is an id field of type ID
    it('Should have an id field of type ID', () => {
		expect(lyric_type.getFields()).to.have.property('id');
		expect(lyric_type.getFields().id.type).to.deep.equals(graphql.GraphQLID);
	});

  	// Check to see if there is an likes field of type Integer
    it('Should have an likes field of type Int', () => {
		expect(lyric_type.getFields()).to.have.property('likes');
		expect(lyric_type.getFields().likes.type).to.deep.equals(graphql.GraphQLInt);
	});

    // Check to see if there is an content field of type String
    it('Should have an content field of type String', () => {
		expect(lyric_type.getFields()).to.have.property('content');
		expect(lyric_type.getFields().content.type).to.deep.equals(graphql.GraphQLString);
	});

 //    // Check to see if there is an song field of type song_type
 //    it('Should have an song field of type String', () => {
	// 	expect(lyric_type.getFields()).to.have.property('song');
	// 	expect(lyric_type.getFields().song.type).to.deep.equals(song_type);
	// });

});
