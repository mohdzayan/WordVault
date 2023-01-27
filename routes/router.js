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
            let wordProperties = JSON.parse(words)
            for (let i = 0; i < wordProperties.length; i++) {
                const e = wordProperties[i];
                try {
                    wordProp = e.value
                    if(e.word== req.body.word){
                        if(wordProp == req.body.value){
                            return res.status(200).json("Word already exists")
                            break
                           }
                           else{
                               wordProp = req.body.value
                               e.value = req.body.value
                                let newData = JSON.parse(words)
                                newData.forEach(element => {
                                    if(element.word == req.body.word){
                                        element.value = req.body.value
                                    }
                                });
                                fs.writeFileSync(path.join(__dirname, "../data/words.txt"), JSON.stringify(newData))
                                res.status(200).json("Word updated")
                           }
                    }
                    
                } catch (error) {
                    console.log(error)
                }
            }
        }
        else{
            let newData = JSON.parse(words)
            newData.push(JSON.parse(JSON.stringify(req.body)))
            fs.writeFileSync(path.join(__dirname, "../data/words.txt"), JSON.stringify(newData))
            res.status(200).json("Word added")
        }
    }
    else{
        fs.writeFileSync(path.join(__dirname,"../data/words.txt"), "["+data+ "]")
        return res.status(200).json("this is add route")        }

})
router.get("/getWords", (req, res)=>{
    let isFile = fs.existsSync(path.join(__dirname, "../data/words.txt"))
    if(isFile){
        let data = fs.readFileSync(path.join(__dirname, "../data/words.txt")).toString()
        res.status(200).json(data)
    }
    else{
        res.status(200).json("no words")
    }
})

module.exports = router