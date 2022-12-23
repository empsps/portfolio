type Logo = 'react' | 'typescript' | 'nodejs' | 'javascript';
import { ReactComponent as ReactLogo } from '../assets/react.svg';
import { ReactComponent as NodejsLogo } from '../assets/nodejs.svg';

type LogoType = {
  logo: Logo;
  color: 'purple' | 'orange';
};

export const Logo = ({ logo, color }: LogoType) => {
  const logoColor = color === 'purple' ? '#745ba7' : '#ffc663';
  switch (logo) {
    case 'react':
      return <ReactLogo fill={logoColor} stroke={logoColor} />;
    case 'nodejs':
      return <NodejsLogo fill={logoColor} />;
    default:
      return <ReactLogo fill={logoColor} stroke={logoColor} />;
  }
};
