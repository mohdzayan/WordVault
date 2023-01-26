const express = require("express")

const app = express()

const PORT = 80

app.get("/", (rq, res)=>{
    res.status(200).json("up")
})

app.listen(PORT, (req, res)=>{
    console.log(`Server up on ${PORT}`)

})

