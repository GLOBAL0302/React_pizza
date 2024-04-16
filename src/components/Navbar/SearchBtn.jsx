import React from 'react';

const SearchBtn = ({navSort, onclickNavSort}) => {
    const searchNames = [
        {name:"по пулярности", sortProperty:"rating"},
        {name:"по цене", sortProperty: "price"},
        {name:"по алфавиту", sortProperty: "title"}
    ]
    const [openSearch, setOpenSearch] = React.useState(false)



    const onClickSelect =()=>{
        setOpenSearch(prevState => !prevState)
    }

    const onClickChosen = (obj) =>{
        onclickNavSort(obj)
    }
    return (
        <div className="select_button" onClick={onClickSelect} >
            <img src="/img/search_icon.svg" className={openSearch ? "active_img" : ""} alt="pic"/>
            <button>Сортировка по: <span>{navSort.name}</span></button>
            <ul style={{display: openSearch? "flex": "none"}}>
                {searchNames.map((obj, index)=>(
                    <li key={index} onClick={()=>{onClickChosen(obj)}} className= {navSort.sortProperty === obj.sortProperty ? "chosenSearch" :""}>{obj.name}</li>
                ))}
            </ul>
        </div>

    );
};

export default SearchBtn;