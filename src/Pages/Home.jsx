import React, {useEffect} from 'react';
import SkeletonPizza from "../components/skeleton/SkeletonPizza";
import PizzaCard from "../components/PizzaCard/PizzaCard";
import Navbar from "../components/Navbar/Navbar";
import SearchBtn from "../components/Navbar/SearchBtn";


const Home = () => {
    const [pizzaItems, setPizzaItems] = React.useState([])
    const [isLoading, setIsloading] = React.useState(true)

    const [navCategory, setNavCategory] = React.useState(0)
    const [navSort, setNavSort] = React.useState(
        {
            name:"по пулярности",
            sortProperty:"rating"
        }
    )
    let url = new URL(`https://660f2136356b87a55c50ddb1.mockapi.io/PizzaItems`)
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
    }, [navCategory, navSort])

    return (
        <>
            <div className="navbar">
                <Navbar navCategory={navCategory} onClickNavCategory={(categoryId)=>{setNavCategory(categoryId)}}/>
                <SearchBtn navSort={navSort} onclickNavSort={(sortId)=>setNavSort(sortId)}/>
            </div>
            <div className="content">
                <h1>Все пиццы</h1>
                <div className="pizza_items">
                    {
                        isLoading ?
                            [...new Array(6)].map((_, index) => <SkeletonPizza key={index}/>)
                            : pizzaItems.map((pizza) => (
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