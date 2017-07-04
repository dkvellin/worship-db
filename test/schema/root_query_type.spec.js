'use strict';
var assert = require('assert');
const graphql = require('graphql');
const chai = require('chai');
const root_query_type = require('../../server/schema/root_query_type');
const SongType = require('../../server/schema/song_type');
const LyricType = require('../../server/schema/lyric_type');

const expect = chai.expect;

describe('GraphQL Root Fields', () => {

  it('Should have a property of type song', () => {
		expect(root_query_type.getFields()).to.have.property('song');
		expect(root_query_type.getFields().song.type).to.deep.equals(SongType);
	});

  it('Should have a property of type lyric', () => {
		expect(root_query_type.getFields()).to.have.property('lyric');
		expect(root_query_type.getFields().lyric.type).to.deep.equals(LyricType);
	});


});
