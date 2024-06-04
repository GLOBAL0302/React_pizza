import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setSort} from "../../redux/slices/filterSlice";

const SortBtn = () => {
    const dispatch = useDispatch()
    const sort = useSelector((state)=> state.filters.sort)



    const searchNames = [
        {name:"по пулярности", sortProperty:"rating"},
        {name:"по цене", sortProperty: "price"},
        {name:"по алфавиту", sortProperty: "title"}
    ]
    const [openSearch, setOpenSearch] = React.useState(false)



    const onClickSelect =()=>{
        setOpenSearch(prevState => !prevState)
    }

    const onClickChosen = (item) =>{
        dispatch(setSort(item))
    }
    return (
        <div className="select_button" onClick={onClickSelect} >
            <img src="/img/search_icon.svg" className={openSearch ? "active_img" : ""} alt="pic"/>
            <button>Сортировка по: <span>{sort.name}</span></button>
            <ul style={{display: openSearch? "flex": "none"}}>
                {searchNames.map((obj, index)=>(
                    <li key={index} onClick={()=> onClickChosen(obj)} className= {sort.sortProperty === obj.sortProperty ? "chosenSearch" :""}>{obj.name}</li>
                ))}
            </ul>
        </div>

    );
};

export default SortBtn;