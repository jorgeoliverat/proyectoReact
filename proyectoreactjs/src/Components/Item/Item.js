import { Link } from "react-router-dom"

const Item = ({prod}) => {
    return (
        <div className='col-md-6'>    
            <div className="mt-5 mx-4 card text-white bg-dark mb-3" >
                <div className="card-header">
                    {`${prod.category} - ${prod.name}`}
                </div>
                <div className="card-body">
                    <img src={prod.photo} alt='' className='w-50 rounded' />
                    <br/><br/>
                    <span>S/</span> {prod.price}                                                            
                </div>
                <Link to = { `/detalle/${prod.id}`}>
                <div className="card-footer">  
                        <button className="btn btn-outline-success btn-block">
                            detalle del producto
                        </button>
                </div>
                </Link>                                                                  
            </div>
        </div>
    )
}

export default Item