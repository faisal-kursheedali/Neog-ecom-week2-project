const viewMore=document.querySelectorAll("#ecom-btn");
viewmoreBtnArr=[...viewMore];
viewMore.forEach(btn => {
    btn.addEventListener("click",()=>{
        window.location.href = btn.dataset.src;
    })
});

const catagory=document.querySelectorAll(".ecom-nav-catagory");
catagory.forEach(type=>{
    type.addEventListener("click",()=>{
        window.location=type.dataset.html;
    })
})
const cardOffer=document.querySelectorAll(".card-offer");
cardOffer.forEach(card=>{
    card.addEventListener("click",()=>{
        window.location=card.dataset.html;
    })
})

const sideBar = document.querySelector(".nav-main-menu-side-bar")
const menuBtn = document.querySelector(".nav-main-menu")
const mainSpace = document.querySelector(".main-content-space")
const sidebarClose = document.querySelector(".nav-side-bar-close")

menuBtn.addEventListener("click", () => {
    sideBar.style.display = "block";
    mainSpace.style.filter = "opacity(40%)";
})
sidebarClose.addEventListener("click", () => {
    sideBar.style.display = "none";
    mainSpace.style.filter = "opacity(100%)";
});