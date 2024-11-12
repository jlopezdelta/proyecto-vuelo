import React from 'react'
import { Link } from 'react-router-dom'
import "./itemlist.css"

function Item(props) {

    const {img,first_name,date,price,id,off} = props.item

  return (
    <div className="item-card">

      <div className="item-card_img">
        <img src={img} alt={first_name} />
      </div>

      <div className="item-card_header">
        <h2 style={{color:"#6305dd", paddingTop:"25px"}}>{first_name}</h2>
      </div>

      <div className="item-card_detail">
        <small>{date}</small>
        <h3 className="item-card_price">$ {price}</h3>
        {off ? <b><p style={{color:"#02a82e"}}>{off}% OFF</p></b> : <></>}
      </div>
      <Link to={`/item/${id}`}>
        <button className='btn'>Ver más</button>
      </Link>
      
    </div>
  )
}

export default Item