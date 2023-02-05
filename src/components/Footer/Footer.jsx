import classnames from "classnames";
import style from './style.module.css';
import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import viber from "./img/viber.svg";
import whatsapp from "./img/whatsapp.svg";
import vk from "./img/vk.svg";
import sqr from "../img/header-logo.png"










function Footer() {
    return (
        <footer className="footer">
            			<div className="container">
				<div className={style.wrapper}>
					<div className={style.col}>
                        <div><img className="logo_img" src={sqr} alt="" /></div>
						<p className={style.copyright}>
							© «Интернет-магазин игровый товаров Fortnite.ru»
						</p>
					</div>
					<div className={style.col}>
						<nav className={style["menu-bottom"]}>
							<a href="/catalogue" className={style["menu-bottom__item"]}>
								Каталог
							</a>
							<a href="/catalogue" className={style["menu-bottom__item"]}>
								Акции
							</a>
							<a href="/catalogue" className={style["menu-bottom__item"]}>
								Новости
							</a>
							<a href="/catalogue" className={style["menu-bottom__item"]}>
								Отзывы
							</a>
						</nav>
					</div>
					<div className={style.col}>
						<nav className={style["menu-bottom"]}>
							<a href="/catalogue" className={style["menu-bottom__item"]}>
								Оплата и доставка
							</a>
							<a href="/catalogue" className={style["menu-bottom__item"]}>
								Часто спрашивают
							</a>
							<a href="/catalogue" className={style["menu-bottom__item"]}>
								Обратная связь
							</a>
							<a href="/catalogue" className={style["menu-bottom__item"]}>
								Контакты
							</a>
						</nav>
					</div>
					<div className={style.col}>
						<div className={style.contacts}>
							<p className={style.title}>Мы на связи</p>
							<a className={classnames(style.tel, style["contacts-link"])} href="tel:89177172179">
								8 (999) 000-00-00
							</a>
							<a className={classnames(style.mail, style["contacts-link"])} href="mailto:fortnite@gmail.com">
								Fortnite@gmail.com
							</a>
							<ul className={classnames(style.socials, style["contacts__socials"])}>
								<li className={style.item}>
									<a className={style.link} href="/#">
										<img
											src={telegram}
											alt="telegram"
											className={style.icon}
										/>
									</a>
								</li>

								<li className={style.item}>
									<a className={style.link} href="/#">
										<img
											src={whatsapp}
											alt="whatsapp"
											className={style.icon}
										/>
									</a>
								</li>
								<li className={style.item}>
									<a className={style.link} href="/#">
										<img
											src={viber}
											alt="viber"
											className={style.icon}
										/>
									</a>
								</li>
								<li className={style.item}>
									<a className={style.link} href="/#">
										<img
											src={instagram}
											alt="instagram"
											className={style.icon}
										/>
									</a>
								</li>
								<li className={style.item}>
									<a className={style.link} href="/#">
										<img
											src={vk}
											alt="vk"
											className={style.icon}
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
        </footer>
    );
}

export { Footer };
