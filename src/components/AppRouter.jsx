import React from 'react';
import {Route, Routes } from "react-router-dom";
import {publicRoutes} from "../router";

export const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    element={<route.component/>}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
        </Routes>
    );
};