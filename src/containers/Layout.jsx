import React from 'react';
import {connect} from 'react-redux'
import {render} from 'react-dom';
import Header from './Header'

class Layout extends React.Component {

	constructor(){
		super();
		this.state = {

		}
	}

  render() {
	  
    return (

      <div className="home">
 		   <div className="header">
              <Header/>
          </div>
	      
      </div>);
  }
}

const mapStateToProps = (state, ownProps) => {
    return {

    };
}
const mapDispatchToProps = (dispatch) => {
  return {


  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Layout);