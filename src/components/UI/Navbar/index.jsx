import "./index.sass";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import logo_text from "../../../assets/images/logo-text.png"
import inst_header_icon from "../../../assets/images/inst-header-icon.png";
import vk_header_icon from "../../../assets/images/vk-header-icon.png";

export const Navbar = props => {
    return (
        <nav className="navbar">
            <ul>
                <li className="logo">
                    <div className="logo_inner">
                        <img src={logo} alt="TverMebels"></img>
                        <div className="logo_text">
                            <img src={logo_text} alt="logo"></img>
                            <p>мебель, техника, инженерия</p>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/about">О нас</Link>
                </li>
                <li>
                    <Link to="/contacts">Контакты</Link>
                </li>
                <li>
                    <div className="contacts-container">
                        <div className="left-side">
                            <a target="_blank" href="https://yandex.ru/maps/org/tvermebels/194374768699/?ll=35.914749%2C56.840302&z=18.8"><h3>Тверь, Склизкова, 44</h3></a>
                            <p>Пн-Пт: 10-19 Сб-Вс: 11-17</p>
                        </div>
                        <span></span>
                        <div className="right-side">
                            <a href="tel:+79038046820"><h3>8 (903) 804 68 20</h3></a>
                            <a href="tel:+74822646820"><p>8 (4822) 64 68 20</p></a>
                        </div>
                    </div>
                </li>
                <li className="link">
                    <a target="_blank" rel="noreferrer" href="https://vk.com/tvermebels"><img src={vk_header_icon}></img></a>
                </li>
                <li className="link">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tvermebels/"><img src={inst_header_icon}></img></a>
                </li>
            </ul>
        </nav>
    );
};