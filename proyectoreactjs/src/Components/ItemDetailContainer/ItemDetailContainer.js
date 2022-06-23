import {doc, getDoc, getFirestore} from "firebase/firestore"
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const { detalleId } = useParams ()
    const [loading, setLoading] = useState(true)
    
//useEffect para el detalle de cada producto usando firebase
    useEffect(() => {
        const db = getFirestore()
    const dbQuery = doc(db, 'items', detalleId)
    getDoc (dbQuery)
    .then(resp => setProducto( { id: resp.id, ...resp.data() } ) )
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
}, [])

    return (
        <div>
            { loading ? 
                    <div className="spinner-border text-secondary mt-5" role="status"></div> 
                    :     
                    <ItemDetail producto = {producto} />  
                }        
        </div>
    
    )
}



export default ItemDetailContainer