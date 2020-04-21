// Showing Menu and Hiding it
const ham = document.querySelector("#hamburger");
const close = document.querySelector("#close-btn");
const overlay = document.querySelector("#overlay");


ham.addEventListener("click", function(e){
    e.preventDefault();
    overlay.classList.add("show");
});

close.addEventListener("click",function(e){
    e.preventDefault();
    overlay.classList.remove("show");
});


//When a link is clicked closes Nav for link being on same page.
const nav = document.querySelector("#nav ul");

nav.addEventListener("click", e =>{
    if(e.target.tagName==="A")
        overlay.classList.remove("show");
})
