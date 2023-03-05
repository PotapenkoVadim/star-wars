import { useEffect, useState } from 'react';
import { configuration } from '../configuration';

const characterKeys = configuration.characterKeys;

export default function useFetchCharacters(page, language) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (page) {
      setIsLoading(true);

      if (page === 1) {
        setCount(0);
        setData([]);
      }

      const  params = new URLSearchParams(language === 'wookiee'
        ? { page, format: 'wookiee' }
        : { page }
      );
  
      fetch(`https://swapi.dev/api/people?${params}`)
        .then(response => response.text())
        .then(result => {
          const clearnedResult = result.replace('"akrcwohoahoohuc":whhuanan,', '');
          const safeResult = JSON.parse(clearnedResult);

          setData((prevData) => [...prevData, ...safeResult[characterKeys[language].results]]);
          setCount(() => safeResult[characterKeys[language].count]);
        })
        .catch(error => setError(error))
        .finally(() => setTimeout(() => setIsLoading(false)));
    }
  }, [page, language]);

  return {
    data,
    count,
    isLoading,
    error
  };
}