import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFetch } from '../../helpers/getFetch'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const { detalleId } = useParams ()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch (detalleId)
        .then(respuesta=> setProducto(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))     
    }, [])

    return (
        <div>
            { loading ? 
                    <h2>Cargando...</h2> 
                    :     
                    <ItemDetail producto = {producto} />           
                }
            
        </div>
    
    )
}

export default ItemDetailContainer