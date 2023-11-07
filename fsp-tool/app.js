const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
