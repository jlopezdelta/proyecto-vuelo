import { createContext,useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const cartContext = createContext({cart:[]});

function CartProvider(props){

    const [cart,setCart]= useState([]);

    function addToCart(product){
        let checkCart = cart.findIndex(productInCart => productInCart.id === product.id)
        let newCart = [...cart]
        if(checkCart !== -1){
            Swal.fire({
                icon: 'error',
                title: '¡Cuidado!',
                text: 'Ya has agregado este vuelo a tu carrito',
              })
        }else{
            newCart.push(product)
            setCart(newCart)
        }
    }

    function removeItem(product){
        const item = cart.find(productInCart => productInCart.id === product.id)
        const indice = cart.indexOf(item)
        cart.splice(indice,1)
        let newCart =[...cart]
        setCart(newCart)
    }

    function clear(){
        setCart([])
    }

    function getTotalItemsInCart(){
        let total = 0;
        cart.forEach(element =>{
            total += element.count
        });
        return(total)
    }

    function getTotalPrice(){
        let total = 0;
        cart.forEach(element => {
            total += element.price * element.count
        });
        return(Math.round(total))
}

    return(
        <cartContext.Provider value={{cart,addToCart,removeItem,clear,getTotalItemsInCart,getTotalPrice}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartProvider}