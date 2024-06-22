import React, {useEffect} from 'react';
import SkeletonPizza from "../components/skeleton/SkeletonPizza";
import PizzaCard from "../components/PizzaCard/PizzaCard";
import Navbar from "../components/Navbar/Navbar";
import SortBtn from "../components/Navbar/SortBtn";
import axios from "axios";

import PaginationBtn from "../components/Pagination/PaginationBtn";
import {SearchContext} from "../App";


import {useSelector, useDispatch} from  "react-redux";
import {setCategoryId, setCurrentPage} from "../redux/slices/filterSlice";


const Home = () => {
    const dispatch = useDispatch()
    const {categoryId, sort, currentPage}= useSelector(state => state.filters);
    const onChangeCategory = (id)=>{
        dispatch(setCategoryId(id))
    }

    const {searchValue, setSearchValue} = React.useContext(SearchContext)
    const [pizzaItems, setPizzaItems] = React.useState([])
    const [isLoading, setIsloading] = React.useState(true)

    let url = new URL(`https://660f2136356b87a55c50ddb1.mockapi.io/PizzaItems?page=${currentPage}&limit=4`)
    url.searchParams.append("sortBy", sort.sortProperty)
    if (categoryId){
        url.searchParams.append("category", categoryId)
    }
    //do ascending and decending BTN for the request
    useEffect(() => {
        setIsloading(true)

        axios.get(url)
            .then((res)=>{
                setPizzaItems(res.data)
                setIsloading(false)
            })

        window.scrollTo(0, 0)
    }, [categoryId, sort, searchValue, currentPage])

    const onChangePage=(number)=>{
        dispatch(setCurrentPage(number))
    }



    return (
        <>
            <div className="navbar">
                <Navbar navCategory={categoryId} onClickNavCategory={onChangeCategory}/>
                <SortBtn/>
            </div>
            <div className="content">
                <h1>Все пиццы</h1>
                <div className="pizza_items">
                    {
                        isLoading ?
                            [...new Array(6)].map((_, index) => <SkeletonPizza key={index}/>)
                            : pizzaItems.filter((pizza)=> pizza.title.toLowerCase().includes(searchValue.toLowerCase()))
                                .map((pizza) => (
                                <PizzaCard
                                    key={pizza.id}
                                    {...pizza}
                                />
                            ))
                    }
                </div>
                <PaginationBtn currentPage={currentPage}  onChangePage={onChangePage}/>
            </div>
        </>
    );
};

export default Home;