import React from 'react';

const Navbar = () => {
    return(
        <div className="select_section">
        <ul className='d-flex'>
            <li>Все</li>
            <li>Мясные</li>
            <li>Вегетарианская</li>
            <li>Гриль</li>
            <li>Острые</li>
            <li>Закрытые</li>
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