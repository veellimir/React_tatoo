import React from 'react';

import '../../css/TatooProduct/Tatoo.css'




function Tatoo({ title, price, imageUrl }) {
    const [tatooCount, setTatooCount] = React.useState(0)
    const addBasket = () => {
        setTatooCount(tatooCount + 1)
    }
    return (
        <div className='tatoo'>
            <img className='img_tatoo' src={imageUrl} alt="Изобр. пока отсутствуют" />
            <div className='wrapper-descript_tattoo'>
                <h2>{title}</h2>
                <h2>От {price} ₽</h2>
            </div>
            <div className='wrapper-btn-basket'>
                <div className='wrapper_btn_quantity'>
                    <button>-</button>
                    <div className='counter_items'>{tatooCount}</div>
                    <button>+</button>
                </div>
                <span id='add_backet' onClick={addBasket}>Добавить в корзину</span>
            </div>
        </div>
    );
}
export default Tatoo;