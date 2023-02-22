fetch("https://jsonplaceholder.typicode.com/photos")
.them((response) => response.json())
.them((json) => {
    for(let pho of json){
        console.log(pho)
    }
})
.catch((error) => console.error(error))
.finally(console.info("Finalizo la peticion")); 