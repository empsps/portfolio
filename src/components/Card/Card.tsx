import { ReactNode } from 'react';
import './Card.scss';

type CardProps = {
  text: string;
  logo: ReactNode;
  color: 'purple' | 'orange';
};

export const Card = ({ text, logo, color }: CardProps) => {
  return (
    <div className={`card card-${color}`}>
      <div className='logo'>{logo}</div>
      <span>{text}</span>
    </div>
  );
};
