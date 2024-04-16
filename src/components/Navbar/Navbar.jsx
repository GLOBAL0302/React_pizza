import React from 'react';

const Navbar = ({navCategory, onClickNavCategory}) => {
    const navList = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
    return(
        <ul className='d-flex navbar_left '>
            {navList.map((item, index)=>(
                <li key={index} onClick={()=>onClickNavCategory(index)} className={navCategory === index ? "active": ""}>{item}</li>
            ))}
        </ul>
    )
};

export default Navbar;