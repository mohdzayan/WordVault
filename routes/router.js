const router = require("express").Router()
const bodyParser = require("body-parser")
const fs = require("fs")
const path = require("path")

const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post("/add", urlencodedParser, (req, res)=>{
    const data = JSON.stringify(req.body)
    let isDataFile = fs.existsSync(path.join(__dirname, "../data/words.txt"))
    if(isDataFile){
        let words = fs.readFileSync(path.join(__dirname, "../data/words.txt")).toString()
        if(words.includes(req.body.word)){
            let wordProperties = words.split("?")
            for (let i = 0; i < wordProperties.length; i++) {
                const e = wordProperties[i];
                try {
                    wordProp = JSON.parse(e).value
                    if(wordProp == req.body.value){
                     return res.status(200).json("Word already exists")
                     break
                    }
                    else{
                        wordProp = req.body.value
                        console.log(wordProp)
                    }
                    
                } catch (error) {
                    console.log(error)
                }
            }
        }
            else{
            // return res.status(200).json("Word Already there")
        }
    }
 else{
    fs.writeFileSync(path.join(__dirname,"../data/words.txt"), data+ "?")
    return res.status(200).json("this is add route")
 }
})

module.exports = router