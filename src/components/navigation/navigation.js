import React, { useEffect, useState } from 'react';
import Header from './header/header';

const contentSections = ['About', 'Projects', 'Resume'];
const contentElements = [];

const Navigation = () => {
  const [currentSectionId, setCurrentSectionId] = useState('About');

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView({
      behavior: 'smooth',
    });
    setCurrentSectionId(id);
  };

  useEffect(() => {
    contentElements.push(
      ...contentSections.map((section) => document.getElementById(section))
    );
    const windowIntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSectionId(entry.target.id);
            // currentSectionIndex = contentElements.indexOf(entry.target);
          }
        });
      },
      { threshold: 1 }
    );

    for (const el of contentElements) {
      windowIntersectionObserver.observe(el);
    }

    return () => {
      for (const el of contentElements) {
        windowIntersectionObserver.unobserve(el);
      }
    };
  }, [contentElements]);

  return (
    <div>
      <Header
        currentSection={currentSectionId}
        handleNavClick={handleNavClick}
      />
    </div>
  );
};

export default Navigation;
