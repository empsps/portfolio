type Logo = 'react' | 'typescript' | 'nodejs' | 'javascript';
import { ReactComponent as React } from '../assets/react.svg';
import { ReactComponent as Nodejs } from '../assets/nodejs.svg';
import { ReactComponent as TypeScript } from '../assets/typescript.svg';
import { ReactComponent as Javascript } from '../assets/javascript.svg';

type LogoType = {
  logo: Logo;
  color: 'purple' | 'orange';
};

export const Logo = ({ logo, color }: LogoType) => {
  const logoColor = color === 'purple' ? '#6a3fc0' : '#e9af4c';
  switch (logo) {
    case 'react':
      return <React fill={logoColor} stroke={logoColor} />;
    case 'nodejs':
      return <Nodejs fill={logoColor} />;
    case 'typescript':
      return <TypeScript fill={logoColor} />;
    case 'javascript':
      return <Javascript fill={logoColor} />;
    default:
      return <React fill={logoColor} stroke={logoColor} />;
  }
};
