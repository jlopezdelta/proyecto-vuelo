import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

const PaymentForm = ( { submitButton } ) => {
  
    const [state, setState] = useState({
      number: '',
      expiry: '',
      cvc: '',
      name: '',
      focus: '',
    });

    const handleInputChange = (evt) => {
      const { name, value } = evt.target;
      
      setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
      setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

  return (
   <div className='row'>
    <div className='col-12'>
        <div className='row justify-content-center'>
          <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
          />
        </div>
    </div>
    <div className='col-12'>
      <div className="row justify-content-center">
          <div className="col-xl-4">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre en la Tarjeta</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-control" 
                  placeholder="Nombre completo" 
                  maxLength={25} 
                  required 
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">Número de Tarjeta</label>
                <input 
                  type="number"
                  name="number"
                  className="form-control" 
                  placeholder="1234 5678 9012 3456" 
                  maxLength={19} 
                  pattern="\d*" 
                  required 
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="expiryDate" className="form-label">Fecha de Expiración</label>
                  <input 
                    type="number"
                    name="expiry"
                    className="form-control" 
                    placeholder="MM/AA" 
                    maxLength={5} 
                    pattern="\d{2}/\d{2}" 
                    required 
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>
                
                <div className="col-md-6 mb-3">
                  <label htmlFor="cvc" className="form-label">Código de Seguridad</label>
                  <input 
                    type="number"
                    name="cvc"
                    className="form-control" 
                    placeholder="CVC" 
                    maxLength={4} 
                    pattern="\d*" 
                    required 
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>
              </div>
        
              <button type="button" className="btn btn-primary w-100" onClick={ () => submitButton() }>Pagar</button>
            </form>
          </div>
      </div>
    </div>
   </div>
  );
}

export default PaymentForm;