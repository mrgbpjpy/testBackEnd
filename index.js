const express = require('express');
const app = express();
const router = require('./route/routes')
const cors = require('cors');
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

//Middleware
app.get(cors());
app.get(express.json());


app.use('/', router)

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});