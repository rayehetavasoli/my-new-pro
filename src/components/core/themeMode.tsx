'use client';
import React, { useState } from 'react';
import useDarkSide from '@/hooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Switcher: React.FC = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState<boolean>(colorTheme === 'light');

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={34} />
      </div>
    </>
  );
};

export default Switcher;
