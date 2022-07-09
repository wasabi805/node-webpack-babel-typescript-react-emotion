import express from 'express';
import Users from './src/routes/users'

const app = express();
const port = 5000;

app.use(express.static( 'public'))
app.use('/users', Users);
app.use('/:id', Users);



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});