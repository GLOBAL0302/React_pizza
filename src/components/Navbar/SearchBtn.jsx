import React from 'react';

const SearchBtn = () => {
    const searchNames = ["по пулярности", "по цене", "по алфавиту"]
    const [openSearch, setOpenSearch] = React.useState(false)
    const [chosenSearch, setChosenSearch] = React.useState(0)

    const onClickSelect =()=>{
        setOpenSearch(prevState => !prevState)
    }

    const onClickChosen = (index) =>{
        setChosenSearch(index)
    }
    return (
        <div className="select_button" onClick={onClickSelect} >
            <img src="/img/search_icon.svg" className={openSearch ? "active_img" : ""}/>
            <button>Сортировка по: <span>{searchNames[chosenSearch]}</span></button>
            <ul style={{display: openSearch? "flex": "none"}}>
                {searchNames.map((item, index)=>(
                    <li key={index} onClick={()=>{onClickChosen(index)}} className= {chosenSearch === index ? "chosenSearch" :""}>{item} </li>
                ))}
            </ul>
        </div>

    );
};

export default SearchBtn;