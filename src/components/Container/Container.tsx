import React from 'react';
import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // Optional additional class for custom styles
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
