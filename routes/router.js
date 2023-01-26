const router = require("express").Router()
const bodyParser = require("body-parser")

const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post("/add", urlencodedParser, (req, res)=>{
    console.log(req.body)
    res.json("this is add route")
})

module.exports = router