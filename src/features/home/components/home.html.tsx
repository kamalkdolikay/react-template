import styles from '../styles/home.module.css';
interface HomeHtmlProps {
  greetingMessage: string;
}

const HomeHtml: React.FC<HomeHtmlProps> = ({ greetingMessage }) => {
  return (
    <h1 className={styles.helloWorld} aria-label={greetingMessage}>
      {greetingMessage}
    </h1>
  );
};

export default HomeHtml;
