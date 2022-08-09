const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('is my server working eh?');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
