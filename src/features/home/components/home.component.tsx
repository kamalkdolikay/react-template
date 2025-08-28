import HomeHtml from './home.html';
import { useAppSelector } from '../../../store/store';

const Home = () => {
  const greetingMessage = useAppSelector((state) => state.home.greetingMessage)
  return <HomeHtml greetingMessage={greetingMessage}/>;
};

export default Home;
