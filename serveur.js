import  express from "express";
import { allBooks } from "./database.js";
import  generalSettings from  "./config.js" 

const app = express ()
/////


app.get(`${generalSettings.baseUrl}/books`, function (req, res) {
    res.send(allBooks)
  })

  
app.get(`${generalSettings.baseUrl}/books`, function (req, res) {
    res.send('bob')
  })

 ////// 
  app.listen(5000)
  console.log("serveur is running on port 5000")
