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
      <div>The TrakInvest Test</div>
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