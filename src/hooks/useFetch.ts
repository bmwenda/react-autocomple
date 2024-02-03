import { useState, useEffect } from 'react';
import { useFetchProps } from '../types';

const useFetch = ({url}: useFetchProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return {data, loading, error}
}

export default useFetch;
