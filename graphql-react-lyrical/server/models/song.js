const mongoose = require('mongoose');
//
const Lyric = require('./lyric');

const songSchema = new mongoose.Schema({
  title: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},{
  timestamps: true
});

// Virtul attribute of Song, Song(_id) -> Lyric(song)  1: N 
songSchema.virtual('lyrics', {
  ref: 'Lyric',
  localField: '_id',
  foreignField: 'song'
})

// Delete Song's lyric when Song is removed
songSchema.pre('remove', async function (next) {
  const song = this
  await Lyric.deleteMany({ song: song._id })
  next()
})

const Song = mongoose.model('Song', songSchema);
module.exports = Song
