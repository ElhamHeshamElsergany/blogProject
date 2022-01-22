const express = require ('express');
var cors = require('cors');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blog');
const userRoutes = require('./routes/users');
// const authMiddleware = require ('./middlewares/auth');
const app= express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/my_database');

app.use(express.json());
app.use("/profile", express.static("upload/images"));
app.use('/users',userRoutes);
// app.use(authMiddleware);
app.use('/blog',blogRoutes);


app.use('*',(req,res,next)=>{
    res.status(404).end()
})
app.use((err,req,res,next)=>{
    res.status(500).json({err});
})

app.listen(3000,()=>{
    console.log('app runing on port 3000')
})