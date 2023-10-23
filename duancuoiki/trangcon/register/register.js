import { auth, createUserWithEmailAndPassword } from "../firebase/firebase.js";
document.getElementById("register").addEventListener("click", function () {
  var password = document.getElementById("UserPass").value;
  var ConfrPass = document.getElementById("ConfrPass").value;
  var email = document.getElementById("UserEmail").value;
  if ((email, password, ConfrPass === "")) {
    document.getElementById("erorr").innerText = "Please check again!!!";
  } else if (email === "") {
    document.getElementById("erorr").innerText =
      "Please check your email again!!!";
  } else if (password === ConfrPass) {
    register();
  } else {
    document.getElementById("erorr").innerText =
      "Please check your password again!!!";
  }
});
function register() {
  var email = document.getElementById("UserEmail").value;
  var password = document.getElementById("UserPass").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.href = "../Login/login.html";
      // ...
    })
    .catch((error) => {
      document.getElementById("erorr").innerText =
        "please check your email again!!!";
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

// document.getElementById("register").addEventListener("click", function () {
// var userEmail = document.getElementById("UserEmail").value;
// // var userPassword = document.getElementById("UserPass").value;
// var userPhone = document.getElementById("UserPhone").value;
// var confPass = document.getElementById("ConfrPass").value;
// var flag = true;
// var userlist = JSON.parse(localStorage.getItem("userlist")) || [];
// if (userlist.length > 0) {
//   for (i = 0; i < userlist.length; i++) {
//     if (userlist[i].phoneNumber === userPhone) {
//       flag = false;
//       document.getElementById("erorr").innerHTML =
//         "Vui lòng kiểm tra số điện thoại";
//     } else if (userName === "") {
//       document.getElementById("erorr").innerHTML =
//         "Vui lòng điền đầy đủ thông tin";
//       flag = false;
//     } else if (userPassword === "") {
//       document.getElementById("erorr").innerHTML =
//         "Vui lòng điền đầy đủ thông tin";
//       flag = false;
//     } else if (userPassword != confPass) {
//       document.getElementById("erorr").innerHTML =
//         "Vui lòng kiểm tra lại mật khẩu";
//       flag = false;
//     }
//   }
// }
//   if (flag == true) {
//     userlist.push({
//       email: userName,
//       password: userPassword,
//       phoneNumber: userPhone,
//     });
//     localStorage.setItem("userlist", JSON.stringify(userlist));
//     createUserWithEmailAndPassword(auth, UserName, newUserPassword)
//                 .then((userCredential) => {
//                     // Signed in
//                     const user = userCredential.user;
//                     console.log(user);
//                     alert("Registration successfully!!");
//                     // ...
//                 })
//                 .catch((error) => {
//                     const errorCode = error.code;
//                     const errorMessage = error.message;
//                     // ..
//                     console.log(errorMessage);
//                     alert(error);
//                 });
//         }
//     window.location.href = "../Login/login.html";

//   }
// });
