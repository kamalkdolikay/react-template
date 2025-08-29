import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/redux.store';
import PortfolioView from './portfolio.view';
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

  return <PortfolioView message={greetingMessage} />;
};

export default Portfolio;
