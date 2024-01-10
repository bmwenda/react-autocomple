import { useState, useEffect } from 'react';

interface useFetchProps {
  url: string
}

const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message)
  }
}

const useFetch = ({url}: useFetchProps) => {
  console.log(url)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchData(url)
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
    setLoading(false);
  }, [url]);

  return {data, loading, error}
}

export default useFetch;
