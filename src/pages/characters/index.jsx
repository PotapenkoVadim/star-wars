import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CharacterCard from '../../components/common/character-card';
import CharacterModal from '../../components/common/character-modal';
import { DropDown } from '../../components/ui-kit/drop-down';
import Note from '../../components/ui-kit/note';
import Selector from '../../components/ui-kit/selector';
import Spinner from '../../components/ui-kit/spinner';
import { configuration } from '../../configuration';
import useFetchCharacters from '../../hooks/use-fetch-characters';
import useFilterCharacters from '../../hooks/use-filter-characters';
import { getTranslatedProperty } from '../../utils';
import styles from './characters.module.scss';

const options = configuration.eyeColorOptions;
const languageOptions = configuration.langs;
const title = configuration.charactersPageTitle;

export default function CharactersPage() {
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState('en');
  const [filterQuery, setFilterQuery] = useState('all');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const { ref, inView } = useInView({ threshold: 1 });

  const { data: characters, count, isLoading, error} = useFetchCharacters(page, language);
  const filteredCharactes = useFilterCharacters(characters, filterQuery);

  const closeCharacterModal = () => setSelectedCharacter(null);
  const selectCharacter = (character) => setSelectedCharacter(character);
  const selectFilter = (option) => setFilterQuery(option.value);
  const selectLanguage = (language) => {
    setLanguage(language);
    setPage(1);
  };

  useEffect(() => {
    if (characters.length > 0 && filterQuery === 'all') {
      const nextPage = page + 1;
      const totalPage = Math.ceil(count / 10);
  
      if (inView && !isLoading && nextPage <= totalPage) {
        setPage(nextPage);
      }
    }
  }, [inView, characters, count]);

  return (
    <main className={`container ${styles['characters']}`}>
      <div className={styles['characters__lang']}>
        <DropDown menu={languageOptions} handleSelect={selectLanguage}>
          <span>language: {language}</span>
        </DropDown>
      </div>

      {count ? (
        <div className={styles['characters__title']}>
          <strong>{count}</strong> {title[language]}
        </div>
      ) : null}

      <div className={styles['characters__filters']}>
        <Selector
          value={filterQuery}
          handleChange={selectFilter}
          placeholder='color eye'
          options={options[language]} />
      </div>

      {error && <Note>Something went wrong</Note>}
      {!error && !isLoading && filteredCharactes.length === 0 && (
        <Note>No one was found</Note>
      )}

      {filteredCharactes.length > 0 && !error && (
        <div className={styles['characters__list']}>
          {filteredCharactes.map(item => (
            <CharacterCard
              key={getTranslatedProperty(item, language, 'name')}
              language={language}
              handleClick={selectCharacter}
              character={item} />
          ))}
        </div>
      )}

      {isLoading && !error && <Spinner />}
      <div className={styles['characters__trigger']} ref={ref} />

      <CharacterModal
        character={selectedCharacter}
        language={language}
        handleClose={closeCharacterModal} />
    </main>
  );
}