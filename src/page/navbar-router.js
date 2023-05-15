import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Product from './product';
import Home from './home';
import Member from './member';


export default function NavBatRouter() {
    return (
        <div>
            <BrowserRouter>
            <nav class="navbar navbar-expand-sm bg-light">
                    <div class="container-fluid">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink to="/" className="nav-link active" href="#">
                                    Home
                                </NavLink>
                            </li>

                            <li class="nav-item">
                                <NavLink to="/product" className="nav-link active" href="#">
                                    Product
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/member" className="nav-link active" href="#">
                                    Member
                                </NavLink>
                            </li>

                        
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/member" element={<Member />} />
                    

                </Routes>
            </BrowserRouter>
        </div>
    );
}