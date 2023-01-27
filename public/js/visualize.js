fetch("http://localhost/api/getWords")
    .then(res => {
        return res.json()
    })
    .then(data => {
        let jsonData = JSON.parse(data)
        const textarea = document.createElement("p")
        const textArea = document.querySelector(".textArea")
        textarea.className = "words"
        jsonData.forEach(e => {
            let wordElemet = document.createElement("text")
            let word = document.createTextNode(e.word)
            wordElemet.style.position = "relative";
            wordElemet.style.left = Math.floor((Math.random() * 50) + 1) + "%";
            wordElemet.style.top = Math.floor((Math.random() * 50) + 1) + "%";
            wordElemet.style.margin= "8px";
            wordElemet.style.transform = `rotate(${Math.floor((Math.random() * 360) + 1)}deg)`
            wordElemet.style.display = "inline-block"
            wordElemet.style.fontSize = e.value * 8 + "px";
            if(e.value >= 3){
                wordElemet.style.fontWeight = "bold"
            }
            else if(e.value == 2 ){
                wordElemet.style.fontWeight = "500"
            }
            else{
                wordElemet.style.fontWeight = "100"
            }
            wordElemet.style.color = "#fff";
            wordElemet.appendChild(word)
            textarea.appendChild(wordElemet)
        });
        textArea.appendChild(textarea)
    })