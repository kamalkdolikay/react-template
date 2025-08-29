import styles from '../styles/home.module.css';

interface HomeViewProps {
  greetingMessage: string;
}

const HomeView: React.FC<HomeViewProps> = ({ greetingMessage }) => {
  return (
    <h1 className={styles.helloWorld} aria-label={greetingMessage}>
      {greetingMessage}
    </h1>
  );
};

export default HomeView;
