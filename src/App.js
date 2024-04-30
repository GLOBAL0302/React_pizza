import './App.css';
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart/Cart";
import React from "react";

export const SearchContext = React.createContext("")

function App() {

    const [searchValue, setSearchValue] = React.useState('')
    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            </SearchContext.Provider>

        </div>
    );
}

export default App;
