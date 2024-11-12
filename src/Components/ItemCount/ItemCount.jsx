import React from 'react'
import { useState } from 'react'
import "./itemcount.css"

function ItemCount({onAdd,stock}) {
    const [count,setCount] = useState(0)

    function suma (){
        setCount(count +1)
    }

    function resta(){
        setCount(count -1)
    }

  return (
    <div>
        <div className='container-counter'>
          <button className='counter-btn' onClick={count >0 ? resta : count}>-</button>
          <p style={{padding:"0 20px",fontSize:"25px"}}><b>{count}</b></p>
          <button className='counter-btn' onClick={count === stock ? count : suma}>+</button>
        </div>
        <button onClick={()=>onAdd(count)} style={{marginTop:"15px",width:"50%"}} className='btn'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount