import { useEffect, useRef, useState} from 'react';
import Suggestions from './Suggestions';
import SearchBox from './SearchBox';
import useFetch from '../hooks/useFetch';
import useDebounce from '../hooks/useDebounce';
import { AutoCompleteProps } from '../types';
import { DEBOUNCE_RATE } from '../constants';

const AutoComplete = ({url}: AutoCompleteProps) => {
  const [value, setValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const query = useDebounce({value, debounceRate: DEBOUNCE_RATE});

  const { data: { entries: sourceData }, loading, error } = useFetch({ url: `${url}${query}` });
  const suggestionsRef = useRef<HTMLElement | null>(null);

  useEffect(()=> {
    const clickAwayListener = (event: MouseEvent) => {
      // true when dropdown is open but false when search box is clicked
      if (suggestionsRef.current && event.target instanceof Node && event.target.contains(suggestionsRef.current)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('click', clickAwayListener);

    return () => { document.removeEventListener('click', clickAwayListener) }
  }, [showSuggestions]);

  const handleFocus = () => {
    setShowSuggestions(true);
  }

  const handleClick = (suggestion: string) => {
    setValue(suggestion);
    setShowSuggestions(!showSuggestions);
  }

  return (
    <>
      <SearchBox value={value} setValue={setValue} handleFocus={handleFocus} />
      {error ? (<div>An error occured while fetching</div>) : (
        !loading && showSuggestions && (
          <Suggestions
            suggestions={sourceData}
            searchTerm={value}
            handleClick={handleClick}
            ref={suggestionsRef}
        />)
      )}
    </>
  )
}

export default AutoComplete;
