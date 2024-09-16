const body=document.querySelector("body");
let toggle=document.querySelector(".toggle");
let indicator=document.querySelector(".indicator");
let navbar=document.querySelector(".navbarr");
let container=document.querySelectorAll(".container");
let row=document.querySelectorAll(".row");
let pagelink =document.querySelectorAll(".page-link");
let turn=true;
indicator.addEventListener("click", () =>{
if(turn==true)
{
    indicator.classList.add("active");
    body.classList.add("dbody");
    navbar.classList.add("dnavbarr");
    toggle.classList.add("dtoggle");
    indicator.classList.add("dindicator");
    container.forEach(container => {
        container.classList.add("dcontainer");
    });
    row.forEach(row => {
        row.classList.add("drow");
    });
    pagelink.forEach(pagelink => {
        pagelink.classList.add("dlink");
    })
    indicator.innerHTML="Dark";
    turn=false;
}
else{
    indicator.classList.remove("active");
    body.classList.remove("dbody");
    navbar.classList.remove("dnavbarr");
    toggle.classList.remove("dtoggle");
    indicator.classList.remove("dindicator");
    container.forEach(container => {
        container.classList.remove("dcontainer");
    });
    row.forEach(row => {
        row.classList.remove("drow");
    });
    pagelink.forEach(pagelink => {
        pagelink.classList.remove("dlink");
    })
    indicator.innerHTML="Light";
    turn=true;
}
    
})