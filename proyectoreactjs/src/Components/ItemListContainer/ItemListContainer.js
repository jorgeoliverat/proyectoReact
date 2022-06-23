import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, where, query} from 'firebase/firestore'

import ItemList from "../ItemList/ItemList"

    const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()      
    
//filtrado por categoria
    useEffect(() => {
        const db = getFirestore()
            const queryCollection = collection(db, 'items')
            const queryCollectionFilter = id ? query(queryCollection, where('category', '==', id)) : queryCollection
            getDocs(queryCollectionFilter)
            .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                             
    }, [id])
        
        return (
            <div>
                { loading ? 
                    <div className="spinner-border text-secondary mt-5" role="status"></div>  
                    : 
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap',}} >
                        <ItemList productos={productos} />
                    </div>                  
                }
            </div>
    
        )
    }



export default ItemListContainer