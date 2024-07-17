const signUpCard = document.querySelector(".signup");
const successCard = document.querySelector(".success");
const signUpForm = document.querySelector(".sign-up-form");
const email = document.getElementById("email");
const submitBtn = document.querySelector(".submit-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const submittedEmail = document.querySelector(".submitted");

// Event Listeners

submitBtn.addEventListener("click", submitEmail);
dismissBtn.addEventListener("click", toggleCards);


// Functions

// toggle cards
function toggleCards(){
    signUpCard.classList.toggle("hidden");
    successCard.classList.toggle("hidden");

}

// email validation
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

// submit email form
function submitEmail(e){
    e.preventDefault();

    //valid email
    if (validateEmail(email.value)){
        submittedEmail.innerText = email.value;
        toggleCards();
        email.value = "";
        signUpForm.classList.remove("error")
    }
    // invalid email
    else{
        signUpForm.classList.add("error")
    }

    
}
