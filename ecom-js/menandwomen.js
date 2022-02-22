const menCard=document.querySelectorAll(".card-sm");
menCard.forEach(card=>{
    card.addEventListener("click",()=>{
        window.location=card.dataset.html;
    })
    
})