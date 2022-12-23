import { Card } from '../Card/Card';
import { Logo } from '../Logo';
import './TechStack.scss';

export const TechStack = () => {
  return (
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
  );
};
