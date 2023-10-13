import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

async function callApi(setMsg){
    const response = await fetch("http://localhost:3000/homes");
    const json_response = await response.json();
    setMsg(json_response.msg);
}

const Home = () => {
    const [msg, setMsg] = useState("HI");
    useEffect(()=> {
        callApi(setMsg);
    }, []);
    return(
        <>
            <h1>{msg}</h1>
            <Link to="http://localhost:3000/homes">Click-me</Link>
        </>
    );
}

export default Home;