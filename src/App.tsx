import { Card } from './components/Card';
import { Logo } from './components/Logo';
import './css/global.scss';
import './App.scss';

export const App = () => {
  return (
    <div className='root'>
      <main>
        <div className='tech-stack'>
          <Card
            text='React'
            logo={<Logo color='purple' logo='react' />}
            color='purple'
          />
          <Card
            text='Node.js'
            logo={<Logo color='orange' logo='nodejs' />}
            color='orange'
          />
        </div>
      </main>
    </div>
  );
};
