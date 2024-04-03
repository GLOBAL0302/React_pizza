import React, {useState} from 'react';

const PizzaCard = ({title, price, imageUrl, types, sizes}) => {
    const [pizzaAmount, setPizzaAmount] = useState(0)
    const [activeType, setActiveType] = React.useState();
    const [activeSize, setActiveSize] = React.useState();
    const typesNames = ["тонкое", "традиционное"]
    console.log(sizes);
    return (
        <div className="pizza_item">
            <img src= {imageUrl} alt="pizza"/>
            <h3 className='text-center'>{title}</h3>
            <div className="pizza_info mb-15">
                <ul className='d-flex justify-around'>
                    {types.map(typeInd=>(
                        <li onClick={()=> setActiveType(typeInd)} className={activeType == typeInd?"active":""}>{typesNames[typeInd]}</li>
                    ))}
                </ul>
                <ul className='d-flex justify-around'>
                    {sizes.map((size, index) =>(
                        <li onClick={()=>{setActiveSize(index)}} className={activeSize ===index?"active":""}>{size} cm</li>
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