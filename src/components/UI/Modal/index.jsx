import "./index.sass";
import React from "react";
import close from "../../../assets/images/close.svg";

export const Modal = props => {
    return (
        <div className={props.active ? "modal active" : "modal"}>
            <button onClick={() => props.setActive(false)} className="close">
                <img src={close} alt="close"/>
            </button>
            {props.children}
        </div>
    );
};