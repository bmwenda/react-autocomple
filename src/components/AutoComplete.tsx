import { useState} from 'react';
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

  const { data: { entries: sourceData }, error } = useFetch({ url: `${url}${query}` });

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
        showSuggestions && (
          <Suggestions
            suggestions={sourceData}
            searchTerm={value}
            handleClick={handleClick}
        />)
      )}
    </>
  )
}

export default AutoComplete;
