function check() {
    const form = document.querySelector("#textForm")
    let formData = new FormData(form)
    let words = JSON.stringify(formData
        .get("text")
        )
    let value = 0
    fetch("http://localhost/api/getWords")
        .then(res => res.json())
        .then(data => {
            try{
                let jsonData = JSON.parse(data)
                jsonData.forEach(element => {
                    if(words.includes(element.word)){
                        value += parseInt(element.value)
                    }
                }
                );
                const textArea = document.querySelector(".textArea")
                const p = document.querySelector(".textValue")
                p.innerHTML = value
                textArea.appendChild(p)
            }
            catch{
                console.log("no words")
            }
        })
}