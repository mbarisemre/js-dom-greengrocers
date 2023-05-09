function renderShop(){
    shop.innerHTML = ""
    state.items.forEach((item) => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      div.setAttribute("class", "store--item-icon");
      const img = document.createElement("img");
      img.src = `assets/icons/${item.id}.svg`;
      img.alt = `${item.name}`;
      const addButton = document.createElement("button");
      addButton.innerText = "add to cart";
      addButton.addEventListener("click", function (e) {
  
  
      if (!item.quantity) {
        item.quantity = 0;
      }
      item.quantity += 1;
  
  
      if (!state.cart.find(({id}) => id === item.id)) {
      
        state.cart.push(item);
  
      }
    
      cartItem();
  
    });
    li.append(div, addButton);
    div.append(img);
    shop.append(li);
    });
  }
  renderShop()
  
  function cartItem() {
    let totalPrice = 0;
    cart.innerText = "";
    state.cart.forEach((item) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.setAttribute("class", "cart--item-icon");
      img.src = `assets/icons/${item.id}.svg`;
      img.alt = `${item.name}`;
      const p = document.createElement("p");
      p.innerText = `${item.name}`;
      const removeButton = document.createElement("button");
      removeButton.setAttribute("class", "quantity-btn remove-btn center");
      removeButton.innerText = "-";
      totalPrice += item.quantity * 0.35;
      removeButton.addEventListener("click", () => {
        item.quantity--;
        
        
        if (item.quantity <= 0) {
          
          state.cart = state.cart.filter((decreasingItem) => decreasingItem.id !== item.id
            );
  
          }
  
          cartItem();
        });
        const span = document.createElement("span");
        span.setAttribute("class", "quantity-text center");
        span.innerText = item.quantity;
        const addButton = document.createElement("button");
        addButton.setAttribute("class", "quantity-btn add-btn center");
        addButton.innerText = "+";
  
        addButton.addEventListener("click", () => {
  
          item.quantity++;
  
          cartItem();
        });
        
        cart.append(li);
        li.append(img, p, removeButton, span, addButton);
        return li;
      });
      
      calculate(totalPrice);
    }
    cartItem();
    
    function calculate(totalPrice) {
  
      totalNumber.innerText = "£" + totalPrice.toFixed(2);
  
    }
  
    function filter (){
  
      state.items.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      
      console.log(state)
  
      renderShop()
    }
    filter ()
  