import React from 'react'
import "./popular.css"

function Popular() {

    const popularCities = [
        {name: "París", off: "35% OFF", url:"../imgs/paris.jpg", id:500},
        {name: "Nueva York", off: "35% OFF", url:"../imgs/ny.jpg", id:200},
        {name: "Roma", off: "40% OFF", url:"../imgs/roma.jpg", id:300}
    ]

  return (
    <div className='wrapper-popular'>
        <div>
            <h1 style={{color:"#6305dd",textAlign:"center",fontSize:"60px"}}>¡Promociones de año nuevo!</h1>
        </div>
        <div className='popular-section'>
            {popularCities.map((i) =>(
                <div key={i.id}>
                    <div className="card" style={{width: "20rem", marginBottom:"20px"}}>
                        <img src={i.url} className="card-img-top" alt="..."/>
                            <div className="card-body" style={{textAlign:"center"}}>
                                <h2 className="card-title" style={{color:"#6305dd"}}>{i.name}</h2>
                                <p className="card-text"><b>{i.off}</b></p>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Popular;