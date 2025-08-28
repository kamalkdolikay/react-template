import styles from '../styles/portfolio.module.css';

interface PortfolioHtmlProps {
  message: string;
}

const PortfolioHtml: React.FC<PortfolioHtmlProps> = ({ message }) => {
  return (
    <h1 className={styles.portfolioTitle} aria-label={message}>
      {message}
    </h1>
  );
};

export default PortfolioHtml;
