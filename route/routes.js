const express = require('express');
const router = express.Router();
const PostModel = require('../model/model');

router.get('/', async (req, res) => {
  // Handle GET request
});

router.get('/Posting', async (req, res) => {
  try {
    const testRun = new PostModel({
      name: "Erick Esquilin",
      description: "Second Post from Endpoint"
    });

   testRun.save();
   
  } catch (error) {
    console.log('Error in POST /Posting:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;