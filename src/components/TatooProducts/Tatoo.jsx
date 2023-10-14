import '../../css/TatooProduct/Tatoo.css'
import React from 'react';

function Tatoo({ title, price }) {
    const [tatooCount, setTatooCount] = React.useState(0)
    const addBasket = () => {
        setTatooCount(tatooCount + 1)
    }
    return (
        <div className='tatoo'>
            <h2>{title}</h2>
            <h2>От {price} ₽</h2>
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