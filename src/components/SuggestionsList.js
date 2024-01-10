import React from 'react';
import '../styles/SuggestionsList.css';
import ListItem from './ListItem';

const SuggestionsList = ({ suggestions, showSuggestions, handleClick, searchTerm }) => {
  return (
    showSuggestions && (
      <ul className='suggestions-list'>
        {suggestions?.map((suggestion) => (
          <ListItem suggestion={suggestion} handleClick={handleClick} searchTerm={searchTerm} />
        ))}
      </ul>
    )
  );
};

export default SuggestionsList;
