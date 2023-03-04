import CharacterCard from '../../components/common/character-card';
import Selector from '../../components/ui-kit/selector';
import styles from './characters.module.scss';

export default function CharactersPage() {
  return (
    <main className={`container ${styles['characters']}`}>
      <div className={styles['characters__title']}>
        <strong>60 Peoples</strong> for you to choose your favorite
      </div>

      <div className={styles['characters__filters']}>
        <Selector placeholder='color eye' />
      </div>

      <div className={styles['characters__list']}>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </main>
  );
}