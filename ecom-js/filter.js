const filterBtn=document.querySelector(".ecom-filter-head");
const filterPart=document.querySelector(".ecom-filter-part");
const filterCancel=document.querySelector(".filter-cancel");
const filterDone=document.querySelector(".filter-done");
filterBtn.addEventListener("click",()=>{
    // filterPart.style.display="block";
    if (filterPart.style.display==="block") {
        filterPart.style.display="none"
    }else{
        filterPart.style.display="block"
    }
})
filterDone.addEventListener("click",()=>filterPart.style.display="none");
filterCancel.addEventListener("click",()=>filterPart.style.display="none");
