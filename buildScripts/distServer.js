import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console*/

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
  });

app.get('/users', function(req, res) {
  //Hard coding for simpilicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Deborah","lastName":"Chisha","email":"lucy.chisha@gmail.com"},
    {"id": 2,"firstName":"Ruth","lastName":"Chasha","email":"ruth.chasha@gmail.com"},
    {"id": 3,"firstName":"Mary","lastName":"Chewe","email":"mary.chewe@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
