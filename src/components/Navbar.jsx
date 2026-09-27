import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Attach passive scroll listener for maximum INP & scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            {/* Sticky Wrapper keeping both Top Bar and Main Header pinned on scroll */}
            <div style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                width: '100%',
                boxSizing: 'border-box'
            }}>
                {/* =========================
                    TOP BAR
                ========================= */}
                <div className="top-bar">
                    <div className="container top-bar-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>

                        <div className="contact-info" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <span>
                                <i className="fa-solid fa-phone"></i>
                                0725 436 394
                            </span>

                            <span>
                                <i className="fa-solid fa-envelope"></i>
                                info@aickibera.org
                            </span>
                        </div>

                        <div className="social-top" style={{ display: 'flex', gap: '12px' }}>
                            <a
                                href="https://web.facebook.com/kiberaaic/photos?_rdc=1&_rdr#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>

                            <a
                                href="https://www.youtube.com/@aickiberakibera"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                            >
                                <i className="fa-brands fa-youtube"></i>
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                onClick={(e) => e.preventDefault()}
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a
                                href="#"
                                aria-label="WhatsApp"
                                onClick={(e) => e.preventDefault()}
                            >
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>

                    </div>
                </div>


                {/* =========================
                    MAIN HEADER
                ========================= */}
                <header className="main-header" style={{ 
                    background: '#fff', 
                    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.06)',
                    transition: 'box-shadow 0.3s ease'
                }}>

                    <div className="navbar-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>

                        {/* LOGO */}
                        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                            <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                                <img
                                    src="/aic-kibera-logo.png"
                                    alt="AIC Kibera Logo"
                                    style={{ height: '45px', width: 'auto', objectFit: 'contain' }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </Link>
                        </div>


                        {/* =========================
                            NAVIGATION
                        ========================= */}
                        <nav
                            className={`navbar ${
                                isOpen ? 'mobile-visible' : ''
                            }`}
                            id="navbar"
                        >
                            <ul className="nav-menu">

                                {/* HOME */}
                                <li>
                                    <Link to="/" onClick={closeMenu}>
                                        Home
                                    </Link>
                                </li>


                                {/* ABOUT */}
                                <li className="dropdown">
                                    <button
                                        type="button"
                                        className="nav-dropdown-trigger"
                                        onClick={(e) => e.currentTarget.parentElement.classList.toggle('active')}
                                    >
                                        About Us
                                        <i className="fa-solid fa-angle-down"></i>
                                    </button>

                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="/about" onClick={closeMenu}>
                                                History, Vision & Values
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/leadership" onClick={closeMenu}>
                                                Leadership Tree
                                            </Link>
                                        </li>
                                    </ul>
                                </li>


                                {/* SERVICES */}
                                <li className="dropdown">
                                    <button
                                        type="button"
                                        className="nav-dropdown-trigger"
                                        onClick={(e) => e.currentTarget.parentElement.classList.toggle('active')}
                                    >
                                        Services
                                        <i className="fa-solid fa-angle-down"></i>
                                    </button>

                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="/first-time" onClick={closeMenu}>
                                                First Time Here?
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/welcome" onClick={closeMenu}>
                                                Welcome Message
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/programme" onClick={closeMenu}>
                                                Sunday & Weekly Programme
                                            </Link>
                                        </li>
                                    </ul>
                                </li>


                                {/* MINISTRIES */}
                                <li className="dropdown">
                                    <Link to="/ministries" onClick={closeMenu}>
                                        Ministries <i className="fa-solid fa-angle-down"></i>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="/ministries/music" onClick={closeMenu}>Music Ministry</Link>
                                        </li>
                                        <li>
                                            <Link to="/ministries/women" onClick={closeMenu}>Women Ministry</Link>
                                        </li>
                                        <li>
                                            <Link to="/ministries/men" onClick={closeMenu}>Men Ministry</Link>
                                        </li>
                                        <li>
                                            <Link to="/ministries/youth" onClick={closeMenu}>Youth Ministry</Link>
                                        </li>
                                        <li>
                                            <Link to="/ministries/children" onClick={closeMenu}>Children Ministry</Link>
                                        </li>
                                        <li>
                                            <Link to="/ministries/media" onClick={closeMenu}>Media Ministry</Link>
                                        </li>
                                        <li>
                                            <Link to="/ministries/projection" onClick={closeMenu}>Projection Ministry</Link>
                                        </li>
                                        <li>
                                            <Link to="/ministries/evangelism" onClick={closeMenu}>Evangelism Ministry</Link>
                                        </li>
                                    </ul>
                                </li>


                                {/* GALLERY */}
                                <li>
                                    <Link to="/gallery" onClick={closeMenu}>
                                        Church Gallery
                                    </Link>
                                </li>


                                {/* MEMBERSHIP */}
                                <li>
                                    <Link
                                        to="/registration"
                                        onClick={closeMenu}
                                    >
                                        Membership Registration
                                    </Link>
                                </li>


                                {/* CONTACT */}
                                <li>
                                    <Link
                                        to="/contact"
                                        onClick={closeMenu}
                                    >
                                        Contact Us
                                    </Link>
                                </li>

                            </ul>
                        </nav>


                        {/* =========================
                            ACTIONS
                        ========================= */}
                        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Link
                                to="/give"
                                className="btn-give"
                                onClick={closeMenu}
                            >
                                Give
                            </Link>

                            <button
                                onClick={toggleMenu}
                                className="mobile-menu-toggle"
                                type="button"
                                aria-label="Toggle Navigation Menu"
                                aria-expanded={isOpen}
                            >
                                <i className={`fa-solid ${
                                    isOpen ? 'fa-xmark' : 'fa-bars'
                                }`}></i>
                            </button>
                        </div>

                    </div>

                </header>
            </div>

            {/* Mobile & Sticky Professional Safeguards */}
            <style>{`
                @media (max-width: 992px) {
                    .navbar {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: #ffffff;
                        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                        padding: 20px;
                        box-sizing: border-box;
                    }
                    .navbar.mobile-visible {
                        display: block !important;
                    }
                    .nav-menu {
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    .dropdown-menu {
                        position: static !important;
                        box-shadow: none !important;
                        padding-left: 15px !important;
                        display: none;
                    }
                    .dropdown.active .dropdown-menu {
                        display: flex !important;
                        flex-direction: column;
                        gap: 10px;
                        margin-top: 10px;
                    }
                    .top-bar {
                        font-size: 11px;
                        padding: 6px 10px;
                    }
                }
                @media (min-width: 993px) {
                    .mobile-menu-toggle {
                        display: none !important;
                    }
                    .nav-menu {
                        display: flex;
                        align-items: center;
                        gap: 20px;
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    .dropdown {
                        position: relative;
                    }
                    .dropdown-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        background: #fff;
                        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                        list-style: none;
                        padding: 15px;
                        min-width: 200px;
                        display: none;
                        flex-direction: column;
                        gap: 10px;
                        border-radius: 6px;
                    }
                    .dropdown:hover .dropdown-menu {
                        display: flex !important;
                    }
                }
            `}</style>
        </>
    );
}