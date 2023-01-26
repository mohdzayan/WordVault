function addWord() {
    const addForm = document.querySelector("#addForm")
    let formData = new FormData(addForm)
    let data = new URLSearchParams(formData)
    // console.log(data)
    fetch("http://localhost/api/add",{
        method:"POST",
        headers:{
            'Content-type':"application/x-www-form-urlencoded"
        },
        body: data
    })
}