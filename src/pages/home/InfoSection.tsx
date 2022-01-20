/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from 'framer-motion';

const subSectionVariants = {
  hidden: {
    translateY: 60,
    opacity: 0,
  },
  visible: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const InfoSection = () => {
  return (
    <section className='h-[300vh]'>
      <div className='flex flex-col items-center px-6 md:px-12 lg:px-32 xl:px-60 transform -translate-y-[5%] md:-translate-y-[15%] lg:-translate-y-[30%] xl:-translate-y-[15%] text-3xl font-bold text-center'>
        <motion.p
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.25 }}
          variants={subSectionVariants}
          className='md:w-9/12'
        >
          <strong className='text-purple-600 opacity-95'>
            Best collection{' '}
          </strong>
          of videos &#8213; Pariatur ipsam, Veritatis esse, and Quisipa harum.
        </motion.p>

        <motion.p
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.25 }}
          variants={subSectionVariants}
          className='md:w-9/12 my-12'
        >
          <strong className='text-red-600 opacity-95'>200+ videos </strong>
          minima sint rem vitae.
        </motion.p>

        <motion.p
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.25 }}
          variants={subSectionVariants}
          className='md:w-7/12'
        >
          <strong className='text-orange-600 opacity-95'>
            One subscription.{' '}
          </strong>
          Alias officiis. Expedita totam sint qunt.
        </motion.p>

        <motion.p
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.25 }}
          variants={subSectionVariants}
          className='md:w-5/12 my-12'
        >
          <strong className='text-green-600 opacity-95'>
            Share with family{' '}
          </strong>
          veniam facere vero.
        </motion.p>

        <div className='flex flex-col lg:flex-row md:w-11/12'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={subSectionVariants}
            viewport={{ once: true, amount: 0.25 }}
            className='flex flex-col items-center text-lg text-center'
          >
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
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={subSectionVariants}
            viewport={{ once: true, amount: 0.25 }}
            className='flex flex-col items-center mt-12 lg:mt-0 text-lg text-center'
          >
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
          </motion.div>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={subSectionVariants}
          viewport={{ once: true, amount: 0.25 }}
          className='w-11/12 flex flex-col items-center mt-12 text-lg text-center'
        >
          <h2 className='text-3xl'>Illum accusamus quasi odio!</h2>

          <p className='mt-4 font-medium tracking-tight'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui
            esse autem quasi harum &#8213; non natus maxime veritatis architecto
            explicabo adipisci doloremque quam eaque quo mollitia totam.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
