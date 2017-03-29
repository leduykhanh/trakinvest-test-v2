import React from 'react'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import Loader from 'react-loader'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }



  render() {
    return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Jangkoo</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">Technical</NavItem>
              <NavItem eventKey={2} href="/">Test</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
  }
}
const mapStateToProps = (state, ownProps) => {

    return {}

}
const mapDispatchToProps = (dispatch) => {

  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)