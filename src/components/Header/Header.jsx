import { Link } from 'react-router-dom';

import '../../css/Header/Header.css';

function Header() {
    return (
        <div>
            <div className='wrapper-header'>
                <div className="wrapper-contacts">
                    <div><p id="lower_textHeader">+7 927 2** 57 **</p></div>
                    <div><p className="email" id="lower_textHeader">kkaza**@gmail.com</p></div>
                </div>
                <div className="header-logo"></div>
                <div className="wrapper-icon">
                    <Link to="/backet">
                        <div className="icon-backet"></div>
                    </Link>
                    <div className="icon-user"></div>
                </div>
            </div>
        </div>
    );
}
export default Header;