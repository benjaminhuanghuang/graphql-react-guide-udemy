const mongoose = require('mongoose');

const lyricSchema = new mongoose.Schema({
  song: { // refer song _id
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Song'
  },
  likes: { type: Number, default: 0 },
  content: { type: String }
},{
  timestamps: true
});

const Lyric = mongoose.model('Lyric', lyricSchema);
module.exports = Lyric