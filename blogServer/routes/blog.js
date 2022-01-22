const express = require("express");
const router = express.Router();
const Blog = require('../models/blog')
const { deleteDoc, update , findById } = require("../controllers/blog")
const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
// const fs = require('fs');

// const data = fs.readFileSync('./routes/try.jpeg',{'Content-Type': 'image/jpeg'});
//  console.log(data ,"data")
const upload = multer({
  storage: storage
})
router.post('/upload', upload.single('profile'), (req, res) => {
  // console.log(req.file)
  res.json({
    success: 1,
    profile_url: `http://localhost:3000/profile/${req.file.filename}`

  })

})


router.get('/', async (req, res, next) => {
  const blogs = await Blog.find();
  console.log(blogs)
  res.json(blogs);
})
router.get("/:id", (req, res, next) => {
  findById(req.params.id)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});
router.post('/create', async (req, res, next) => {
  const blog = req.body;
  const doc = await Blog.create(blog);
  console.log(doc, "doc", Blog, "blog");
  res.json(doc);  
})
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  deleteDoc(id)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  update(id, body)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});



module.exports = router;