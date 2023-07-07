import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Navibar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../css/icon.png'

function Navibar() {
  return (
    <Navbar id="navbarDiv" expand="lg">
      <Container>

        <Navbar.Brand id="appName"><img src={icon} id="icon" alt='book Icon'/>a-z Dictionary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="linkDiv">
          <Nav>
            <Link to="/" id="link">Search Word</Link>
            <Link to="/synonyms" id="link">Search Synonyms</Link>
            <Link to="/wordslearned" id="link">Words Learned</Link>
            {/* <Link to="/payment" id="link">Support</Link> */}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Navibar