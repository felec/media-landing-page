/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState, ReactElement } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ImAccessibility } from 'react-icons/im';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';

import { Modal } from './Modal';
import { useModal } from '../../contexts/ModalContext';

export interface NavLink {
  title: string;
  icon: ReactElement | null;
}

const navVariants = {
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  visible: {
    scale: 1,
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
  hidden: {
    scale: 0,
    transition: {
      duration: 0.1,
      ease: 'easeIn',
    },
  },
};

const mobileHeaderVariants = {
  unfocus: {
    translateY: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  focus: {
    translateY: -50,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};

const navLinks: NavLink[] = [
  {
    title: 'Home',
    icon: <ImAccessibility size={18} />,
  },
  { title: 'Lorem', icon: null },
  { title: 'Sequi', icon: null },
  { title: 'Fugiat', icon: null },
  { title: 'Numquam', icon: null },
  { title: 'Deserunt', icon: null },
  { title: 'Quidem', icon: null },
  { title: 'Minima', icon: null },
  { title: 'Veritatis', icon: null },
  { title: 'Soluta', icon: null },
  { title: 'Beatae', icon: null },
  { title: 'Search', icon: <AiOutlineSearch size={20} /> },
  { title: 'Shopping', icon: <AiOutlineShopping size={20} /> },
];

export const NavBar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const { isOpen, setIsOpen } = useModal();
  const searchAnim = useAnimation();
  const focusAnim = useAnimation();

  const handleSearchModal = () => {
    setIsSearch(!isSearch);
    setIsOpen(!isOpen);
  };

  const handleMenuOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isSearch) {
      searchAnim.start('hidden');
    } else {
      searchAnim.start('visible');
    }

    //eslint-disable-next-line
  }, [isSearch]);

  useEffect(() => {
    if (isFocus) {
      focusAnim.start('focus');
    } else {
      focusAnim.start('unfocus');
    }

    //eslint-disable-next-line
  }, [isFocus]);

  return (
    <>
      {/* Mobile */}
      <Modal isOpen={isOpen} cb={setIsFocus} links={navLinks} />
      <motion.div
        initial='unfocus'
        animate={focusAnim}
        variants={mobileHeaderVariants}
        className='relative md:static md:hidden flex justify-between items-center h-12 w-full px-4 bg-black z-30 cursor-pointer'
      >
        <div onClick={handleMenuOpen} className='relative h-4 w-4'>
          <motion.div
            initial={false}
            animate={{
              translateY: isOpen ? 0 : -3,
              rotate: isOpen ? [0, 0, 45] : 0,
              transition: {
                duration: 0.2,
                ease: 'easeOut',
              },
            }}
            style={{
              height: '1px',
              width: '1rem',
            }}
            className='absolute top-1/2 left-0 bg-zinc-500'
          ></motion.div>
          <motion.div
            initial={false}
            animate={{
              translateY: isOpen ? 0 : 3,
              rotate: isOpen ? [0, 0, -45] : 0,
              transition: {
                duration: 0.2,
                ease: 'easeOut',
              },
            }}
            style={{
              height: '1px',
              width: '1rem',
            }}
            className='absolute top-1/2 left-0 bg-zinc-500'
          ></motion.div>
        </div>
        <ImAccessibility color='#fff' size={18} />

        <motion.a
          href='shopping'
          animate={{
            opacity: isOpen ? 0 : 1,
            transition: {
              duration: 0.2,
              ease: 'easeInOut',
            },
          }}
        >
          <AiOutlineShopping color='#fff' size={20} />
        </motion.a>
      </motion.div>

      {/* Md >= */}
      <motion.nav
        animate={searchAnim}
        variants={navVariants}
        className='hidden relative md:flex justify-evenly items-center h-10 md:px-8 lg:px-32 bg-black text-white text-xs'
      >
        {navLinks.map((l) => {
          return (
            <motion.a
              onClick={() => {
                return l.title === 'Search' ? handleSearchModal() : null;
              }}
              key={l.title}
              variants={linkVariants}
              className='opacity-80 hover:opacity-100 cursor-pointer'
              href={`${l.title === 'Search' ? '#' : l.title.toLowerCase()}`}
            >
              {l.icon ?? l.title}
            </motion.a>
          );
        })}

        <Modal isOpen={isSearch} onClose={handleSearchModal} />
      </motion.nav>
    </>
  );
};
