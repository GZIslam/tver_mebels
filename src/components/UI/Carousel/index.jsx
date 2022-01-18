import "./index.sass";
import React, { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Pagination } from "../Pagination";

export const Carousel = props => {
    const items = props?.items;
    let current = props?.current;
    let setCurrent = props?.setCurrent;

    return (
        <div className="carousel">
            <div className="left-side">
                <SwitchTransition>
                    <CSSTransition
                        key={items[current].title}
                        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        classNames='fade'
                    >
                        <h1>
                            {items[current].title}
                        </h1>
                    </CSSTransition>
                </SwitchTransition>
                <SwitchTransition>
                    <CSSTransition
                        key={items[current].description}
                        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        classNames='fade'
                    >
                        <p>
                            {items[current].description}
                        </p>
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <div className="right-side">
                <SwitchTransition>
                    <CSSTransition
                        key={items[current].title}
                        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        classNames='fade'
                    >
                        <img
                            src={items[current].img}
                            alt={items[current].title}
                        >
                        </img>
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <Pagination count={items.length} setPage={setCurrent} current={current}></Pagination>
        </div>
    );
};