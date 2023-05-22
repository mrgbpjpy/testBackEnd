const express = require('express');
const router = express.Router();

router.get('/', async (req,res)=>{
    try{
        res.send(`
        <h1>Home Page</h1>
        <h4>Testing...</h4>
        `)
    }catch(error){
        console.error(error);
        return res.status(500).send("Server error");
    }
})
router.get('/About', async (req,res)=>{
    try{
        res.send(`
        <h1>About Page</h1>
        `)
    }catch(error){
        console.error(error);
        return res.status(500).send("Server error");
    }
})

module.exports = router;