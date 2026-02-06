import type { ReactNode } from 'react';
import './FullpageLayout.css';

interface FullpageSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export const FullpageSection = ({ children, id, className = '', dark = false }: FullpageSectionProps) => {
  return (
    <section
      id={id}
      className={`fullpage-section ${className} ${dark ? 'dark' : ''}`}
    >
      <div className="fullpage-content">
        {children}
      </div>
    </section>
  );
};

interface FullpageLayoutProps {
  children: ReactNode;
}

export const FullpageLayout = ({ children }: FullpageLayoutProps) => {
  return (
    <div className="fullpage-container">
      {children}
    </div>
  );
};
