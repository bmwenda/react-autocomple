import { useState, useEffect } from 'react';

interface useDebounceProps {
    value: string,
    debounceRate: number
}

const useDebounce = ({value, debounceRate}: useDebounceProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchTerm(value);
    }, debounceRate);

    return () => clearTimeout(timeoutId);
  }, [value, debounceRate]);

  return searchTerm;
}

export default useDebounce;
