/* eslint-disable jsx-a11y/anchor-is-valid */

export const InfoSection = () => {
  return (
    <section className='h-[300vh] xl:h-min'>
      <div className='flex flex-col items-center px-8 xs:px-10 lg:px-32 xl:px-60 xl:pb-8 transform -translate-y-[5%] xxs:-translate-y-[20%] xs:-translate-y-[25%] s:-translate-y-[45%] md:-translate-y-[40%] lg:-translate-y-[40%] xl:-translate-y-0 text-3xl font-bold text-center'>
        <p className='w-11/12 xs:w-10/12 xl:w-8/12'>
          <strong className='text-purple-600 opacity-95'>
            Best collection{' '}
          </strong>
          of videos &#8213; Pariatur ipsam, Veritatis esse, and Quisipa harum.
        </p>

        <p className='w-10/12 xs:w-8/12 xl:w-5/12 my-12'>
          <strong className='text-red-600 opacity-95'>200+ videos </strong>
          minima sint rem vitae.
        </p>

        <p className='w-9/12 xs:w-8/12 md:w-7/12 xl:w-4/12'>
          <strong className='text-orange-600 opacity-95'>
            One subscription.{' '}
          </strong>
          Alias officiis. Expedita totam sint qunt.
        </p>

        <p className='w-8/12 xs:w-7/12 md:w-5/12 xl:w-3/12 my-12'>
          <strong className='text-green-600 opacity-95'>
            Share with family{' '}
          </strong>
          veniam facere vero.
        </p>

        <div className='flex flex-col lg:flex-row w-11/12 xs:w-10/12 xl:w-8/12'>
          <div className='flex flex-col items-center xl:mr-4 text-lg text-center'>
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
              className='px-6 py-3 mt-2 bg-blue-600 hover:opacity-80 text-sm font-bold text-white rounded-full'
            >
              Try it free
            </a>
          </div>

          <div className='flex flex-col items-center mt-12 lg:mt-0 text-lg text-center'>
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
              className='px-6 py-3 mt-2 bg-blue-600 hover:opacity-80 text-sm font-bold text-white rounded-full'
            >
              Try Superscriber*
            </a>
          </div>
        </div>

        <div className='flex flex-col items-center w-11/12 xl:w-8/12 mt-12 text-lg text-center'>
          <h2 className='text-3xl'>Illum accusamus quasi odio!</h2>

          <p className='mt-4 font-medium tracking-tight'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui
            esse autem quasi harum &#8213; non natus maxime veritatis architecto
            explicabo adipisci doloremque quam eaque quo mollitia totam.
          </p>
        </div>
      </div>
    </section>
  );
};
