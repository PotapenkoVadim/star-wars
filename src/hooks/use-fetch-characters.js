import { useEffect, useState } from 'react';

export default function useFetchCharacters(page) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (page) {
      setIsLoading(true);
  
      fetch(`https://swapi.dev/api/people?page=${page}`)
        .then(response => response.json())
        .then(result => {
          setData([...data, ...result.results]);
          setCount(result.count);
        })
        .catch(error => setError(error))
        .finally(() => setTimeout(() => setIsLoading(false)));
    }
  }, [page]);

  return {
    data,
    count,
    isLoading,
    error
  };
}