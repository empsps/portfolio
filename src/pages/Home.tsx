import { TechStack } from '../components/TechStack/TechStack';
import './Home.scss';

export const Home = () => {
  return (
    <div className='root'>
      <aside></aside>
      <main>
        <TechStack />
      </main>
    </div>
  );
};
