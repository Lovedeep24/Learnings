const container=document.querySelector(".buttonContainer");
container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("button"))
    {
        console.log(e.target.textContent);
        e.target.style.color="blue";
    }
});