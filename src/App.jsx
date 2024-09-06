import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx'

const App = ()=>{
    return (
        <>
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-expenses" element={<h3>add expenses</h3>}/>
            </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}

export default App;