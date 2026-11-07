let nameInput = document.getElementById("name")
let nameError = document.getElementById("nameError")

let emailInput = document.getElementById("email")
let emailError = document.getElementById("emailError")

let phoneInput = document.getElementById("phone")
let phoneError = document.getElementById("phoneError")

let dobInput = document.getElementById("dob")
let dobError = document.getElementById("dobError")

let genderInput = document.getElementById("gender")
let genderError = document.getElementById("genderError")

let passwordInput = document.getElementById("password")
let passwordError = document.getElementById("passwordError")

let confirmPasswordInput = document.getElementById("confirmPassword")
let confirmPasswordError = document.getElementById("confirmPasswordError")

let bioInput = document.getElementById("bio")
let bioError = document.getElementById("bioError")

let termsInput = document.getElementById("terms")
let submitBtn = document.getElementById("submitBtn")

//EventTarget 

nameInput.addEventListener("input",function(){
    if(nameInput.value.length >=2){
        nameInput.classList.add("valid")
        nameError.textContent = "";
        
    }else if(nameInput.value.length===0){
        nameInput.classList.remove("valid")
        nameInput.classList.add("invalid")
        nameError.textContent ="Name is Required."
    }else{
        nameInput.classList.remove("invalid")
        nameInput.classList.add("valid")
        nameError.textContent ="Name must be at least 2 characters."
    }
});

emailInput.addEventListener("input",function(){
    if(emailInput.value.includes("@") && emailInput.value.includes(".")){
        emailInput.classList.add("valid")
        emailError.textContent = "";
    }
    else if(emailInput.value.length ===0){
        emailInput.classList.add("invalid")
        emailError.textContent ="Email is Required."
    }else{
        emailInput.classList.add("valid")
        emailInput.classList.remove("invalid")
        emailError.textContent="please enter a valid email"
    }
})

phoneInput.addEventListener("input",function(){
    if(phoneInput.value.length ===10){
        phoneInput.classList.add("valid")
        phoneError.textContent =""
    }else if(phoneInput.value.length ===0){
        phoneInput.classList.add("invalid")
        phoneError.textContent ="Phone number is required."
    }else{
        phoneInput.classList.add("valid")
        phoneInput.classList.remove("invalid") 
        phoneError.textContent ="Enter a valid 10-digit phone number."     
    }
})

dobInput.addEventListener("input",function(){
    if(dobInput.value !== ""){
        dobInput.classList.add("valid")
        dobError.textContent =""
    }else{
        dobInput.classList.add("invalid")
        dobError.textContent ="Date of birth is required."     
    }
})

genderInput.addEventListener("input",function(){
    if(genderInput.value !== ""){
        genderInput.classList.add("valid")
        genderError.textContent =""
    }else{
        genderInput.classList.add("invalid")
        genderError.textContent ="Please select a gender."     
    }
})


passwordInput.addEventListener("input",function(){
    let remaining = 6 - passwordInput.value.length;
    if(passwordInput.value.length >=6){
        passwordInput.classList.add("valid")
        passwordError.textContent =""
    }else if(passwordInput.value.length ===0){
        passwordInput.classList.add("invalid")
        passwordError.textContent ="Password is required."
    }else{
        passwordInput.classList.add("valid")
        passwordInput.classList.remove("invalid") 
        passwordError.textContent ="Need " + remaining + " more character(s) to meet Strong Password."
    }
})

confirmPasswordInput.addEventListener("input",function(){
    if(confirmPasswordInput.value === passwordInput.value  && confirmPasswordInput.value !== "" ){
        confirmPasswordInput.classList.add("valid")
        confirmPasswordError.textContent =""
    }else if(confirmPasswordInput.value.length ===0){
        confirmPasswordInput.classList.add("invalid")
        confirmPasswordError.textContent ="Please confirm your password."
    }else{
        confirmPasswordInput.classList.add("valid")
        confirmPasswordInput.classList.remove("invalid") 
        confirmPasswordError.textContent ="Passwords do not match."
    }
})

bioInput.addEventListener("input",function(){
    document.getElementById("bioCount").textContent = bioInput.value.length +"/200 characters"

    if(bioInput.value.length >=2 ){
        bioInput.classList.add("valid")
        bioError.textContent =""
    }else if(bioInput.value.length ===0){
        bioInput.classList.add("invalid")
        bioError.textContent ="Bio is required."
    }else{
        bioInput.classList.add("valid")
        bioInput.classList.remove("invalid") 
        bioError.textContent ="Bio must be at least 2 characters.."
    }
})




// Step 5 - Submit button enable/disable
function checkAllValid() {
    if (
        nameInput.classList.contains("valid") &&
        emailInput.classList.contains("valid") &&
        phoneInput.classList.contains("valid") &&
        dobInput.classList.contains("valid") &&
        genderInput.classList.contains("valid") &&
        passwordInput.classList.contains("valid") &&
        confirmPasswordInput.classList.contains("valid") &&
        bioInput.classList.contains("valid") &&
        termsInput.checked
    ) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}


nameInput.addEventListener("input", checkAllValid);
emailInput.addEventListener("input", checkAllValid);
phoneInput.addEventListener("input", checkAllValid);
dobInput.addEventListener("change", checkAllValid);
genderInput.addEventListener("change", checkAllValid);
passwordInput.addEventListener("input", checkAllValid);
confirmPasswordInput.addEventListener("input", checkAllValid);
bioInput.addEventListener("input", checkAllValid);
termsInput.addEventListener("change", checkAllValid);

// Step 6 - Submit & Success
submitBtn.addEventListener("click", function() {

    
    document.getElementById("successMsg").style.display = "block";

    // 5 seconds block
    setTimeout(function() {
        document.getElementById("successMsg").style.display = "none";
    }, 5000);

    
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    dobInput.value = "";
    genderInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    bioInput.value = "";
    termsInput.checked = false;

  
    let allInputs = document.querySelectorAll(".field input, .field textarea, #gender");
    allInputs.forEach(function(input) {
        input.classList.remove("valid");
        input.classList.remove("invalid");
    });

    // Counter reset
    document.getElementById("bioCount").textContent = "0 / 200 characters";

    // Button disable
    submitBtn.disabled = true;
});
