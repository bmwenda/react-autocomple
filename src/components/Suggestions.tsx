import '../styles/Suggestions.css';
import SuggestionItem from './SuggestionItem';

interface APIData {
  API: string,
  Link: string
}

// The external API returns a function immediately before loading is complete
// Using a union with any to get around this issue
interface SuggestionsProps {
  suggestions: APIData[]| any,
  handleClick: (value: string) => void,
  searchTerm: string
}

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
