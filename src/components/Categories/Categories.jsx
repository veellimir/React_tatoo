import '../../css/Header/Header.css';
function Categories() {
    return (
        <div>
            <div className='wrapper-header' id="header-two">
                <div className="wrapper-menu">
                    <h1>Каталог</h1>
                    <div className="menu-burger"></div>
                </div>
                <div className="wrapper-navigation">
                    <span>На руки</span>
                    <span>Спина</span>
                    <span>Голова</span>
                    <span>Ноги</span>
                    <span>Шея</span>
                </div>
            </div>
        </div>
    );
}
export default Categories;