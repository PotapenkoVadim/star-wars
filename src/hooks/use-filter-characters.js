import { useEffect, useState } from 'react';

export default function useFilterCharacters(characters, filterQuery) {
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    if (filterQuery !== 'all') {
      const filteredCharacters = characters.filter(item => item.eye_color === filterQuery);
  
      setFilteredCharacters(filteredCharacters);
    } else {
      setFilteredCharacters(characters);
    }
  }, [characters, filterQuery]);

  return filteredCharacters;
}