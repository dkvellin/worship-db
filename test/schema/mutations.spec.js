'use strict';
var assert = require('assert');
const graphql = require('graphql');
const chai = require('chai');
const mutations = require('../../server/schema/mutations');
const SongType = require('../../server/schema/song_type');
const LyricType = require('../../server/schema/lyric_type');

const expect = chai.expect;

describe('Mutations Fields Validation', () => {

  it('Should have a property of type addSong', () => {
		expect(mutations.getFields()).to.have.property('addSong');
		expect(mutations.getFields().addSong.type).to.deep.equals(SongType);
	});

  it('Should have a property of type addLyricToSong', () => {
		expect(mutations.getFields()).to.have.property('addLyricToSong');
		expect(mutations.getFields().addLyricToSong.type).to.deep.equals(SongType);
	});

  it('Should have a property of type likeLyric', () => {
		expect(mutations.getFields()).to.have.property('likeLyric');
		expect(mutations.getFields().likeLyric.type).to.deep.equals(LyricType);
	});

  it('Should have a property of type deleteSong', () => {
		expect(mutations.getFields()).to.have.property('deleteSong');
		expect(mutations.getFields().deleteSong.type).to.deep.equals(SongType);
	});

});
