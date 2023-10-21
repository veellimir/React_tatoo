import React from 'react'
import '../Sort/Sort.css'

function Sort() {
    const [openModal, setIsVisible] = React.useState(false);
    const [selected, setSelected] = React.useState(false);
    const listSort = ['цене', 'цвету', 'размеру']

    const onClickSelect = (i) => {
        setSelected(i);
        setIsVisible(false)
    }
    return (
        <div>
            <div className='wrapper-sorted'>
                <div className='sorted'>
                    <b>Сортировка по :</b>
                    <span onClick={() => setIsVisible( !openModal )}>{listSort[selected]}</span>
                </div>
                {openModal && (
                    <div className='wrapper_select'>
                        {
                          listSort.map((name, i) => (
                            <span key={i} onClick={() => onClickSelect(i)} className={selected === i ? 'active_select' : ''}>{name}</span>
                          ))  
                        }
                    </div>
                )}
            </div>
        </div>
    );
}
export default (Sort)