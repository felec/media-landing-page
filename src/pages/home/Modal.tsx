/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState, ChangeEvent } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

import { NavLink } from './Navbar';

const modalVariants = {
  close: {
    opacity: 0,
  },
  open: {
    opacity: 0.5,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      when: 'beforeChildren',
    },
  },
};

const searchVariants = {
  hidden: {
    opacity: 0,
    translateX: '10%',
  },
  visible: {
    opacity: 1,
    translateX: '0%',
    transition: {
      delay: 0.9,
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const dropdownVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      ease: 'easeOut',
      staggerChildren: 0.03,
      when: 'beforeChildren',
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, translateX: '20%' },
  visible: {
    opacity: 1,
    translateX: '0%',
    transition: {
      ease: 'easeOut',
    },
  },
};

const mobileMenuVariants = {
  close: {
    translateY: '-98vh',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  open: {
    translateY: '0%',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

const mobileTopVariants = {
  unfocus: {
    translateY: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  focus: {
    translateY: -35,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};

const mobileBottomVariants: Variants = {
  unfocus: {
    visibility: 'visible',
    translateY: 0,
    opacity: [0, 1, 1],
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  focus: {
    translateY: 25,
    opacity: [1, 1, 0],
    transitionEnd: {
      visibility: 'hidden',
    },
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

const mobileLinksVariants: Variants = {
  unfocus: {
    translateY: 0,
    opacity: [1, 0, 0],
    transitionEnd: {
      visibility: 'hidden',
    },
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  focus: {
    visibility: 'visible',
    translateY: 60,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const mobileSearchVariants = {
  unfocus: {
    width: '90%',
    transition: {
      delay: 0.01,
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  focus: {
    width: '70%',
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};

const mobileCancelVariants = {
  unfocus: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  focus: {
    opacity: 1,
    transition: {
      delay: 0.01,
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};

const searchLinks = ['Ariatur', 'Soluta FAQ', 'Quas', 'Magnam', 'Ipsum'];

export const Modal = ({
  cb,
  links,
  isOpen,
  onClose,
}: {
  cb?: (v: boolean) => void;
  isOpen: boolean;
  links?: NavLink[];
  onClose?: () => void;
}) => {
  const [search, setSearch] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const anim = useAnimation();

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchFocus = () => {
    setIsFocus(true);
    cb?.(true);
  };
  const handleSearchUnfocus = () => {
    setIsFocus(false);
    cb?.(false);
  };

  useEffect(() => {
    if (isFocus) {
      anim.start('focus');
    } else {
      anim.start('unfocus');
    }

    //eslint-disable-next-line
  }, [isFocus]);

  return ReactDOM.createPortal(
    <>
      {/* Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial='close'
            animate='open'
            exit='close'
            variants={mobileMenuVariants}
            style={{ height: '125vh', width: '100vw' }}
            className='md:hidden absolute -top-28 left-0 flex flex-col items-center py-4 bg-black z-20 overflow-hidden'
          >
            <motion.div
              initial='unfocus'
              animate={anim}
              variants={mobileTopVariants}
              className='relative pt-36 w-full bg-black z-10'
            >
              <motion.div
                variants={mobileSearchVariants}
                className='relative ml-4 h-9 flex items-center px-1 bg-zinc-800 rounded-md'
              >
                <div>
                  <AiOutlineSearch color='#6B7280' size={20} />
                </div>

                <form className='w-full'>
                  <input
                    onChange={handleSearchInput}
                    onFocus={handleSearchFocus}
                    value={search}
                    className='w-full ml-1 bg-transparent placeholder-zinc-500 text-white focus:outline-none'
                    placeholder='Search website.com'
                    type='text'
                  />
                </form>

                <motion.button
                  onClick={handleSearchUnfocus}
                  variants={mobileCancelVariants}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  className='absolute top-2 -right-1/4 text-blue-500'
                >
                  Cancel
                </motion.button>
              </motion.div>

              <div
                style={{ height: '1px' }}
                className='w-full my-4 bg-zinc-700'
              ></div>
            </motion.div>

            <motion.div
              initial='unfocus'
              animate={anim}
              variants={mobileLinksVariants}
              className='absolute top-36 left-10 w-full flex flex-col'
            >
              <h3 className='text-xs mb-4 text-gray-400 uppercase'>
                Quick Links
              </h3>

              {searchLinks.map((l) => {
                return (
                  <div key={l}>
                    <a className='py-1 text-white' href='#'>
                      {l}
                    </a>
                    {l !== 'Ipsum' && (
                      <div
                        style={{
                          height: '1px',
                          width: '75%',
                        }}
                        className='bg-zinc-700 my-2.5'
                      ></div>
                    )}
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={false}
              animate={anim}
              variants={mobileBottomVariants}
              className='w-full self-start mx-10 flex flex-col'
            >
              {links?.map((l) => {
                return l.icon ? null : (
                  <div key={l.title}>
                    <a
                      className='opacity-80 text-white cursor-pointer'
                      href={`${l.title.toLowerCase()}`}
                    >
                      {l.title}
                    </a>
                    {l.title !== 'Beatae' && (
                      <div
                        style={{
                          height: '1px',
                          width: '75%',
                        }}
                        className='bg-zinc-700 my-2.5'
                      ></div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Md >= */}
      {isOpen && (
        <motion.div
          initial='close'
          animate='open'
          variants={modalVariants}
          onClick={onClose}
          className='hidden md:block absolute top-0 left-0 h-screen w-full bg-black z-20'
        ></motion.div>
      )}

      {isOpen && (
        <div
          onClick={onClose}
          className='hidden md:flex absolute top-0 left-0 w-full justify-center z-20'
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial='hidden'
            animate='visible'
            className='relative h-8 w-1/2 bg-transparent'
          >
            <motion.div
              variants={searchVariants}
              className='flex items-center pl-2 mt-1 rounded-md'
            >
              <AiOutlineSearch color='#6B7280' size={20} />
              <form
                onSubmit={(e) => e.preventDefault()}
                className='w-full ml-2 text-white'
              >
                <input
                  onChange={handleSearchInput}
                  value={search}
                  maxLength={40}
                  autoFocus={true}
                  className='w-full bg-transparent placeholder-zinc-500 focus:outline-none'
                  placeholder='Search company.com'
                  type='text'
                />
              </form>

              <AiOutlineClose
                onClick={onClose}
                className='justify-end opacity-40 cursor-pointer'
                color='#6B7280'
                size={20}
              />
            </motion.div>

            <motion.div
              variants={dropdownVariants}
              className='absolute top-9 left-0 h-60 w-full flex flex-col py-4 bg-white rounded-b-2xl overflow-hidden'
            >
              <h3 className='text-sm font-thin ml-16 mb-2 text-gray-500 uppercase'>
                Quick Links
              </h3>

              {searchLinks.map((l) => {
                return (
                  <motion.a
                    key={l}
                    variants={linkVariants}
                    className='pl-16 py-1 hover:bg-gray-100 hover:text-blue-600'
                    href='#'
                  >
                    {l}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      )}
    </>,
    document.getElementById('portal')!
  );
};
