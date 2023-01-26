const router = require("express").Router()
const bodyParser = require("body-parser")
const fs = require("fs")
const path = require("path")

const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post("/add", urlencodedParser, (req, res)=>{
    const data = JSON.stringify(req.body)
    fs.writeFileSync(path.join(__dirname,"../data/words.txt"), data)
    res.status(200).json("this is add route")
})

module.exports = router