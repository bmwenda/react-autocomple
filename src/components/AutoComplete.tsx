import { useState} from 'react';
import Suggestions from './Suggestions';
import SearchBox from './SearchBox';
import useFetch from '../hooks/useFetch';
import useDebounce from '../hooks/useDebounce';

const DEBOUNCE_RATE = 750;

interface AutoCompleteProps {
  url: string
}

const AutoComplete = ({url}: AutoCompleteProps) => {
  const [value, setValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const query = useDebounce({value, debounceRate: DEBOUNCE_RATE});

  const {data, loading, error} = useFetch({url: `${url}${query}`});
  const {entries: sourceData} = data;

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
      { error && <div>An error occured while fetching</div>}
      {loading ? (<div>Searching...</div>) : (
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
