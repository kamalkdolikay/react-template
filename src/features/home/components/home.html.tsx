import styles from './home.module.css';

const HomeHtml: React.FC = () => {
  const greetingMessage: string = 'Hello, World!';
  return (
    <h1 className={styles.helloWorld} aria-label={greetingMessage}>
      {greetingMessage}
    </h1>
  );
};

export default HomeHtml;
