import React from 'react';
import SearchBtn from "./SearchBtn";

const Navbar = () => {
    const [activeBar, setActiveBar] = React.useState(0)
    const navList = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

    const onClickBar= (index) =>{
        setActiveBar(index)
    }
    return(
        <div className="navbar flex-wrap">
        <ul className='d-flex navbar_left '>
            {navList.map((item, index)=>(
                <li key={index} onClick={()=> onClickBar(index)} className={activeBar === index? "active": ""}>{item}</li>
            ))}
        </ul>
            <SearchBtn/>
    </div>
    )
};

export default Navbar;