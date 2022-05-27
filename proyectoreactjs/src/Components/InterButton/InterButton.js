import { useState } from "react";
import InputCount from "../InputCount/InputCount";

const ButtonCount = ({handleInter})=> {
    return <button 
                className="btn btn-primary" 
                onClick={handleInter}
                >Ir al Cart
            </button>
}

const InterButton = () => {

    const [inputType, setInputType ] = useState(true)

    const handleInter = () => {
        setInputType(false)
    }
    
    return (
        <div>
            {
                inputType === true ? 
                
                    <ButtonCount handleInter = { handleInter } />
                    : 
                    <InputCount/>
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default InterButton
