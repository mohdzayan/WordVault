const express = require("express")

const app = express()

const PORT = 80

app.use("/static", express.static("public"))
app.set("view-engine", "pug")


app.get("/", (req, res)=>{
    res.status(200).render("home.pug")
})

app.listen(PORT, (req, res)=>{
    console.log(`Server up on ${PORT}`)

})

