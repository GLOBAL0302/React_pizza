import React from 'react';

const Navbar = () => {
    const [activeBar, setActiveBar] = React.useState(0)
    const navList = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

    const onClickBar= (index) =>{
        setActiveBar(index)
    }
    return(
        <div className="navbar">
        <ul className='d-flex'>
            {navList.map((item, index)=>(
                <li onClick={()=> onClickBar(index)} className={activeBar === index? "active": ""}>{item}</li>
            ))}
        </ul>

        <div className="select">
            <button><img src="/img/search_icon.svg"/></button>
            <label htmlFor="select" style={{marginRight:"10px"}}>Сортировка по:</label>
            <select name="" id="select">
                <option>популярности</option>
                <option>по цене</option>
                <option>по алфавиту</option>
            </select>
        </div>

    </div>
    )
};

export default Navbar;