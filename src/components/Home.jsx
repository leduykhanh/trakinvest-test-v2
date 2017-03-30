import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'
// import {data} from '../data/data.js'
import {connect} from 'react-redux'


const getSuggestions = (value, data) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : data.filter(datum => datum.company.toLowerCase().slice(0, inputLength) === inputValue);
};
const getSectionSuggestions = section => {
  return section.employees;
}
const getSectionItems = section => {
  return section.employees;
}
const renderSectionTitle = section => {
	return section.company;
}

const getSuggestionValue = suggestion => suggestion.company;


const renderSuggestion = (suggestion, query) => (
  <div>
    {suggestion.name + ' (' + suggestion.email + ')'}
  </div>
);

 class Home extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      suggestions: [],
      hasMore : false,
      data : props.data
    };
  }

  onChange = (event, { newValue ,method}) => {
  	console.log("method", method);
  	// console.log("method", newValue);
  	if (method == 'enter') return;
    this.setState({
      value: newValue
    });
  };
  // componentWillMount = () =>{
  // 	console.log("this.props.data", this.props.data);
  // 	this.setState({
  //     data: this.props.data
  //   });
  // }

  onSuggestionsFetchRequested = ({ value }) => {
  	let suggestions = getSuggestions(value, this.props.data);
    this.setState({
      suggestions : suggestions.slice(0,3),
      hasMore : suggestions.length > 3,
      countResults : suggestions.length
    });
  };


  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const {data} = this.props;
    // console.log("data",data);

    const inputProps = {
      placeholder: 'Seach for name of a company (Eg: apple)',
      value: this.state.value,
      onChange: this.onChange
    };


    return (
    	<div className="row">
	    	<div className="search-input-container col-md-6">
		      <Autosuggest
		        suggestions={suggestions}
		        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
		        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
		        getSectionSuggestions={getSectionSuggestions}
		        getSuggestionValue={getSuggestionValue}
		        getSectionItems={getSectionItems}
		        renderSuggestion={renderSuggestion}
		        renderSectionTitle={renderSectionTitle}
		        highlightFirstSuggestion={true}
		        inputProps={inputProps}
		        multiSection={true}
		      />
			    <LinkContainer to={{ pathname: '/result', query: { search: this.state.value } }}>
				  <i className="fa fa-search pull-right" />
				</LinkContainer>
				<div className="clear-fix" ></div>
				{this.state.hasMore?
				<LinkContainer to={{ pathname: '/result', query: { search: this.state.value } }}>
				  <Button> View All {this.state.countResults} results</Button>
				</LinkContainer>
				:""}
			</div>

	    </div>

    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
      data: state.dataLoad.data
    };
}
const mapDispatchToProps = (dispatch) => {
  return {


  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);