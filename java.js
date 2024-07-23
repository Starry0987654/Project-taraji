document.addEventListener("DOMContentLoaded", function () {  
    
    
    
    
    const cartItemsContainer = document.getElementById("cart-items");  
    
    
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];  
    let total = localStorage.getItem("total") || 0
    
    
    function refreshCart() {  
        cartItemsContainer.innerHTML = "";  

       
       
       
       
       
       
       
       
       
        if (cart.length === 0) {  
            cartItemsContainer.innerHTML = "<p>Votre panier est vide.</p>";  
        } else {  
            cart.forEach(item => {  
                const itemElement = document.createElement("div");  
                itemElement.textContent = `${item.name} - Prix: ${item.price} D`;  
                cartItemsContainer.appendChild(itemElement);  
            }); 
            const h1= document.createElement("h1") 
            h1.setAttribute("id","dt")
            h1.innerHTML = total 
            cartItemsContainer.appendChild(h1)
        }  
    }  
    
    refreshCart();  








    document.querySelectorAll('.buy-btn').forEach(button => {  
        button.addEventListener('click', function (event) {  
            event.preventDefault();  
            const productName = this.getAttribute('data-name');  
            const productPrice = this.getAttribute('data-price');  

            cart.push({ name: productName, price: productPrice });  
            total += parseFloat(productPrice)
            localStorage.setItem("cart", JSON.stringify(cart));  
            localStorage.setItem("total", parseFloat(total));
            refreshCart();  
            
        });  
    });  

    
    
    
    
    
    
    
    
    
    document.querySelectorAll('.checkout-btn').forEach(function(v){
        v.addEventListener('click', function(event) {  
            event.preventDefault(); 
            if (cart.length === 0) {  
                alert("Votre panier est vide, ajoutez des articles avant de passer à la caisse !");  
            } else {  
                window.location.href = "./pages/panier.html"; 
            }  
        });  
    
    })
    
    
    
    
    
    
    document.getElementById('reset-cart').addEventListener('click', function() {  
        cart = [];  
        total=0
        localStorage.removeItem("cart");  
        localStorage.removeItem("total");  
        console.log(localStorage)
        refreshCart();  
      
    });  
});

