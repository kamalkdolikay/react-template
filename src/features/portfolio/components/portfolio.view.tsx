import styles from '../styles/portfolio.module.css';

interface PortfolioViewProps {
  message: string;
}

const PortfolioView: React.FC<PortfolioViewProps> = ({ message }) => {
  return (
    <h1 className={styles.portfolioTitle} aria-label={message}>
      {message}
    </h1>
  );
};

export default PortfolioView;
