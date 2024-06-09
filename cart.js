var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartArr);
  displaydata(cartArr);

  function displaydata(user) {
    var container = document.getElementById("container");
    container.innerHTML = "";

    products.forEach(function (ele) {
      var card=document.createElement("div");
      
      var h3=document.createElement("h3");
      h3.textContent=ele.id;

      var h4=document.createElement("h4");
      h4.textContent=ele.name;

      var h5=document.createElement("h5");
      h5.textContent=ele.username;

      var p=document.createElement("p");
      p.textContent=ele.email;
      
      var btn = document.createElement("button");
      btn.textContent = "Remove from cart";
      btn.addEventListener("click", function () {
        removeFromCart(ele);
      });

      card.append(h3,h4,h5,p, btn);
      container.append(card);
    });
  }

  function removeFromCart(ele, i) {
    console.log("remove");
    cartArr.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cartArr));
    displaydata(cartArr);
  }
