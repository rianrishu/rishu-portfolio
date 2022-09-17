import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/my-project.png'
import navicon1 from '../assets/img/nav-icon1.svg'
import navicon2 from '../assets/img/nav-icon2.svg'
import navicon3 from '../assets/img/nav-icon3.svg'
import React from 'react';

function NavBar() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (val) =>{
        setActiveLink(val);
    } 

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="LOGO"  style={{"height": "60px", "width": "160px"}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" 
                        className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                        onClick={() => onUpdateActiveLink("home")}
                        >Home</Nav.Link>
                        <Nav.Link href="/" 
                        className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                        onClick={() => onUpdateActiveLink("skills")}
                        >Skills</Nav.Link>
                        <Nav.Link href="/" 
                        className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                        onClick={() => onUpdateActiveLink("projects")}
                        >Project</Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                                <a href='/'><img src={navicon1} alt=''/></a>
                                <a href='/'><img src={navicon3} alt=''/></a>
                                <a href='/'><img src={navicon2} alt=''/></a>
                        </div>
                        <button className='vvd' onClick={() => console.log("Connect")}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;