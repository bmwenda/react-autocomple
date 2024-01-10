import { ChangeEvent } from 'react';

interface SearchBoxProps {
  value: string,
  setValue: (value: string) => void,
  handleFocus: (event: ChangeEvent<HTMLInputElement>) => void
}

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
