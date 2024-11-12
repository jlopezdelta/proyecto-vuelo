import React from 'react'
import "./itemdetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

function ItemDetail({title,imgurl,date,price,description,onAdd,inCart,stock}) {
  return (
    <div className="detail">
      
      <div className="detail-img">
        <img src={imgurl} alt={title} />
      </div>

      <div className='detail-description'>
        <h2 style={{color:"#6305dd",fontSize:"50px"}}>{title}</h2>
        <div className='detail-price'>
            <p>{description}</p>
            <small>{date}</small>
            <h3 className="item-card_price">${price}</h3>
            <p>Boletos disponibles: {stock}</p>
        </div>
        {
          inCart ? <Link to="/cart"><button className='btn'>Ir al carrito</button></Link>:<ItemCount onAdd={onAdd} stock={stock}/> 
        }
      </div>
    </div>
    
  )
}

export default ItemDetail