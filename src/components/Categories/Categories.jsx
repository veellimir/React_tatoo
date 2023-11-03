import React from 'react';

import Search from '../Search';

import '../../css/Header/Header.css';


function Categories({ value, onClickCategory, searchValue, setSearchValue }) {

    const categories = [
        'Все',
        'На руки',
        'Спина',
        'Голова',
        'Ноги',
        'Шея',
    ]
    return (
        <div >
            <nav className='wrapper-header' id="header-two" >
                <div className="wrapper-menu">
                    <h1>Каталог</h1>
                    <div className="menu-burger"></div>
                <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
                </div>
                <div className="wrapper-navigation" >
                    {categories.map((categoryName, i) => (
                        <span key={i} onClick={() => onClickCategory(i)} className={value === i ? 'activeCategory' : ''}>{categoryName}</span>
                    ))}
                </div>
            </nav>
        </div>
    );
}
export default Categories;