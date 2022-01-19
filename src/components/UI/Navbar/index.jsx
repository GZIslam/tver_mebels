import "./index.sass";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import logo_text from "../../../assets/images/logo-text.png"
import inst_header_icon from "../../../assets/images/inst-header-icon.png";
import vk_header_icon from "../../../assets/images/vk-header-icon.png";
import burger from "../../../assets/images/burger.svg";
import phone from "../../../assets/images/phone.svg";
import { Modal } from "../Modal";

export const Navbar = props => {
    let [ phonesActive, setPhones] = useState(false);
    let [ menuActive, setMenu ] = useState(false);

    return (
        <nav className="navbar">
            <ul>
                <li className="logo">
                    <div className="logo_inner">
                        <img className="logo_icon" src={logo} alt="TverMebels"></img>
                        <div className="logo_text">
                            <img src={logo_text} alt="logo"></img>
                            <p>мебель, техника, инженерия</p>
                        </div>
                    </div>
                </li>
                <div className="main">
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    {/* <li>
                        <Link to="/about">О нас</Link>
                    </li> */}
                    <li>
                        <Link to="/contacts">Контакты</Link>
                    </li>
                </div>
                <div className="additional">
                    <li className="info">
                        <div className="left-side">
                            <a target="_blank" rel="noreferrer" href="https://yandex.ru/maps/org/tvermebels/194374768699/?ll=35.914749%2C56.840302&z=18.8"><h3>Тверь, Склизкова, 44</h3></a>
                            <p>Пн-Пт: 10-19 Сб-Вс: 11-17</p>
                        </div>
                        <span></span>
                        <div className="right-side">
                            <a href="tel:+79038046820"><h3>8 (903) 804 68 20</h3></a>
                            <a href="tel:+74822646820"><p>8 (4822) 64 68 20</p></a>
                        </div>
                    </li>
                    <li className="link">
                        <a target="_blank" rel="noreferrer" href="https://vk.com/tvermebels"><img alt="vk" src={vk_header_icon}></img></a>
                    </li>
                    <li className="link">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tvermebels/"><img alt="instagram" src={inst_header_icon}></img></a>
                    </li>
                    <li className="phones">
                        <button onClick={() => setPhones(true)}>
                            <img src={phone} alt="burger_menu"/>
                        </button>
                    </li>
                    <li className="menu">
                        <button onClick={() => setMenu(true)}>
                            <img src={burger} alt="burger_menu"/>
                        </button>
                    </li>
                    <Modal active={phonesActive} setActive={setPhones}>
                            <a href="tel:+79038046820"><h1>8 (903) 804 68 20</h1></a>
                            <a href="tel:+74822646820"><h1>8 (4822) 64 68 20</h1></a>
                            <a href="tel:+79301524453"><h1>8 (930) 152-44-53</h1></a>
                    </Modal>
                    <Modal active={menuActive} setActive={setMenu}>
                        <Link to="/" onClick={() => setMenu(false)}><h1>Главная</h1></Link>
                        {/* <Link to="/about" onClick={() => setMenu(false)}><h1>О нас</h1></Link> */}
                        <Link to="/contacts" onClick={() => setMenu(false)}><h1>Контакты</h1></Link>
                    </Modal>
                </div>
            </ul>
        </nav>
    );
};