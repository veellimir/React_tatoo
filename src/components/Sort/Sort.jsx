import React from 'react'
import '../Sort/Sort.css'

function Sort({ value, onClickSort }) {
    const [openModal, setIsVisible] = React.useState(false);
    const listSort = [
        { name: 'цене', sortProperty: 'price' }, 
        { name:'объему', sortProperty: 'volume' }, 
        { name: 'рейтингу', sortProperty: 'rating'}
    ];

    const onClickSelect = (i) => {
        onClickSort(i);
        setIsVisible(false)
    }
    return (
        <div>
            <div className='wrapper-sorted'>
                <div className='sorted'>
                    <b>Сортировка по :</b>
                    <span onClick={() => setIsVisible(!openModal)}>{value.name}</span>
                </div>
                {openModal && (
                    <div className='wrapper_select'>
                        {
                          listSort.map((obj, i) => (
                            <span key={i} onClick={() => onClickSelect(obj)} className={value.sortProperty === obj.sortProperty ? 'active_select' : ''}>{obj.name}</span>
                          ))  
                        }
                    </div>
                )}
            </div>
        </div>
    );
}
export default (Sort)