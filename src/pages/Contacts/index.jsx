import "./index.sass";
import React from "react";
import vk_logo from "../../assets/images/vk-icon.png";
import inst_logo from "../../assets/images/inst-icon.png";

export const Contacts = props => {
    return (
        <div className="view">
            <div className="contacts">
                <div className="left-side">
                    <iframe title="yandex-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa06ab99afb437fc79794c9f534b7f6fdeafef9a40aaded6b8cc29bfd3bdceb10&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
                </div>
                <div className="right-side">
                    <h1>Контакты</h1>

                    <h2>Адрес:</h2>
                    <p>г.Тверь, ул. Склизкова, д. 44 (цокольный этаж)</p>
                    
                    <h2>График работы:</h2>
                    <p>Понедельник - Пятница: <strong>10:00 - 19:00</strong></p>
                    <p>Суббота - Воскресенье: <strong>11:00 - 17:00</strong></p>

                    <h2>Телефоны:</h2>
                    <p>Суббота - Воскресенье: <strong>11:00 - 17:00</strong></p>
                    <p>Суббота - Воскресенье: <strong>11:00 - 17:00</strong></p>
                    <p>Суббота - Воскресенье: <strong>11:00 - 17:00</strong></p>

                    <h2>Мы в соцсетях:</h2>
                    <div className="links">
                        <a target="_blank" rel="noreferrer" href="https://vk.com/tvermebels"><img src={vk_logo} alt="vk" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tvermebels/"><img src={inst_logo} alt="instagram" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};