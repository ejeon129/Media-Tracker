const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  attraction: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;