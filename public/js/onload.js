function nav() {
    const links = document.querySelectorAll(".link")
    let page = document.title
    links.forEach(link => {
        if(link.innerHTML.includes(page)){
            link.setAttribute("class", "active")
        }
    });
    preventDefaultSubmit()
}
function preventDefaultSubmit() {
    const submitBtn = document.querySelectorAll(".submit")
    submitBtn.forEach(btn => {
        btn.addEventListener("click", (e)=>{
            e.preventDefault()
        })
    });
}