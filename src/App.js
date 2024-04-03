import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PizzaCard from "./components/PizzaCard/PizzaCard";
import pizzaJson from "./assets/pizzaJson.json"





function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>

            <div className="content">
                <h1>Все пиццы</h1>
                <div className="pizza_items d-flex flex-wrap">
                    {pizzaJson.map((pizza) =>(
                        <PizzaCard
                            {...pizza}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
