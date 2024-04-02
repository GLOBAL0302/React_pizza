import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PizzaCard from "./components/PizzaCard/PizzaCard";





function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>

            <div className="content">
                <h1>Все пиццы</h1>
                <div className="pizza_items">
                    <PizzaCard price={345} title={"Чизбургер-пицца"}/>
                </div>
            </div>
        </div>
    );
}

export default App;
