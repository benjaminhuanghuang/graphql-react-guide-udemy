const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const Lyric = require('../models/lyric');
const Song = require('../models/song');
const SongType = require('./song_type');
const LyricType = require('./lyric_type');


const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new Song({ title })).save()
      }
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID }
      },
      resolve: async (parentValue, { content, songId })=> {
        const lyric = new Lyric(
          {
            song: songId,
            content,
          }
        )
        await lyric.save();
        const song = await Song.findById(songId);
        await song.populate('lyrics').execPopulate()
        return song;
      }
    },
    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Lyric.like(id);
      }
    },
    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Song.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;

/*

mutation
{
  addSong(title: "1234"){
    id
  }
}

mutation
{
  addLyricToSong(songId: "5cafe2203c63fe65ad7f39ba", content:"abcde"){
    id
  }
}
*/