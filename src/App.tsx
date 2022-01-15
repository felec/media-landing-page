import { useState } from 'react';

import { Header } from './pages/home/Header';
import { ModalContext } from './contexts/ModalContext';
import { HeroSection } from './pages/home/HeroSection';

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
        <div className='h-screen bg-fuchsia-300'></div>
      </main>
    </ModalContext.Provider>
  );
}

export default App;
