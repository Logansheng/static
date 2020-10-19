sou.onclick = ()=>{
    const request= new XMLHttpRequest()
request.open("GET","c.css")
request.onreadystatechange= ()=>{
    if(request.readyState===4 && request.status===200){
        const style= document.createElement('style')
        style.innerHTML=request.response
        document.head.appendChild(style)
    }
};
request.send();
}