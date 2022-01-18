import "./index.sass";
import React, { useState } from "react";

const createNumbersArray = (count) => {
    let res = [];
    for(let i = 0; i < count; i++) {
        res.push(i + 1);
    }
    return res;
}

export const Pagination = (props) => {
    const count = props?.count || 0;
    const setPage = props?.setPage;
    const showNumbers = props?.showNumbers || false;
    const numbersArray= createNumbersArray(count);
    let activePage = props?.current;

    return (
        <div className="pagination">
            {numbersArray.map(item =>
                <button
                    key={item}
                    className={item === activePage + 1 ? "control active" : "control"}
                    onClick={() => setPage(item - 1)}
                >
                    { showNumbers ? item : null}
                </button>
            )}
        </div>
    )
};