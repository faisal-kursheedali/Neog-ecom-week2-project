const signupPart=document.querySelector(".signup-part");
const loginName=document.querySelector(".login-name");
const loginPart=document.querySelector(".login-part");
const loginPasswordConfirm=document.querySelector(".login-password-confirm");
const loginLink=document.querySelector(".login-link");
const loginInput=document.querySelectorAll(".login-input");

signupPart.addEventListener("click",()=>{
    loginName.style.display="block";
    loginPasswordConfirm.style.display="block";
    
    loginLink.style.display="none";
    loginInput.forEach(loginInput=>{
        loginInput.style.padding="4px";
    })
    signupPart.style.borderBottom="5px solid var(--cta1)";
    loginPart.style.borderBottom="2px solid";
})
loginPart.addEventListener("click",()=>{
    loginName.style.display="none";
    loginPasswordConfirm.style.display="none";
    loginLink.style.display="block";
    loginInput.forEach(loginInput=>{
        loginInput.style.padding="6px";
    })
    loginPart.style.borderBottom="5px solid var(--cta1)";
    signupPart.style.borderBottom="2px solid ";
})





