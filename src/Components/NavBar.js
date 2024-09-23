import { Container, Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import logo from '../Assets/Pics/armyLogo.svg';
import '../App.css'; // Ensure this path is correct

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

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
      <Navbar expand="lg" className={`${scrolled ? 'scrolled' : ''} navbar`}>
      <Container>
          <Navbar.Brand href="#home">
              <img src={logo} alt="logo" height={50} width={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>الرئيسيه</Nav.Link>
                  <Nav.Link href="#skill" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skill')}>الأدوات و البرامج</Nav.Link>
                  <Nav.Link href="#sections" className={activeLink === 'sections' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sections')}>أقسام المركز</Nav.Link>
                  <Nav.Link href="#info" className={activeLink === 'info' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('info')}>دليل المستخدم</Nav.Link>
                  <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>المشروعات الحاليه</Nav.Link>
                  <Nav.Link href="#leaders" className={activeLink === 'leaders' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('leaders')}>اعرف قادتك</Nav.Link>
                  <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>اتصل بنا</Nav.Link>
              </Nav>
                              {/* Toggle Switch */}
                              <div className="theme-switch-wrapper ms-auto">
                        <label className="theme-switch" htmlFor="checkbox">
                            <input
                                type="checkbox"
                                id="checkbox"
                                onChange={toggleTheme}
                                checked={theme === 'light'} // Switch to light if the current theme is light
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>

          </Navbar.Collapse>
      </Container>
  </Navbar>
    );
}

export default NavBar;
