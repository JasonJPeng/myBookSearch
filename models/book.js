const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {type: String, require:true},
    item: {type: Object, require:true},
  title: { type: String, required: true },
//   subtitle: String,
//   description: String,
// //   authors: [{ type: String, required: true }],
//   thumbnail: String,
//   smallThumbnail: String,
//   preview: String,
//   reading: String,
  notes:[{type:Number}]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
