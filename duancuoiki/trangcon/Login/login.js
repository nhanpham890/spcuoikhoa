import { signInWithEmailAndPassword, auth } from "../firebase/firebase.js";
let isLogin = !!localStorage.getItem("token");
function checkLogin() {
  if (isLogin) {
    window.location.href = "../home/index.html";
  }
}
document.getElementById("login").addEventListener("click", function () {
  var email = document.getElementById("UserEmail").value;
  var username = localStorage.setItem("username", email);
  var password = document.getElementById("UserPass").value;
  if (email === "thanhnhan11022007@gmail.com" && password === "12345678") {
    window.location.href = "../Products/tst.html";
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        localStorage.setItem("token", email);
        isLogin = true;
        window.location.href = "../home/index.html";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("erorr").innerHTML =
          "Please check your email or password again!!!";
      });
  }
});

// let isLogin = !!localStorage.getItem("token");
// function checkLogin() {
//   if (isLogin) {
//     window.location.href = "../home/index.html";
//   }
// }
// function login() {
//   var userPhone = document.getElementById("UserPhone").value;
//   var userPass = document.getElementById("UserPass").value;
//   var flag = false;
//   var userlist = JSON.parse(localStorage.getItem("userlist")) || [];
//   if (userlist.length > 0) {
//     for (var i = 0; i < userlist.length; i++) {
//       if (
//         userPhone === userlist[i].phoneNumber &&
//         userPass === userlist[i].password
//       ) {
//         flag = true;
//         break;
//       }
//     }
//   }
//   if (flag === true) {
//     if (userPhone === "12345" && userPass ==='12345') {
//       window.location.href = "../Products/newtable.html";
//     } else {
//       localStorage.setItem("token", userPhone);
//       isLogin = true;
//       window.location.href = "../home/index.html";
//     }
//   }
// }
