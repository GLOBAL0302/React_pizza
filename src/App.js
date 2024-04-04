import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PizzaCard from "./components/PizzaCard/PizzaCard";
import React, {useEffect} from "react";

function App() {
    const [pizzaItems, setPizzaItems] = React.useState([])

   useEffect(()=>{
      fetch("https://660f2136356b87a55c50ddb1.mockapi.io/PizzaItems").then((item)=>{
            return item.json();
        }).then(response => setPizzaItems(response))
   }, [])


    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>

            <div className="content">
                <h1>Все пиццы</h1>
                <div className="pizza_items d-flex justify-around flex-wrap">
                    {pizzaItems.map((pizza) =>(
                        <PizzaCard
                            key={pizza.id}
                            {...pizza}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
