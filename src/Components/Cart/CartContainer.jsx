import React, { useContext, useState } from 'react'
import "./cartcontainer.css"
import { Link } from "react-router-dom";
import { cartContext } from '../../context/cartContext';
import { newOrden } from '../../services/firebase';
import Swal from 'sweetalert2'
import PaymentForm from '../PaymentDetail/PaymentDetail';
import 'react-credit-cards-2/dist/es/styles-compiled.css'

function CartContainer() {
    const {cart,removeItem,getTotalPrice,clear} = useContext(cartContext)

    function finishBuy(event){
        const orden = {
            comprador: {
                nombre: "Agustin",
                email: "agustinaranda2509@hotmail.com",
                celular: 4455226677
            },
            items: cart,
            precioTotal: getTotalPrice(),
            fecha: new Date()
        }
        newOrden(orden).then((id) => {
            Swal.fire({
                icon: 'success',
                title: '¡Compra finalizada!',
                text: `El código de seguimiento para tu compra es: ${id}`,
              })
            clear();
        })
    }

  return (
    <main>
        {cart.length > 0 ?             
            <div>
                {cart.map(item => (
                    <div key={item.id} className='cart-cont'>
                        <img className='img-cart' src={item.img} alt="..." />
                        <h2>{item.first_name}</h2>
                        <p>${item.price}</p>
                        <p>Unidades: {item.count}</p>
                        <button className='delete-cart' onClick={()=>removeItem(item.id)}>Eliminar producto</button>
                    </div>
                ))}
                <div className='cart-cont-totalPrice'>
                    <p className='total'>El total de la compra es de: $ {getTotalPrice()}</p>
                    <button className='clear-cart' onClick={()=>clear()}>Vaciar carrito</button>
                </div>
                <div>
                  <PaymentForm  submitButton={ ()=>finishBuy() }/>
                </div>

            </div>
        :<div className='cart-cont-empty'>
        <h2 className='empty-cart'>Su carrito está vacío. ¡Comience agregando algún producto!</h2>
        <div className='cart-icon-empty'><img src="./imgs/shopping.svg" alt="shopping"/></div>
        <Link className='back' to="/">Ver productos</Link>
        </div>}
    </main>
  )
}

export default CartContainer