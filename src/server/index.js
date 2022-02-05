
const express = require("express");
const dotenv = require("dotenv").config()
const axios = require('axios').default;
const cors = require("cors");
var path = require("path");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

const PORT = 7000;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = dotenv.parsed.API_KEY;

console.log(dotenv.parsed.API_KEY)

const app = express();
app.use(express.static("dist"));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res)=> {
  res.render("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(PORT,  ()=> {
  console.log(`App listening on port ${PORT}!`);
});






app.post("/sentiments", async (req, res) => {
  console.log("hello",req.body.url)

   //lo="https://jamesclear.com/beginners-guide-deliberate-practice"
   const full_URL = `${baseURL}${API_KEY}&lang=en&url=${req.body.url}&model=general`
  try {
    const response = await axios.get(full_URL)
    console.log("results from backend")
    console.log(response.data)
    res.status(200).send(response.data);
  }
  catch (err) {
    res.status(400).send("this url isn't valid");
  }
})

// to solve supertest address not found error add {}
module.exports={app}