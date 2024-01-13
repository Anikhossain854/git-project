

fetch ('https://jsonplaceholder.typicode.com/posts/1')
.then((res)=>{
    console.log(res.json())

}) .catch((err)){
    console.log(err)
}





