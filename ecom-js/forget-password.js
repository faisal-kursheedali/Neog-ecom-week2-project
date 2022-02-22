const passwordTxt=document.querySelector(".password-txt");
const PasswordResendOtp=document.querySelector(".password-resend-otp");
const passwordInput=document.querySelector(".password-otp-input");
const passwordOtpBtn=document.querySelector(".Password-otp-btn");

passwordOtpBtn.addEventListener("click",()=>{
    passwordInput.style.display="block";
    PasswordResendOtp.style.display="block";
    passwordOtpBtn.innerText="Login";
    passwordTxt.innerText="Pleas Enter the OTP";

})