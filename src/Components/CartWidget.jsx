import 'boxicons'
import {useContext } from 'react';
import { cartContext } from '../context/cartContext';
import "./NavBar/navbar.css"

function CartWidget (){
    const context = useContext(cartContext)

    return(
        <div>
            <i className="bi bi-cart2"></i>
            {context.cart.length >0 && <span>{context.cart.length}</span>}
        </div>
    )
}

export default CartWidget;