import { useState } from "react";

export const ItemCount = ({onAdd, stock}) => {
    const[count, setCount] = useState(1);  
    const handleIncreaseCount = () => {
        
        if(stock>count){
        setCount(count+1);
    }
}
    
    const handleDecreaseCount = () => {
        if(count>1){
        setCount(count-1);
    }
    }
  
   
    return (
        <div className="itemCount">
            <span onClick={handleDecreaseCount}> - </span>
            <span> {count} </span>
            <span onClick={handleIncreaseCount}> + </span>
            <button onClick={()=> onAdd(count)}> Agregar al carrito </button>
        </div>
    );
    };