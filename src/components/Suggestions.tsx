// @ts-nocheck
import { forwardRef } from 'react';
import '../styles/Suggestions.css';
import { APIData, SuggestionsProps } from '../types';
import SuggestionItem from './SuggestionItem';

const Suggestions = forwardRef<HTMLElement, SuggestionsProps>(function Suggestions(props, ref) {
  const {suggestions, handleClick, searchTerm} = props;

  if (!suggestions) {
    return <div>No results...</div>
  }

  let regex: RegExp;
  try {
    regex = new RegExp(`${searchTerm}`, 'gi');
  } catch (error: any) {
    return <div></div>
  }

  return (
    <ul className='suggestions-container' ref={ref}>
      {suggestions?.map((suggestion: APIData, idx: number) => (
        <SuggestionItem
          key={`${suggestion.Link}-${idx}`}
          suggestion={suggestion}
          regex={regex}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
});

export default Suggestions;
