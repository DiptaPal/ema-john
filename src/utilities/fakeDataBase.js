const addToCart = (id) =>{
    let shoppingCart = getStoredCart();
    //get the shopping cart from local storage
    
    const quantity = shoppingCart[id];
    if(quantity){
        shoppingCart[id] = quantity + 1;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () =>{
    let shoppingCart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
    window.location.reload(false);
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
    window.location.reload(false);
}


export {
    addToCart, 
    deleteShoppingCart,
    removeFromDb,
    getStoredCart,
};