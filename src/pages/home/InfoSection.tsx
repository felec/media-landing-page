/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from 'framer-motion';

const subSectionVariants = {
  hidden: {
    translateY: -20,
    opacity: 0,
    transition: {
      ease: 'easeOut',
    },
  },
  visible: {
    translateY: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
    },
  },
};

export const InfoSection = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      className='flex justify-center h-[300vh]'
    >
      <div className='flex flex-col justify-evenly items-center h-full md:h-3/6 lg:h-2/6 xl:h-3/6 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 px-4 py-16 md:py-0 text-3xl font-bold text-center'>
        <motion.p variants={subSectionVariants}>
          <strong className='text-purple-600 opacity-95'>
            Best collection{' '}
          </strong>
          of videos &#8213; Pariatur ipsam, Veritatis esse, and Quisipa harum.
        </motion.p>

        <p>
          <strong className='text-red-600 opacity-95'>200+ videos </strong>
          minima sint rem vitae.
        </p>

        <p>
          <strong className='text-orange-600 opacity-95'>
            One subscription.{' '}
          </strong>
          Alias officiis. Expedita totam sint qunt.
        </p>

        <p>
          <strong className='text-green-600 opacity-95'>
            Share with family{' '}
          </strong>
          veniam facere vero.
        </p>

        <div className='w-10/12 flex flex-col items-center text-lg text-center'>
          <h2>
            <span>Free 1-month trial</span>
            <br />
            <span className='text-3xl'>$4.99/mo.</span>
          </h2>

          <p className='mt-4 text-gray-500 font-medium tracking-tight'>
            After the free trial, get unlimited access to 200+ videos for the
            price of one premium video each month.
          </p>

          <a
            href='#'
            className='px-6 py-3 mt-2 bg-blue-600 text-sm text-white rounded-full'
          >
            Try it free
          </a>
        </div>

        <div className='w-10/12 flex flex-col items-center text-lg text-center'>
          <h2>
            <span>Free 1-month trial</span>
            <br />
            <span className='text-3xl'>Superscriber</span>
          </h2>

          <p className='mt-4 text-gray-500 font-medium tracking-tight'>
            Bundle premium videos with up to five other great services for one
            low monthly price. And enjoy more for less.{' '}
            <a href='#' className='text-blue-500 hover:underline ml-2'>
              Learn More &#8250;
            </a>
          </p>

          <a
            href='#'
            className='px-6 py-3 mt-2 bg-blue-600 text-sm text-white rounded-full'
          >
            Try Superscriber*
          </a>
        </div>

        <div className='w-10/12 flex flex-col items-center text-lg text-center'>
          <h2 className='text-3xl'>Illum accusamus quasi odio!</h2>

          <p className='mt-4 font-medium tracking-tight'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui
            esse autem quasi harum &#8213; non natus maxime veritatis architecto
            explicabo adipisci doloremque quam eaque quo mollitia totam.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
