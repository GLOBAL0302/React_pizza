import React, {useCallback, useState} from 'react';
import style from "./SearchBtn.module.scss"
import {SearchContext} from "../../App";
import debounce from  "lodash.debounce"



const SearchBtn = () => {
    const [value, setValue] = useState("")
    const {setSearchValue} = React.useContext(SearchContext)
    const inputRef = React.useRef()

    const onClickClear = ()=>{
        inputRef.current.focus()
        setSearchValue("");
    }

    const testDebounce = useCallback(
        debounce(()=>{
            console.log("hi")
        }, 1000),[]
    )

    const updateSearchValue = useCallback(
        debounce((str)=>{
            setSearchValue(str)
            console.log("hi")
        }, 1000),[]
    )

    const onChangeInput = (event )=>{
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    return (
        <div className={style.searchSection}>
            <input
                ref={inputRef}
                type="text" style={{width:"300px", height:"40px"}}
                placeholder="Pizza name"
                 value={value} onChange={onChangeInput}/>
            <img
                onClick={onClickClear}
                src={value.length > 0 ? "https://cdn-icons-png.flaticon.com/512/3334/3334328.png": "/img/searchIcon.png"} alt="" style={{width:"25px"}}/>
        </div>
    );
};

export default SearchBtn;