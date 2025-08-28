import styles from './loader.module.css';

const Loader: React.FC = () => (
  <div role="status" aria-live="polite" className={styles.loader}>
    <span className={styles.spinner} aria-hidden="true"></span>
    <span>Loading...</span>
  </div>
);

export default Loader;
