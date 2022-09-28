const addToCart = (id) =>{
    let shoppingCart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    const quantity = shoppingCart[id];
    if(quantity){
        shoppingCart[id] = quantity + 1;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}


const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {addToCart, deleteShoppingCart};