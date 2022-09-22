import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/my-project.png'
import navicon1 from '../assets/img/nav-icon1.svg'
import navicon2 from '../assets/img/nav-icon2.svg'
import navicon3 from '../assets/img/nav-icon3.svg'
import navicon4 from '../assets/img/icons8-github.svg'
import React from 'react';

function NavBar() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
        // let lastScroll = 50;
        // const onScroll = () => {
        //     if (window.scrollY <= lastScroll && window.scrollY > 50) {
        //         setScrolled(true)
        //     }else{
        //       setScrolled(false)
        //     }
        //     if(window.scrollY <= 50){
        //         setAtTop(true);
        //     }
        //     else{
        //         setAtTop(false);
        //     }
        //   lastScroll = Math.max(window.scrollY, 50);
        // }
        const onScroll = () => {
            if (window.scrollY > 50) {
              setScrolled(true);
            } else {
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
                    <span className="navbar-toggler-icon" onClick={() => setScrolled(true)}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto">
                        <Nav.Link 
                        className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                        onClick={() => {
                            onUpdateActiveLink("home")
                            document.getElementById('home').scrollIntoView()
                            }}>
                        Home</Nav.Link>
                        <Nav.Link
                        className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                        onClick={() => {
                            onUpdateActiveLink("skills")
                            document.getElementById('skills').scrollIntoView()
                        }}
                        >Skills</Nav.Link>
                        <Nav.Link
                        className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                        onClick={() => {
                            onUpdateActiveLink("projects")
                            document.getElementById('project').scrollIntoView()
                        }}
                        >Project</Nav.Link>
                        <Nav.Link
                        className={activeLink === "resume" ? "active navbar-link" : "navbar-link"}
                        onClick={() => {
                            onUpdateActiveLink("resume")
                            document.getElementById('resume').scrollIntoView()
                        }}
                        >Resume</Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                        <a 
                            onClick={() => window.open("https://mail.google.com/mail/u/lee@example.org/?view=cm&to=rishuanand2552@gmail.com&su=Via,portfolio", '_blank', 'noopener,noreferrer')}><img src={navicon2} alt="Icon" /></a>
                            <a onClick={() => window.open('https://www.linkedin.com/in/rishu-anand-9rian9999/', '_blank', 'noopener,noreferrer')}><img src={navicon1} alt=''/></a>
                            <a onClick={() => window.open('https://github.com/rianrishu', '_blank', 'noopener,noreferrer')}><img src={navicon4} alt=''/></a>
                                <a onClick={() => window.open('https://www.instagram.com/rianrishu/', '_blank', 'noopener,noreferrer')}><img src={navicon3} alt=''/></a>
                        </div>
                        <button className='vvd' 
                        onClick={() => window.open('https://firebasestorage.googleapis.com/v0/b/rianq-9f3db.appspot.com/o/Resume-Rishu%20Anand.pdf?alt=media&token=c7e8eee6-1353-4c71-b629-44069c7cd56a')}>
                            <span><ion-icon name="download-outline"></ion-icon> Download CV</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

// const openInNewTab = url => {
    
//   };