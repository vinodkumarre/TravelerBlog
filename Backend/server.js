const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3002;
const db = require('./db')
app.get('/books', (request, response) => {
    response.json(request.body)
});
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/books', db.getUsers);
app.post('/book', db.createUser);
app.put('/book/:name', db.updateUser);
app.delete('/book/:name', db.deleteUser);
app.listen(port,()=>{
    console.log(`server running at port ${port}`)
});