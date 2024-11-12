import { useState,useEffect,useContext } from 'react'
import { getCity } from '../../services/firebase'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { cartContext } from '../../context/cartContext'
import Loader from '../Loader/Loader'


function ItemDetailContainer() {

    const [ciudad,setCiudad] = useState({first_name:"Loading...",price:"..."})
    const [loadingDetail,setLoadingDetail] = useState(true);
    const [inCart,setInCart] = useState(false);

    let param = useParams();
    const {addToCart} = useContext(cartContext);

    function handleAddToCart(count){
        setInCart(true)
        addToCart({...ciudad,count:count})
      }

    useEffect(() =>{
        getCity(param.id)
        .then((response)=>{
            setCiudad(response)
            setLoadingDetail(false)
        })
        .catch((error)=> alert(error))
        .finally(
            ()=> setLoadingDetail(false)
        )
    },[])

return (
    <>{loadingDetail ? <Loader/>
    :
        <div>
            <ItemDetail 
                inCart={inCart}
                onAdd={handleAddToCart}
                title={ciudad.first_name}
                imgurl={ciudad.img}
                description={ciudad.description}
                date={ciudad.date}
                price={ciudad.price}
                stock={ciudad.stock}
            />
        </div>
    }
    </>
)
}

export default ItemDetailContainer