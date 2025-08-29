import HomeView from './home.view';
import { useAppSelector } from '@/store/redux.store';

const Home = () => {
  const greetingMessage = useAppSelector((state) => state.home.greetingMessage);
  return <HomeView greetingMessage={greetingMessage} />;
};

export default Home;
