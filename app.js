const express = require("express")
const app = express ()
const port = 3000; 


app.get('/', (req, res) => {
    res.sendFile
    (__dirname + "/views/home.html")
  })

  app.listen(port, ()=> {
console.log("batman returns puerto: " + port )

  })