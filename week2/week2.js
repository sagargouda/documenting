const express = require("express")
const app = express()
const port = 4000;

app.get("/", (req, res) => {
 res.send("hey sagar")
})

app.get("/saag", (req, res) => {
 res.send("hey reddy")
})





app.listen(port , console.log("port is running"))