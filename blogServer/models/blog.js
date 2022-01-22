const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            default: null
        },
        body: {
            type: String,
            minlength: 10,
            default: null
        },
        author: {
            type:String
        },
        img: {
           type:String
        },
        tags: {
            type: [
                {
                    type: String,
                    default: null
                },
            ],
        },
    },
    { timestamps: true }
);
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;