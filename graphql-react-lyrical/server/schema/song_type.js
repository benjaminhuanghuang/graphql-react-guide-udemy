const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const LyricType = require('./lyric_type');
const Song = require('../models/song');

const SongType = new GraphQLObjectType({
  name:  'SongType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve: async (parentValue) => {
        const song = await Song.findById(parentValue.id);
        await song.populate('lyrics').execPopulate();
        return song.lyrics;
      }
    }
  })
});

module.exports = SongType;
