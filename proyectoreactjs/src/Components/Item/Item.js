import { Link } from "react-router-dom"

const Item = ({prod}) => {
    return (
        <div 
            className='col-md-4'
            >    
        <Link to = { `/detalle/${prod.id}`}>
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.categoria} - ${prod.name}`}
                </div>
                <div className="card-body">
                    <img src={prod.foto} alt='' className='w-50' />
                    <br/><br/>
                    {prod.price}                                                            
                </div>
                <div className="card-footer">  
                        <button className="btn btn-outline-dark btn-block">
                            detalle del producto
                        </button>
                </div>
            </div>
        </Link>                                                                  
        </div>
    )
}

export default Item