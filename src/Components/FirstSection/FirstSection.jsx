import React from 'react'
import "./first.css"
import "bootstrap/dist/css/bootstrap.min.css";

function FirstSection() {
  return (
    <section className='wrapper-first'>
      <section className='first-section'>
      <div className='containers'>
        <img src="../imgs/world.svg" alt="..." className='img-first-section' />
        <h3 className='text-containers'>Vola a cualquier parte del mundo</h3>
      </div>
      <div className='containers'>
        <img src="../imgs/payment.svg" alt="..." className='img-first-section' />
        <h3 className='text-containers'>Accede a cientos de beneficios</h3>
      </div>
      <div className='containers'>
        <img src="../imgs/atention.svg" alt="..." className='img-first-section' />
        <h3 className='text-containers'>Recibi atención personalizada las 24hs</h3>
      </div>
      </section>
    </section>
  )
}

export default FirstSection;