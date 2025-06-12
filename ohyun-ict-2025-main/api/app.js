//https://crudcrud.com/api/6369aa51cf11457baee4aa52fe5b1192
// fetch("https://crudcrud.com/api/6369aa51cf11457baee4aa52fe5b1192/post").then((res)=>{
// return res.json()
// }).then((json)=>{
//     console.log(json)
// })

//async function init(){}
const json = [];
const post_url = "https://crudcrud.com/api/94e2f3c71c8f4ae7b246def51cbed904/post"

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
const init = async ()=>{
    const res = await fetch("https://crudcrud.com/api/94e2f3c71c8f4ae7b246def51cbed904/post")
    const json = await res.json();
    console.log(json);
    json.forEach(post => {
        const postLi = document.createElement("li");
        postLi.innerText = post.title;
        document.querySelector("#board").appendChild(postLi);
        const contentDiv = document.createElement("div");
        contentDiv.innerText = post.content;
        postLi.appendChild(contentDiv);
        contentDiv.style.display = 'none';
        let toggle = false;
        postLi.addEventListener('click',()=>{
            if (contentDiv.style.display == "block") {
                contentDiv.style.display = "none"
                
            }else{
                contentDiv.style.display = "block"
            }
            
        })

        const but = document.querySelector('#button').addEventListener('click',()=>{
            if (document.querySelector("#post-form").style.display=="block"){
                document.querySelector("#post-form").style.display="none"
                
            }else{
                document.querySelector("#post-form").style.display="block"
            }
        })
        })

}
init()
