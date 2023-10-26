import '../../css/Header/Header.css';
import React from 'react';


function Categories({ value, onClickCategory }) {
    // const [activeCategory, SetActiveCategory] = React.useState(0)

    const categories = [
        'Все',
        'На руки',
        'Спина',
        'Голова',
        'Ноги',
        'Шея',
    ]
    // const onClickCategory = (index) => {
    //     SetActiveCategory(index)
    // }
    return (
        <div >
            <nav className='wrapper-header' id="header-two" >
                <div className="wrapper-menu">
                    <h1>Каталог</h1>
                    <div className="menu-burger"></div>
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