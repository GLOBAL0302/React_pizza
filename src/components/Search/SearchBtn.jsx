import React from 'react';
import style from "./SearchBtn.module.scss"
import {SearchContext} from "../../App";

const SearchBtn = () => {
    const {searchValue, setSearchValue} = React.useContext(SearchContext)
    return (
        <div className={style.searchSection}>
            <img src="/img/searchIcon.png" alt="alt" style={{width:"25px"}}/>
            <input type="text" style={{width:"300px", height:"40px"}}
                   placeholder="Pizza name" value={searchValue} onChange={(e)=>setSearchValue(e.currentTarget.value)}/>
        </div>
    );
};

export default SearchBtn;