import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx'
import AddExpenses from "./components/addExpenses.jsx";

const App = ()=>{
    return (
        <>
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-expenses" element={<AddExpenses/>}/>
            </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}

export default App;