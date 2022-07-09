import express from 'express';
import Users from './src/routes/users'

const app = express();
const port = 5000;

/* Assets */
app.use(express.static( 'public'))

/* Routes */
app.use('/users', Users);

app.get('/', (req, res) => {
  res.send('Welcome to the Root Page');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});