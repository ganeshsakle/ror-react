import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
]);

const App = () =>{
    return(
        <>
        <h1>App Component</h1>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router}/>);