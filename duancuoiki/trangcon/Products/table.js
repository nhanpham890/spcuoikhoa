import Products from "./data.js";
console.log(Products);
function getProducts(Products) {
  var tbody = document.getElementById("data");
  tbody.innerHTML = "";
  for (var i = 0; i < Products.length; i++) {
    var elementTr = document.createElement("tr");
    // elementTr.setAttribute('id', i + 1)
    var NuTd = document.createElement("td");
    NuTd.innerHTML = i + 1;
    elementTr.appendChild(NuTd);
    var productClone = [...Products[i]];
    productClone.shift();
    for (var j = 0; j < productClone.length; j++) {
      var elementTd = document.createElement("td");
      elementTd.innerText = productClone[j];
      elementTr.appendChild(elementTd);
    }
    var elementDeleteBtn = document.createElement("button");
    var elementDeleteBtnTd = document.createElement("td");

    elementDeleteBtnTd.setAttribute("type", "button");
    // elementDeleteBtn.setAttribute('value', 'delete')
    elementDeleteBtnTd.appendChild(elementDeleteBtn);
    elementTr.appendChild(elementDeleteBtnTd);
    elementDeleteBtn.innerHTML = "Delete";
    elementDeleteBtn.setAttribute("onclick", "remove(" + Products[i][0] + ")");

    var elementEditBtnTd = document.createElement("td");
    var elementEditBtn = document.createElement("button");
    elementEditBtnTd.setAttribute("type", "button");
    elementEditBtn.setAttribute("value", "edit");
    elementEditBtnTd.appendChild(elementEditBtn);
    elementTr.appendChild(elementEditBtnTd);
    elementEditBtn.innerHTML = "Edit";
    tbody.appendChild(elementTr);
  }
}
getProducts(Products);
function search() {
  var name = document.getElementById("content").value.toLowerCase().trim();
  if (name == "") {
    getProducts(Products);
  } else {
    var searchProducts = [];
    for (i = 0; i < Products.length; i++) {
      if (Products[i][2].toLowerCase().includes(name)) {
        searchProducts.push(Products[i]);
      }
    }
    getProducts(searchProducts);
  }
}

function remove(trId) {
  console.log(trId);
  var deletedProducts = [];
  for (i = 0; i < Products.length; i++) {
    if (trId != Products[i][0]) {
      deletedProducts.push(Products[i]);
    }
  }
  Products = deletedProducts;
  getProducts(Products);
}
