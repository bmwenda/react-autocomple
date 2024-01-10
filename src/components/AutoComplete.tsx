import React, { useState, useEffect} from 'react';
import SuggestionsList from './SuggestionsList';
import { fetchPublicApis } from '../utils';

const AutoComplete = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchPublicApis(value)
        .then((response) => {
          setData(response.entries);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);

    return () => clearTimeout(debounce);
  }, [value]);


  const handleChange = (event: any) => {
    setValue(event.currentTarget.value);
  }

  const handleFocus = () => {
    setShowSuggestions(true);
  }

  const handleClick = (suggestion: string) => {
    setValue(suggestion);
    setShowSuggestions(!showSuggestions);
  }

  // const handleInputClick = () => {
  //   setShowSuggestions(!showSuggestions);
  // }

  return (
    <div className='search-box'>
      <input
        value={value}
        type='text'
        name='search'
        placeholder='search'
        onChange={handleChange}
        onFocus={handleFocus}
        // onClick={handleInputClick}
      />
      <SuggestionsList suggestions={data} showSuggestions={showSuggestions} handleClick={handleClick} searchTerm={value} />
    </div>
  )
}

export default AutoComplete;
