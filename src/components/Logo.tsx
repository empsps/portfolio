import { ReactComponent as React } from '../assets/react.svg';
import { ReactComponent as Nodejs } from '../assets/nodejs.svg';
import { ReactComponent as TypeScript } from '../assets/typescript.svg';
import { ReactComponent as Javascript } from '../assets/javascript.svg';
import { ReactComponent as Git } from '../assets/git.svg';
import { ReactComponent as Express } from '../assets/express.svg';
import { ReactComponent as Spring } from '../assets/spring.svg';
import { ReactComponent as Tailwind } from '../assets/tailwind.svg';
import { ReactComponent as Sass } from '../assets/sass-1.svg';

type Logo =
  | 'react'
  | 'typescript'
  | 'nodejs'
  | 'javascript'
  | 'git'
  | 'express'
  | 'spring'
  | 'tailwind'
  | 'sass';

type LogoProps = {
  logo: Logo;
  color: 'purple' | 'orange';
};

export const Logo = ({ logo, color }: LogoProps) => {
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
    case 'git':
      return <Git fill={logoColor} />;
    case 'express':
      return <Express fill={logoColor} />;
    case 'spring':
      return <Spring fill={logoColor} />;
    case 'tailwind':
      return <Tailwind fill={logoColor} />;
    case 'sass':
      return <Sass fill={logoColor} />;
    default:
      return <React fill={logoColor} stroke={logoColor} />;
  }
};
