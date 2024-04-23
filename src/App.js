import './App.css';
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart/Cart";
import React from "react";


function App() {
    const [searchValue, setSearchValue] = React.useState("")
    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Routes>
                <Route path="/" element={<Home searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

        </div>
    );
}

export default App;
