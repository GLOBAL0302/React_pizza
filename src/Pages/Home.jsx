import React, {useEffect, useRef, useState} from 'react';
import SkeletonPizza from "../components/skeleton/SkeletonPizza";
import PizzaCard from "../components/PizzaCard/PizzaCard";
import Navbar from "../components/Navbar/Navbar";
import SortBtn from "../components/Navbar/SortBtn";
import axios from "axios";
import PaginationBtn from "../components/Pagination/PaginationBtn";
import {SearchContext} from "../App";
import qs from "qs"
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from  "react-redux";
import {setCategoryId, setCurrentPage, setFilters} from "../redux/slices/filterSlice";
import {searchNames} from  "../components/Navbar/SortBtn"


const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isSearch= useRef(false)
    const isMounted = React.useRef(false)
    const {categoryId, sort, currentPage}= useSelector(state => state.filters);
    const onChangeCategory = (id)=>{
        dispatch(setCategoryId(id))
    }

    const fetchPizzas = ()=>{
        setIsloading(true)

        axios.get(url)
            .then((res)=>{
                setPizzaItems(res.data)
                setIsloading(false)
            })
    }

    const {searchValue, setSearchValue} = React.useContext(SearchContext)
    const [pizzaItems, setPizzaItems] = React.useState([])
    const [isLoading, setIsloading] = React.useState(true)

    useEffect(() => {
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            const sort = searchNames.find(obj => obj.sortProperty === params.sortProperty)

            console.log(sort);

            dispatch(setFilters({
                ...params,
                sort
            }))
            isSearch.current = true
        }
    }, []);

    useEffect(() => {
        if(isMounted.current){
            const queryString = qs.stringify({
                sortProperty:sort.sortProperty,
                categoryId,
                currentPage
            })

            navigate(`?${queryString}`)
        }

        isMounted.current = true
    }, [categoryId, sort, currentPage]);

    let url = new URL(`https://660f2136356b87a55c50ddb1.mockapi.io/PizzaItems?page=${currentPage}&limit=4`)
    url.searchParams.append("sortBy", sort.sortProperty)
    if (categoryId){
        url.searchParams.append("category", categoryId)
    }
    //do ascending and decending BTN for the request
    useEffect(() => {
        window.scrollTo(0, 0)
        if(!isSearch.current){
            fetchPizzas()
        }

        isSearch.current = false
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