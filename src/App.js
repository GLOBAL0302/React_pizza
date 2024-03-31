import './App.css';

function App() {
    return (
        <div className="wrapper">
            <header className='d-flex justify-between'>
                <div className="header_left d-flex align-center">
                    <img src="/img/header_logo.svg" alt="header_pizza_log" style={{marginRight:"17px"}}/>
                    <div>
                        <h2 style={{fontWeight:"800px"}}>REACT PIZZA</h2>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className="header_right d-flex align-center">
                    <p className="total_price">520 AED</p>
                    <p>3</p>
                </div>
            </header>
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
            <div className="content">
                <h1>Все пиццы</h1>
                <div className="pizza_items">
                    <div className="pizza_item" style={{width:"280px", height:"459px"}}>
                        <img src="/img/all_pizzas/pizza_1.svg" alt=""/>
                        <h3 className='text-center'>Чизбургер-пицца</h3>
                        <div className="pizza_info mb-15">
                            <ul className='d-flex justify-around'>
                                <li>тонкое</li>
                                <li>традиционное</li>
                            </ul>
                            <ul className='d-flex justify-around'>
                                <li>26 см.</li>
                                <li>30 см.</li>
                                <li>40 см.</li>
                            </ul>
                        </div>
                        <div className="pizza_item_bottom d-flex justify-between align-center">
                            <p>from 320 AED</p>
                            <button><img src="/img/add_pizza_plus.svg" alt=""/>Add to cart <span>2</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
