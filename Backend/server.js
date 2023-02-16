const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3002;
const cors = require('cors');
const db = require('./db');
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get('/login', db.getUsers);
// app.get('/login', db.getUserById);
app.post('/sigin', db.createUser);
// app.put('/login/:email', db.updateUser);
app.delete('/login/:email', db.deleteUser);

// Blog ApiEndPoint

app.get('/blogs', db.getBlog);
app.get('/blog', db.getBlogById);
app.post('/blog', db.createBlog);
app.put('/blog/:blogid', db.updateBlog);
app.delete('/blog/:blogid', db.deleteBlog);
app.listen(port,()=>{
    console.log(`server running at port ${port}`)
});