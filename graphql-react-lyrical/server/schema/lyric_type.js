const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Lyric = require('../models/lyric');

const LyricType = new GraphQLObjectType({
  name:  'LyricType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: require('./song_type'),
      resolve: async (parentValue) => {
        const lyric = await Lyric.findById(parentValue);
        lyric.populate('song');
        return lyric.song
      }
    }
  })
});

module.exports = LyricType;
