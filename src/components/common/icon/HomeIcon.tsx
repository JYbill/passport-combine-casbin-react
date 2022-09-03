import React from 'react';
import './Icon.module.scss';

const HomeIcon: React.FC = () => {
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref="#icon-home"></use>
    </svg>
  );
};
export default HomeIcon;
