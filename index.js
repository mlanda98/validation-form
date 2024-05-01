const form = document.getElementById("form");

function handleSubmit(event){
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;
  console.log(emailValue);
  if (emailValue === ""){
    emailInput.setCustomValidity("Please enter your email address.")
    emailInput.reportValidity();
    return;
  } else {
    emailInput.setCustomValidity("");
  }
  const country = document.getElementById("country");
  const countryValue = country.value;
  console.log(countryValue);
  if (countryValue === ""){
    country.setCustomValidity("Please select your country.");
    country.reportValidity();
    return;
  } else {
    country.setCustomValidity("");
  }

 const zipCode = document.getElementById("zip");
 const zipValue = zipCode.value;
 if (zipValue === "") {
   zipCode.setCustomValidity("Please enter your zip code.");
   zipCode.reportValidity();
   return;
 } else {
   zipCode.setCustomValidity("");
 }
  
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;
  if (passwordValue === ""){
    passwordInput.setCustomValidity("Please enter a password");
    passwordInput.reportValidity();
    return;
  } else{
    passwordInput.setCustomValidity("");
  }

   if (confirmPasswordValue === ""){
    confirmPasswordInput.setCustomValidity("Please enter a password");
    confirmPasswordInput.reportValidity();
    return;
   } else{
    confirmPasswordInput.setCustomValidity("");
  }

  if (passwordValue !== confirmPasswordValue){
    passwordInput.setCustomValidity("Passwords do not match.");
    confirmPasswordInput.setCustomValidity("Passwords do not match.");
    passwordInput.reportValidity();
    confirmPasswordInput.reportValidity();
    return;
  }
    alert("Successfully submitted!");
    form.reset();
  }
  


form.addEventListener("submit", handleSubmit);