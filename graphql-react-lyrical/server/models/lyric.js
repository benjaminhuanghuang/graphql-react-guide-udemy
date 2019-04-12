const mongoose = require('mongoose');

const lyricSchema = new mongoose.Schema({
  song: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'song'
  },
  likes: { type: Number, default: 0 },
  content: { type: String }
});

lyricSchema.statics.like = function(id) {
  const Lyric = mongoose.model('lyric');

  return Lyric.findById(id)
    .then(lyric => {
      ++lyric.likes;
      return lyric.save();
    })
}

const Lyric = mongoose.model('Lyric', lyricSchema);
module.exports = Lyric