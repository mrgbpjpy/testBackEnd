const express = require('express');
const app = express();
const router = require('./route/routes')
const cors = require('cors');
const mongoose = require('mongoose')
const PostModel = require('./model/model')


//Middleware
app.get(cors());
app.get(express.json());

mongoose.connect("mongodb+srv://vercel-admin-user:Ilovemywife123@cluster0.rmskjpq.mongodb.net/posting", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  app.use('/', router);
})


app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});