const express = require("express")
const path = require("path")

const app = express()

const PORT = 80

app.use("/static", express.static(path.join(__dirname, "public")))
app.set("view-engine", "pug")


app.get("/", (req, res)=>{
    res.status(200).render("home.pug", {title: "Home"})
})
app.get("/home", (req, res)=>{
    res.status(200).render("home.pug", {title: "Home"})
})
app.get("/add", (req, res)=>{
    res.render("add.pug", {title:"Add"})
})
app.get("/visualize", (req, res)=>{
    res.render("visualize.pug")
})
app.listen(PORT, (req, res)=>{
    console.log(`Server up on ${PORT}`)

})

