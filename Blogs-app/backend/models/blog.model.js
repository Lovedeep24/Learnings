const mongoose = require("mongoose");

// title
// completed

// schema
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  }
});

const BlogModel = mongoose.model("Blog", BlogSchema); // todos

// BlogModel is responsible for everything.

module.exports = BlogModel;
