import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import {languages} from '../data/data.js'



// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.title.toLowerCase().slice(0, inputLength) === inputValue
  );
};
const getSectionSuggestions = section => {
  return section.suggestions;
}
const getSectionItems = section => {
  return section.suggestions;
}
const renderSectionTitle = section => {
	return section.title;
}
// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.title;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.text}
  </div>
);

export default class Home extends React.Component {
  constructor() {
    super();


    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
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
    );
  }
}
