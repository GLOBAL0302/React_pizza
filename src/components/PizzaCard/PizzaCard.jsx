import React, {useState} from 'react';

const PizzaCard = ({title, price, imageUrl, types, sizes}) => {
    const [pizzaAmount, setPizzaAmount] = useState(0)
    const [activeType, setActiveType] = React.useState();
    const [activeSize, setActiveSize] = React.useState();
    const typesNames = ["тонкое", "традиционное"]

    return (
        <div className="pizza_item">
            <img src= {imageUrl} alt="pizza"/>
            <h3 className='text-center'>{title}</h3>
            <div className="pizza_info mb-15">
                <ul className=''>
                    {types.map(typeInd=>(
                        <li key={typeInd} onClick={()=> setActiveType(typeInd)} className={activeType == typeInd?"active":""}>{typesNames[typeInd]}</li>
                    ))}
                </ul>
                <ul className=''>
                    {sizes.map((size, index) =>(
                        <li key={size} onClick={()=>{setActiveSize(index)}} className={activeSize ===index?"active":""}>{size} cm</li>
                    ))}
                </ul>
            </div>
            <div className="pizza_item_bottom d-flex justify-between align-center">
                <p>from {price} AED</p>
                <button>Add to cart<span>{pizzaAmount}</span></button>
            </div>
        </div>
    );
};

export default PizzaCard;