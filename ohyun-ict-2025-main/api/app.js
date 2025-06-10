//https://crudcrud.com/api/6369aa51cf11457baee4aa52fe5b1192
// fetch("https://crudcrud.com/api/6369aa51cf11457baee4aa52fe5b1192/post").then((res)=>{
// return res.json()
// }).then((json)=>{
//     console.log(json)
// })

//async function init(){}

const post_url = "https://crudcrud.com/api/6369aa51cf11457baee4aa52fe5b1192/post"
const init = async ()=>{
    const res = await fetch("https://crudcrud.com/api/6369aa51cf11457baee4aa52fe5b1192/post")
    const json = await res.json();
    console.log(json);
    
}
init()
const write = async (data)=>{
    const res = await fetch(post_url,{
        method :"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })
}

const submit = ()=>{
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const data = {
        title:title,
        content:content
    }
    write(data);
}

document.querySelector("#post-form").addEventListener("submit",(e)=>{
    e.preventDefault()
    submit();
})