import React, {useEffect} from 'react';
import SkeletonPizza from "../components/skeleton/SkeletonPizza";
import PizzaCard from "../components/PizzaCard/PizzaCard";
import Navbar from "../components/Navbar/Navbar";
import SortBtn from "../components/Navbar/SortBtn";

import PaginationBtn from "../components/Pagination/PaginationBtn";


const Home = ({searchValue, setSearchValue}) => {
    const [pizzaItems, setPizzaItems] = React.useState([])
    const [isLoading, setIsloading] = React.useState(true)
    const [navCategory, setNavCategory] = React.useState(0)
    const [navSort, setNavSort] = React.useState(
        {
            name:"по пулярности",
            sortProperty:"rating"
        }
    )
    const [currentPage, setCurrentPage] = React.useState(1)
    let url = new URL(`https://660f2136356b87a55c50ddb1.mockapi.io/PizzaItems?page=${currentPage}&limit=4`)
    url.searchParams.append("sortBy", navSort.sortProperty)
    if (navCategory){
        url.searchParams.append("category", navCategory)
    }
    //do ascending and decending BTN for the request
    useEffect(() => {
        setIsloading(true)
        fetch(url)
            .then((item) => {
                return item.json();
            })
            .then((response) => {
                setTimeout(() => {
                    setPizzaItems(response)
                    setIsloading(false)
                }, 2000)
            })

        window.scrollTo(0, 0)
    }, [navCategory, navSort, searchValue, currentPage])

    return (
        <>
            <div className="navbar">
                <Navbar navCategory={navCategory} onClickNavCategory={(categoryId)=>{setNavCategory(categoryId)}}/>
                <SortBtn navSort={navSort} onclickNavSort={(sortId)=>setNavSort(sortId)}/>
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
                <PaginationBtn onChangePage={(number)=> setCurrentPage(number)}/>
            </div>
        </>
    );
};

export default Home;