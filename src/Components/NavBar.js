import { Container, Navbar , Nav} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import logo from '../Assets/Pics/armyLogo.svg';
export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                <img src={logo} alt='logo'  hight={50} width={50}/>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>الرئيسيه</Nav.Link>
                        <Nav.Link href="#tools" className={activeLink === 'tools' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tools')}>الأدوات و البرامج</Nav.Link>
                        <Nav.Link href="#sections" className={activeLink === 'sections' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sections')}>أقسام المركز</Nav.Link>
                        <Nav.Link href="#docs" className={activeLink === 'docs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('docs')}>دليل المستخدم</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>المشروعات الحاليه</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>اعرف قادتك</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>اتصل بنا</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;