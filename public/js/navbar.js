function nav() {
    const links = document.querySelectorAll(".link")
    let page = document.title
    links.forEach(link => {
        if(link.innerHTML.includes(page)){
            link.setAttribute("class", "active")
        }
    });
}