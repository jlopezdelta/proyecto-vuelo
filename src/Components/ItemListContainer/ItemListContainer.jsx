import "./itemlist.css"
import "./alert.css"
import React, {useState, useEffect} from "react";
import {getCityByCategory} from "../../services/firebase";
import { getProducts } from "../../services/firebase";
import Item from "./Item";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";


function ItemListContainer (props){

    const [cities,setCities]    = useState([])
    const [loading, setLoading] = useState(true);
    const [alert,setAlert]      = useState();
    let {id} = useParams()

    useEffect(() => {
      if (!id){
      getProducts()
      .then((respuesta) => { 
        setCities(respuesta);
        setLoading(false)
      })
      .catch((error) => {
        setAlert(error)
      })
      .finally(
        //independientemente de si la promesa salió bien o mal
        () => setLoading(false)
      )
    }
    else{
      getCityByCategory(id)
      .then((respuesta) => { 
        setCities(respuesta);
        setLoading(false)
      })
      .catch((error) => alert(error))
      .finally(
        () => setLoading(false)
      )
    }
  }, [id])

    return(
      <>
      {loading ? <Loader/>
        :
        <>
        <div> 
          {alert && <div className="container-alert"><span className="alert">{alert}</span></div>} 
        </div>

        <div className="wrapper-list next-fly">
          <h1 style={{color:"#6305dd",fontSize:"55px",margin:"25px 0"}}>Reserva ahora tu próximo vuelo</h1>
          <div className="next-fly">
            {cities.map((item) => {
              return(
                <Item key={item.id} item={item}/>
              )
            })}
          </div>
        </div>
        </>
      }
      </>
    )
}

export default ItemListContainer;
