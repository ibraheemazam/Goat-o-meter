require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(express.static('/Users/ibraheemazam/Documents/rfp-2205/projects/MVP/client/dist'));

app.get('/', (req, res) => {
  res.send('is my server working eh?');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});