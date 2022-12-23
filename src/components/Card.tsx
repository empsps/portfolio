import { ReactNode } from 'react';
import './card.scss';

type CardProps = {
  text: string;
  image: ReactNode;
  color: 'purple' | 'orange';
};

export const Card = ({ text, image, color }: CardProps) => {
  return (
    <div className={`card card-${color}`}>
      <div>{image}</div>
      <span>{text}</span>
    </div>
  );
};
