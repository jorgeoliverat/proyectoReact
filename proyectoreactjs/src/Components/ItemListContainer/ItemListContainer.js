import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, where, query} from 'firebase/firestore'
// import { getFetch } from "../../helpers/getFetch"
import ItemList from "../ItemList/ItemList"

    const ItemListContainer = ( { greeting = 'saludo'} ) => {
    
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)

        const {categoria} = useParams ();

        useEffect(() => {
            const db = getFirestore ()
            const queryCollection = collection (db, 'items')

            if (categoria) {
            setLoading (true)
            const queryCollectionFilter = query (queryCollection, where ("category", "==", categoria)
                );
                getDocs (queryCollectionFilter)
                .then (resp => 
                    setProductos (
                        resp.docs.map (item => ({id: item.id, ...item.data ()}) ) 
                        ) )
                .catch((err)=> console.log(err))
                .finally(()=>setLoading(false))
            }
            else {
            getDocs (queryCollection)
            .then (resp => 
                setProductos (
                    resp.docs.map (item => ({id: item.id, ...item.data ()}) ) 
                    ) )
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))
            }   
            }, [categoria]);


    
        // useEffect(() => {
        //     if (id) {
        //     getFetch () // fetch llamada a una api  
        //     .then(respuesta=> setProductos(respuesta.filter ((prods) => prods.categoria === id)))
        //     .catch((err)=> console.log(err))
        //     .finally(()=>setLoading(false))
        //     }
        //     else {
        //     getFetch ()
        //     .then(respuesta=> setProductos(respuesta))
        //     .catch((err)=> console.log(err))
        //     .finally(()=>setLoading(false))     
        //     }
        // }, [id])
    
        
        // console.log(id)
        
        return (
            <div>
                {greeting} 
                { loading ? 
                    <h2>Cargando...</h2> 
                    : 
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >
                        <ItemList productos={productos} />
                    </div>                  
                }
            </div>
    
        )
    }



export default ItemListContainer