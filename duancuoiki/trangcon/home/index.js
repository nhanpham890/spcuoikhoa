var username = localStorage.getItem("username");
console.log(username);
function change() {
  let isLogin = !!localStorage.getItem("token");
  if (isLogin == true) {
    document.getElementById("notLogin").style.display = "none";
    document.getElementById("name").innerHTML = username;
  } else {
    document.getElementById("Login").style.display = "none";
  }
}
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
}
