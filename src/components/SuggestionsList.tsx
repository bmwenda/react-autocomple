import React from 'react';
import '../styles/SuggestionsList.css';
import ListItem from './ListItem';

interface APIData {
  API: string,
  Link: string
}

interface SuggestionsListProps {
  suggestions: APIData[],
  showSuggestions: boolean,
  handleClick: (value: string) => void,
  searchTerm: string
}

const SuggestionsList = ({ suggestions, showSuggestions, handleClick, searchTerm }: SuggestionsListProps) => {
  return (
    showSuggestions && (
      <ul className='suggestions-list'>
        {suggestions?.map((suggestion, idx) => (
          <ListItem key={`${suggestion.Link}-${idx}`} suggestion={suggestion} handleClick={handleClick} searchTerm={searchTerm} />
        ))}
      </ul>
    )
  );
};

export default SuggestionsList;
