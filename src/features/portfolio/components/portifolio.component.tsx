import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import PortfolioHtml from './portfolio.html';
import { setGreetingMessage } from '../state/portfolio.slice';

const Portfolio: React.FC = () => {
  const dispatch = useAppDispatch();
  const greetingMessage = useAppSelector(
    (state) => state.portfolio.greetingMessage,
  );

  // Example: Dispatch a new greeting message on component mount
  useEffect(() => {
    dispatch(setGreetingMessage('Welcome to My Portfolio!'));
  }, [dispatch]);

  return <PortfolioHtml message={greetingMessage} />;
};

export default Portfolio;
