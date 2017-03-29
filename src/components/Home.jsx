import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'
import {data} from '../data/data.js'


const getSuggestions = value => {
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

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      hasMore : false
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };


  onSuggestionsFetchRequested = ({ value }) => {
  	let suggestions = getSuggestions(value);
    this.setState({
      suggestions : suggestions.slice(0,3),
      hasMore: suggestions.length > 3
    });
  };


  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;


    const inputProps = {
      placeholder: 'Seach for name of a company (Eg: apple)',
      value,
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
				  <Button> View All</Button>
				</LinkContainer>
				:""}
			</div>

	    </div>

    );
  }
}
