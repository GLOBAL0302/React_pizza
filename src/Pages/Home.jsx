import React, {useEffect} from 'react';
import SkeletonPizza from "../components/skeleton/SkeletonPizza";
import PizzaCard from "../components/PizzaCard/PizzaCard";
import Navbar from "../components/Navbar/Navbar";


const Home = () => {

    const [pizzaItems, setPizzaItems] = React.useState([])
    const [isLoading, setIsloading] = React.useState(true)

    useEffect(()=>{
        fetch("https://660f2136356b87a55c50ddb1.mockapi.io/PizzaItems")
            .then((item)=>{
                return item.json();
            })
            .then((response) => {
                setTimeout(()=>{
                    setPizzaItems(response)
                    setIsloading(false)

                }, 2000)
            })
    }, [])

    return (
        <>

            <Navbar/>
            <div className="content">
                <h1>Все пиццы</h1>
                <div className="pizza_items d-flex justify-around flex-wrap">
                    {
                        isLoading ?
                            [...new Array(6)].map((_, index) => <SkeletonPizza key={index}/>)
                            : pizzaItems.map((pizza) =>(
                                <PizzaCard
                                    key={pizza.id}
                                    {...pizza}
                                />
                            ))
                    }

                </div>
            </div>
        </>
    );
};

export default Home;