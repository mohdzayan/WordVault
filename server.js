const express = require("express")
const path = require("path")
const router = require("./routes/router")
const app = express()

const PORT = 80

app.use("/static", express.static(path.join(__dirname, "public")))
app.set("view-engine", "pug")
app.use("/api", router)

app.get("/", (req, res)=>{
    res.status(200).render("home.pug", {title: "Home"})
})
app.get("/home", (req, res)=>{
    res.status(200).render("home.pug", {title: "Home"})
})
app.get("/add", (req, res)=>{
    res.render("add.pug", {title:"Add"})
})
app.get("/Visualize", (req, res)=>{
    res.render("visualize.pug", {title: "Visualize"})
})
app.listen(PORT, (req, res)=>{
    console.log(`Server up on ${PORT}`)

})

