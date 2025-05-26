import React from "react"
import Header from "./Header"
import CategoriesBar from "./CategoriesBar"
import { Outlet } from "react-router-dom"



function Layout() {

	return (
		<div className='app'>
            <Header />
            <div className="main-section">
                <div className="main-section-layout">
                    <CategoriesBar />
                    <div className="main-section-content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
	)
}

export default Layout