import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header style={{
            position: "fixed",
            top: "0",
            width: "100%",
            zIndex: "1000",
            backgroundColor: "#343a40",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
        }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#ftco-nav"
                        aria-controls="ftco-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="fa fa-bars" /> Menu
                    </button>

                    <div className="navbar-collapse collapse" id="ftco-nav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active"><Link href="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link href="/blog" className="nav-link">Blog</Link></li>
                            <li className="nav-item"><Link href="/product" className="nav-link">Projects</Link></li>
                            <li className="nav-item"><Link href="/contact" className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
