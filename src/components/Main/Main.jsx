import '../../css/Main/Main.css';

import Categories from '../Categories/Categories';


function Main() {
    return (
        <div>
            <main>
                <div class="main-img"></div>
                <div class="main-littleOne"></div>
                <div class="main-littleTwo"></div>
                <div class="wrapper-title">
                    <h1>Лучшие товары в мире татуировок</h1>
                    <h2>Оборудование и расходники  для самых ярких и качественных работ</h2>
                    <button class="btn_catalog">Смотреть каталог</button>
                </div>
            </main>
            <Categories />
        </div>
    );
}
export default Main;