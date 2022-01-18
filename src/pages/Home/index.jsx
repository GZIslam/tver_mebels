import React, { useEffect, useState } from "react";
import { Carousel } from "../../components/UI/Carousel";
import Img1 from "../../assets/images/1.png";
import Img2 from "../../assets/images/2.png";
import Img3 from "../../assets/images/3.png";

export const Home = props => {
    const carouselData = [
        {
            title: "ЭКСКЛЮЗИВНЫЙ",
            description: "ПОДХОД К КАЖДОМУ КЛИЕНТУ",
            img: Img1,
        },
        {
            title: "МЕБЕЛЬ НА ЗАКАЗ",
            description: "ПО ВАШИМ РАЗМЕРАМ",
            img: Img2,
        },
        {
            title: "ИЗДЕЛИЯ ИЗ КАМНЯ",
            description: "ИССКУСТВЕННЫЙ И НАТУРАЛЬНЫЙ",
            img: Img3,
        },
    ];

    const [ current, setCurrent ] = useState(0);

    return (
        <div className="view">
            <Carousel items={carouselData} current={current} setCurrent={setCurrent}></Carousel>
        </div>
    );
};