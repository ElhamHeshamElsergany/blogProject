const Blog = require("../models/blog")

const deleteDoc = (id) => {
    return Blog.deleteOne({ id });
  };
  const update = (id, body) => Blog.updateOne({ id }, body);

  const findById = (_id) => Blog.findOne({_id});

module.exports = { deleteDoc, update , findById}