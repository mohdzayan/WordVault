function nav() {
    const links = document.querySelectorAll(".link")
    let page = document.title
    links.forEach(link => {
        if(link.innerHTML.includes(page)){
            link.setAttribute("class", "active")
        }
    });
    preventDefaultSubmit("no form")
}
function preventDefaultSubmit(element) {
try{
    const submitBtn = document.querySelectorAll(".submit")
    submitBtn.forEach(btn => {
        btn.addEventListener("click", (e)=>{
            e.preventDefault()
        })
    }).then(res=>res.json()).then(data=>console.log(data))
    console.log(element)
}
catch{
    console.log(element)
}
}