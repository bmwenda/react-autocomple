import { ChangeEvent } from 'react';
import { SearchBoxProps } from '../types';

const SearchBox = ({value, setValue, handleFocus}: SearchBoxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }

  return (
    <div className='search-box'>
      <input
        value={value}
        type='text'
        name='search'
        placeholder='search'
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </div>
  );
}

export default SearchBox;
