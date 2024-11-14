import { Container, Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import logo from '../Assets/Pics/armyLogo.svg';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const navigate = useNavigate();

    const handleClick = (path) => {
        if (path) {
            navigate(path);
            onUpdateActiveLink(path.value);
        } else {
            console.warn("No path provided");
        }
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <Navbar expand="lg" className={`${scrolled ? 'scrolled' : ''} scrolled`}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" height={50} width={50} onClick={() => handleClick('/')} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleClick('/')}>الرئيسيه</Nav.Link>
                        <Nav.Link href="#UsePage" className={activeLink === 'UsePage' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleClick('/use')}>دليل المستخدم</Nav.Link>
                        <Nav.Link href="#AboutPage" className={activeLink === 'AboutPage' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleClick('/about')}>عن المركز</Nav.Link>
                        <Nav.Link href="#skill" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleClick("/skill")}>الأدوات و البرامج</Nav.Link>
                    </Nav>

                    <div className="theme-switch-wrapper ms-auto">
                        <label className="theme-switch" htmlFor="checkbox">
                            <input
                                type="checkbox"
                                id="checkbox"
                                onChange={toggleTheme}
                                checked={theme === "light"}
                            />
                            <span className="slider round">
                                <CiLight className="icon sun-icon" />
                                <MdDarkMode className="icon moon-icon" />
                            </span>
                        </label>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
