const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const ConpassError = document.getElementById("ConpassError");
const ph1 = document.getElementById("ph1");
const ph2 = document.getElementById("ph2");
const ph1Email = document.getElementById("ph1Email");
const ph2Email = document.getElementById("ph2Email");
const ph1pass = document.getElementById("ph1pass");
const ph2pass = document.getElementById("ph2pass");
const ph1Con = document.getElementById("ph1Con");
const ph2Con = document.getElementById("ph2Con");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (ValidName() && ValidEmail() && ValidPassword() && ValidConfirmPassword()) {
    alert("Your account is created now you can Login");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let Confirmpassword = document.getElementById("Confirmpassword");

    // let ph1 = document.getElementById("ph1");
    // let ph2 = document.getElementById("ph2");
    // let ph1Email = document.getElementById("ph1Email");
    // let ph2Email = document.getElementById("ph2Email");
    // let ph1pass = document.getElementById("ph1pass");
    // let ph2pass = document.getElementById("ph2pass");
    // let ph1Con = document.getElementById("ph1Con");
    // let ph2Con = document.getElementById("ph2Con");

    name.value = ""; 
    email.value = ""; 
    password.value = ""; 
    Confirmpassword.value = ""; 

    //  ph1.style.display = "none";
    //  ph2.style.display = "none";
    //  ph1Email.style.display = "none";
    //  ph2Email.style.display = "none";
    //  ph1pass.style.display = "none";
    //  ph2pass.style.display = "none";
    //  ph1Con.style.display = "none";
    //  ph2Con.style.display = "none";
  }
});

function ValidName() {
  name = document.getElementById("name");
  ph2.style.display = "none";
  name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Username is required";
    ph2.style.display = "block";
    ph1.style.display = "none";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full username";
    ph2.style.display = "block";
    ph1.style.display = "none";
    return false;
  }
  nameError.innerHTML = "";
  ph1.style.display = "block";
  return true;
}

function ValidEmail() {
  ph2Email.style.display = "none";
  email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    ph2Email.style.display = "block";
    ph1Email.style.display = "none";
    return false;
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Write Valid Email";
    ph2Email.style.display = "block";
    ph1Email.style.display = "none";
    return false;
  }
  emailError.innerHTML = "";
  ph1Email.style.display = "block";
  return true;
}

function ValidPassword() {
  ph2pass.style.display = "none";
  password = document.getElementById("password").value;
  if (password.length == 0) {
    passError.innerHTML = "Password is required";
    ph2pass.style.display = "block";
    ph1pass.style.display = "none";
    return false;
  }

  if (
    !password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    )
  ) {
    passError.innerHTML =
      "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
    ph2pass.style.display = "block";
    ph1pass.style.display = "none";
    return false;
  }
  passError.innerHTML = "";
  ph1pass.style.display = "block";
  return true;
}

function ValidConfirmPassword() {
  ph2Con.style.display = "none";
  Confirmpassword = document.getElementById("Confirmpassword").value;
  if (Confirmpassword.length == 0) {
    ConpassError.innerHTML = "Password is required";
    ph2Con.style.display = "block";
    ph1Con.style.display = "none";
    return false;
  }

  if (!Confirmpassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)
  ) {
    ConpassError.innerHTML = "Confirm your password";
    ph2Con.style.display = "block";
    ph1Con.style.display = "none";
    return false;
  }
  ConpassError.innerHTML = "";
  ph1Con.style.display = "block";
  return true;
}
