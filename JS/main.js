const menu = document.getElementById("menu");
const btnmenu = document.getElementById("btnmenu");
const cross = document.querySelector(".fa-times");
btnmenu.addEventListener("click",function(){
menu.classList.add("active");
})
cross.addEventListener("click",function(){
    menu.classList.remove("active");
    })

const cross1 = document.querySelector("#cross");
const button = document.querySelector(".button");
const form = document.querySelector(".container-column2");
button.addEventListener("click",function(){
form.classList.add("visible");

})

cross1.addEventListener("click",function(){
form.classList.remove("visible");
form.classList.remove("#remove");
});

const input = document.querySelector(".numero");

input.addEventListener("keypress",function(){
input.classList.add("blue");
});


const input1 = document.querySelector(".nombre");

input1.addEventListener("keypress",function(){
input1.classList.add("blue");
});


const input2 = document.querySelector(".correo");

input2.addEventListener("keypress",function(){
input2.classList.add("blue");
});


const input3 = document.querySelector(".pais");

input3.addEventListener("keypress",function(){
input3.classList.add("blue");
});


const input4 = document.querySelector(".ciudad");

input4.addEventListener("keypress",function(){
input4.classList.add("blue");
});



const input5 = document.querySelector(".select");

input5.addEventListener("click",function(){
input5.classList.add("blue");
});