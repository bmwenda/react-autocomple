import '../styles/Suggestions.css';
import { APIData, SuggestionsProps } from '../types';
import SuggestionItem from './SuggestionItem';

const Suggestions = ({ suggestions, searchTerm, handleClick }: SuggestionsProps) => {
  if (!suggestions) {
    return <div>No results...</div>
  }
  return (
    <ul className='suggestions-container'>
      {suggestions?.map((suggestion: APIData, idx: number) => (
        <SuggestionItem
          key={`${suggestion.Link}-${idx}`}
          suggestion={suggestion}
          searchTerm={searchTerm}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
};

export default Suggestions;
