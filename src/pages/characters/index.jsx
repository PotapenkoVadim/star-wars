import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CharacterCard from '../../components/common/character-card';
import CharacterModal from '../../components/common/character-modal';
import Note from '../../components/ui-kit/note';
import Selector from '../../components/ui-kit/selector';
import Spinner from '../../components/ui-kit/spinner';
import { configuration } from '../../configuration';
import useFetchCharacters from '../../hooks/use-fetch-characters';
import useFilterCharacters from '../../hooks/use-filter-characters';
import styles from './characters.module.scss';

const options = configuration.eyeColorOptions;
const defaultFilterValue = options[0].value;

export default function CharactersPage() {
  const [page, setPage] = useState(1);
  const [filterQuery, setFilterQuery] = useState(defaultFilterValue);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const { ref, inView } = useInView({ threshold: 1 });

  const { data: characters, count, isLoading, error} = useFetchCharacters(page);
  const filteredCharactes = useFilterCharacters(characters, filterQuery);

  const closeCharacterModal = () => setSelectedCharacter(null);
  const selectCharacter = (character) => setSelectedCharacter(character);
  const selectFilter = (option) => setFilterQuery(option.value);

  useEffect(() => {
    if (characters.length > 0 && filterQuery === defaultFilterValue) {
      const nextPage = page + 1;
      const totalPage = Math.ceil(count / 10);
  
      if (inView && !isLoading && nextPage <= totalPage) {
        setPage(nextPage);
      }
    }
  }, [inView, characters, count]);

  return (
    <main className={`container ${styles['characters']}`}>
      {count ? (
        <div className={styles['characters__title']}>
          <strong>{count} Peoples</strong> for you to choose your favorite
        </div>
      ) : null}

      <div className={styles['characters__filters']}>
        <Selector
          value={filterQuery}
          handleChange={selectFilter}
          placeholder='color eye'
          options={options} />
      </div>

      {error && <Note>Something went wrong</Note>}
      {!error && !isLoading && filteredCharactes.length === 0 && (
        <Note>No one was found</Note>
      )}

      {filteredCharactes.length > 0 && !error && (
        <div className={styles['characters__list']}>
          {filteredCharactes.map(item => (
            <CharacterCard
              key={item.name}
              handleClick={selectCharacter}
              character={item} />
          ))}
        </div>
      )}

      {isLoading && !error && <Spinner />}
      <div className={styles['characters__trigger']} ref={ref} />

      <CharacterModal
        character={selectedCharacter}
        handleClose={closeCharacterModal} />
    </main>
  );
}