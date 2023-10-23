import { sendPasswordResetEmail, auth } from "../firebase/firebase.js";
document.getElementById("sent").addEventListener("click", function () {
  var email = document.getElementById("Email").value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      window.location.reload;
      document.getElementById("wrapper").style.display = "none";
      document.getElementById("wrapper-successful").style.display = "block";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
document.getElementById("return").addEventListener("click", function () {
  window.location.href = "../Login/login.html";
});
