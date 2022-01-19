import { useState } from 'react';

import { Header } from './pages/home/Header';
import { ModalContext } from './contexts/ModalContext';
import { HeroSection } from './pages/home/HeroSection';
import { InfoSection } from './pages/home/InfoSection';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <main
        className={
          isOpen
            ? 'relative h-screen overflow-hidden md:overflow-y-scroll'
            : 'static'
        }
      >
        <Header />

        <HeroSection />
        <InfoSection />
      </main>
    </ModalContext.Provider>
  );
}

export default App;
