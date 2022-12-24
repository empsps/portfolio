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
      <Card
        text='TypeScript'
        logo={<Logo color='purple' logo='typescript' />}
        color='purple'
      />
      <Card
        text='Javascript'
        logo={<Logo color='orange' logo='javascript' />}
        color='orange'
      />
      <Card
        text='Git'
        logo={<Logo color='purple' logo='git' />}
        color='purple'
      />
      <Card
        text='Express.js'
        logo={<Logo color='orange' logo='express' />}
        color='orange'
      />
      <Card
        text='Sass'
        logo={<Logo color='purple' logo='sass' />}
        color='purple'
      />
      <Card
        text='Tailwind CSS'
        logo={<Logo color='orange' logo='tailwind' />}
        color='orange'
      />
      <Card
        text='Spring'
        logo={<Logo color='purple' logo='spring' />}
        color='purple'
      />
    </div>
  );
};
