import sqr from "../img/header-logo.png"
import "../Header/Header.css"








function Header() {
    return (
        <nav>
            <div className='nav-wrapper'>
                <a href='/' className='brand-logo'><img className="logo_img" src={sqr} alt="" /></a>
                <h6 className="title">Интернет магазин игровых товаров Fortnite.ru</h6>
            </div>
        </nav>
    );
}

export { Header };
