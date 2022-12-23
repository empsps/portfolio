import { Card } from './components/Card';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import './css/global.scss';

export const App = () => {
  return (
    <div className='root'>
      <main>
        <Card text='React' image=<ReactLogo /> color='purple' />
      </main>
    </div>
  );
};
