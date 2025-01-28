let iconCart = document.querySelector(".iconCart");
let body = document.querySelector('body');
let closeBtn = document.querySelector(".closeBtn");
let listPd = document.getElementById("listPd");
let listProductHTML = document.querySelector('.listProducts');
let carts = [];
let listCartHTML = document.querySelector('.listCart');
let totalQuantity = document.querySelector('.totalQuantity');



iconCart.addEventListener("click", () => {
    body.classList.toggle('showCart');
    listPd.style ="transform: translateX(-250px);"
})
closeBtn.addEventListener("click", () => {
    body.classList.toggle('showCart');
    listPd.style ="transform: translateX(0p);"
})

const addDataToHTML = () =>{
    listProductHTML.innerHTML = "";
    if(listProducts.length > 0){
        listProducts.forEach(product => {
           let newProduct = document.createElement("div");
           newProduct.classList.add('item');
           newProduct.dataset.id = product.id;
           newProduct.innerHTML = `<div class="item  bg-indigo-300 lg:w-72 rounded-lg shadow-md hover:shadow-lg mb-5 lg:mb-0 group">
                <img src="${product.image}" alt="" class="rounded-t-lg lg:h-72 w-full">
                <div class="px-5 text-gray-100 text-right">
                    <h2 class="text-lg font-medium">${product.title}</h2>
                    <div class="font-semibold mb-2 price">$${product.price}</div>
                    <button class="addCart bg-orange-400 px-2 py-1 rounded-lg font-semibold mb-3 hover:bg-gray-100 hover:text-orange-400 transition-all " >Add To Cart</button>
                </div>`;
                listProductHTML.appendChild(newProduct);
        });
    }
}

listProductHTML.addEventListener('click', (event) => {
    let targetElement = event.target.closest('.addCart');
    if (targetElement) {
        let product_id = targetElement.closest('[data-id]').dataset.id;
        // console.log('Product ID:', product_id);
        addToCart(product_id);
        // console.log(product_id);
        
    }
});


const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id)
    if(carts.length <= 0){
        carts = [
            {
                product_id: product_id,
                quantity: 1
            }
        ];
        
    }else if(positionThisProductInCart < 0){
        carts.push({
            product_id: product_id,
            quantity: 1
        })
    }else{
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    console.log(carts);
    
    addCartToHTML();   
    addDataToMemory(); 
}

const addDataToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = "";
    let totalQuantity = 0;
    // console.log(listCartHTML);
    if(carts.length > 0){
        carts.forEach(cart => {
        totalQuantity += cart.quantity;
            let newCart = document.createElement("div");
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_id;
            let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
            let info = listProducts[positionProduct];
            newCart.innerHTML = `<div class="item flex justify-between rounded-full border-2 bg-gray-700 w-full cartItem">
                        <img src="${info.image}" alt="" class="w-20 h-16 rounded-full object-fill">
                        <div>
                            <div class="name">${info.title}</div>
                            <div class="totalPrice">$${info.price * cart.quantity}</div>
                        </div>
                        <div class="px-2 flex items-center">
                            <div class="bg-gray-300 flex items-center gap-3  px-2 rounded-md">
                                <span class="text-gray-700 text-lg cursor-pointer plus">+</span>
                                <span class="text-gray-700">${cart.quantity}</span>
                                <span class="text-gray-700 text-lg cursor-pointer minus">-</span>
                            </div>
                        </div>`;
                        listCartHTML.appendChild(newCart);
                        // console.log(newCart);
                        
        })
    }
    iconCart.innerHTML = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    console.log('positionClick:', positionClick); // Debug
    if (positionClick.classList.contains('plus') || positionClick.classList.contains('minus') ) {
        let productElement = positionClick.parentElement.parentElement;
        let product_id = productElement.dataset.id;
        console.log('product_id:', product_id); // Debug
        let type = 'minus';
        if (positionClick.classList.contains('plus')) {
            type = 'plus';
        }
        changeQuantity(product_id, type);
        console.log(product_id, type);
    }
});


const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id === product_id);
    if(positionItemInCart >= 0){
        switch(type){
            case 'plus':
                carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
                break;

                default:
                    let valueChange = carts[positionItemInCart] - 1;
                    if(valueChange > 0){
                        carts[positionItemInCart].quantity = valueChange
                    }else{
                        carts.splice(positionItemInCart, 1);
                    }
                    break;
        }
    }
    addDataToMemory();
    addCartToHTML();
}

const initApp = () => {
    fetch('/dist/HTML files/Js files/product.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        console.log(listProducts);
        addDataToHTML();

        // get cart from memory
        if(localStorage.getItem('cart')){
            carts = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })

}

initApp();