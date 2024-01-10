import '../styles/Suggestions.css';
import SuggestionItem from './SuggestionItem';

interface APIData {
  API: string,
  Link: string
}

interface SuggestionsProps {
  suggestions: APIData[],
  handleClick: (value: string) => void,
  searchTerm: string
}

const Suggestions = ({ suggestions, searchTerm, handleClick }: SuggestionsProps) => {
  if (!suggestions) {
    return <div>No results...</div>
  }
  return (
    <ul className='suggestions-container'>
      {suggestions?.map((suggestion, idx) => (
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
