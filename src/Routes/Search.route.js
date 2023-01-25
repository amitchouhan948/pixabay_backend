const { default: axios } = require("axios");
const express = require("express");
const app = express.Router();

app.get("/", async (req, res) => {

    const query=(req.query.q)


    if(query){

        console.log(query)
        try{

            let data= await axios.get(`https://pixabay.com/api/?key=33103512-d0b611af2ceddf95d67d63d03&q=${query}`)
            console.log("x")
           return res.send(data.data);
    
        }
        catch(err){
        
            return res.send(err)
    
        }




    }

    try{

        let data= await axios.get("https://pixabay.com/api/?key=33103512-d0b611af2ceddf95d67d63d03&q=man")
            console.log("y")
        res.send(data.data);

    }
    catch(err){
    
      res.send(err)

    }
    
    });














module.exports = app;
