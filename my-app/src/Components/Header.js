import React from "react";

function Header() {
    return (
        <header className='header'>
            <h1 className="logo">🥐 toasty </h1>
            <h1 className="greeting">Welcome.</h1> {/* //* Make this write the user's name when logged in */}
            <div className="nav-bar">
                <h2 className="nav-link">About</h2>
                <h2 className="nav-link">Login</h2>

            </div>

        </header>
    )
}

export default Header