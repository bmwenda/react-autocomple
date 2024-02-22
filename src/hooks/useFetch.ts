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
        const fullPath = new URL(url);
        const response = await fetch(fullPath.href);
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return {data, loading, error}
}

export default useFetch;
