import './css/global.scss';
import './App.scss';
import { TechStack } from './components/TechStack/TechStack';

export const App = () => {
  return (
    <div className='root'>
      <main>
        <TechStack />
      </main>
    </div>
  );
};
