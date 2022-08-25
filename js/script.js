document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('emailForm');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    notify();
  })
})


function notify() {
  const email = document.getElementById('email');
  const emailValue = document.getElementById('email').value;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const errorMsg = document.querySelector('.error-msg'); 

  errorMsg.innerText = "";
  errorMsg.style.visibility = "hidden";
  errorMsg.classList.remove("active-error");
  email.classList.remove("email-error");

  if(!emailValue) {
    errorMsg.innerText = "Email cannot be empty";
    errorMsg.style.visibility = "visible";
    errorMsg.classList.add("active-error");
    email.classList.add("email-error");
  }else if(!emailValue.match(emailRegex)) {
    errorMsg.innerText = "Please provide a valid email address";
    errorMsg.style.visibility = "visible";
    errorMsg.classList.add("active-error");
    email.classList.add("email-error");
  }
  
}