let r=document.querySelectorAll(".page .sidebar ul li a");
r.forEach(lia=>{
lia.classList.remove("active")
lia.addEventListener("click",function(){
    lia.classList.toggle("active")
})
})