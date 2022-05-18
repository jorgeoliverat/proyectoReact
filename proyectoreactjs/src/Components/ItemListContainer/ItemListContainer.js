import React from "react"
// import { ItemCount } from "../ItemCount/ItemCount"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../../helpers/getFetch"
import ItemList from "../ItemList/ItemList"

    const ItemListContainer = ( { greeting = 'saludo'} ) => {
    
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)

        const { id } = useParams ()
    
        useEffect(() => {
            if (id) {
            getFetch () // fetch llamada a una api  
            .then(respuesta=> setProductos(respuesta.filter ((prods) => prods.categoria === id)))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))
            }
            else {
            getFetch () // fetch llamada a una api  
            .then(respuesta=> setProductos(respuesta))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))     
            }
        }, [id])
    
        function onAdd(cant) {
            console.log(cant)
        }
        
        console.log(id)
    
        //onAdd(counter) 
        
        return (
            <div>
                {greeting} 
                {/* <ItemCount stock = {5} inicial = {1}/> */}
                {/* <ItemCount onAdd={ onAdd  } /> */}
                {/* // [<li key=0>1</li>, <li>2</li>, <li>3</li>, <li>4</li>] */}
                { loading ? 
                    <h2>Cargando...</h2> 
                    : 
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}} >
                        <ItemList productos={productos} />
                    </div>                  
                }
    
                {/* <button onClick={()=> setBool(!bool)}>click</button>            */}
            </div>
    
        )
    }



export default ItemListContainer