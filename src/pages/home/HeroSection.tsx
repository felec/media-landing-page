import { useRef, createRef, forwardRef, MouseEvent } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import './hero.css';
import { VidProps } from '../../interfaces';
import { useScreenSize } from '../../hooks/useScreenSize';
import { usePositionOnScroll } from '../../hooks/usePositionOnScroll';
import {
  animateXLeft,
  animateXRight,
  animateYUp,
  animateYDown,
  animateLargeVideo,
  animateMobileVideo,
} from '../../utils/animations';

export const HeroSection = () => {
  const ref = createRef<HTMLDivElement>();
  const { scrollYProgress } = useViewportScroll();
  const { position } = usePositionOnScroll(ref, scrollYProgress);

  const handleVideoPlayback = (e: MouseEvent<HTMLVideoElement>) => {
    const vid = e.currentTarget;

    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  };

  return (
    <section>
      <div
        style={{ height: '300vh', width: '100%' }}
        className='relative z-0 pb-4 2xl:hidden'
      >
        <div className='sticky top-0 left-0 h-[140vh] overflow-hidden'>
          <div className='absolute h-full w-full'>
            {/* Top Ipad Row */}
            <IpadDevice
              classNames={
                '-top-[8.5rem] -ml-[19.5rem] md:-top-[16.5rem] md:-ml-[25rem] lg:-top-[22rem] lg:-ml-[29.5rem] xl:hidden'
              }
              medium={'/assets/images/side-stretch-medium.jpg'}
              large={'/assets/images/side-stretch-large.jpg'}
              translateX={animateXLeft(position) * 0.052}
              translateY={animateYUp(position)}
            />
            <IpadDevice
              classNames={
                '-top-[8.5rem] ml-2 md:-top-[16.5rem] md:ml-24 lg:-top-[22rem] lg:ml-[4.5rem] xl:hidden'
              }
              medium={'/assets/images/pre-stretch-medium.jpg'}
              large={'/assets/images/pre-stretch-large.jpg'}
              translateX={animateXRight(position) * 0.025}
              translateY={animateYUp(position)}
            />

            {/* Top Iphone Row */}
            <IphoneDevice
              classNames={
                'top-20 -ml-[27.5rem] md:top-[3rem] md:-ml-[34.5rem] lg:top-[0.5rem] lg:-ml-[45rem] xl:-top-[6rem] xl:-ml-[55rem]'
              }
              medium={'/assets/images/laptop-workout-medium.jpg'}
              large={'/assets/images/laptop-workout-large.jpg'}
              translateX={animateXLeft(position) * 0.05}
              translateY={animateYUp(position)}
            />
            <IphoneDevice
              classNames={
                'top-20 -ml-[12.5rem] md:top-[3rem] md:-ml-[13.5rem] lg:top-[0.5rem] lg:-ml-[17.5rem] xl:-top-[6rem] xl:-ml-[21rem]'
              }
              medium={'/assets/images/beach-stretch-medium.jpg'}
              large={'/assets/images/beach-stretch-large.jpg'}
              translateX={0}
              translateY={animateYUp(position)}
            />
            <IphoneDevice
              classNames={
                'top-20 ml-[2.5rem] md:top-[3rem] md:ml-[7.5rem] lg:top-[0.5rem] lg:ml-[10rem] xl:-top-[6rem] xl:ml-52'
              }
              medium={'/assets/images/knee-stretch-medium.jpg'}
              large={'/assets/images/knee-stretch-large.jpg'}
              translateX={animateXRight(position) * 0.05}
              translateY={animateYUp(position)}
            />

            {/* Bottom Iphone Row */}
            <IphoneDevice
              classNames={
                'top-52 -ml-[24.25rem] md:top-[24rem] md:-ml-[35rem] lg:top-[34rem] lg:-ml-[46.5rem] xl:top-[19rem] xl:-ml-[61rem]'
              }
              medium={'/assets/images/leg-stretch-medium.jpg'}
              large={'/assets/images/leg-stretch-large.jpg'}
              translateX={animateXLeft(position)}
              translateY={0}
            />
            <VideoDevice
              ref={ref}
              cb={handleVideoPlayback}
              scroll={scrollYProgress}
            />
            <IphoneDevice
              classNames={
                'top-52 ml-[5.5rem] md:top-[24rem] md:ml-[15.5rem] lg:top-[34rem] lg:ml-[21.5rem] xl:top-[19rem] xl:ml-[25rem]'
              }
              medium={'/assets/images/leg-lift-medium.jpg'}
              large={'/assets/images/leg-lift-large.jpg'}
              translateX={animateXRight(position)}
              translateY={0}
            />

            {/* Bottom Ipad Row */}
            <IpadDevice
              classNames={
                'top-[22.5rem] -ml-[19.5rem] md:top-[46.5rem] md:-ml-[25rem] lg:top-[66rem] lg:-ml-[29.5rem] xl:top-[51.5rem] xl:-ml-[46rem]'
              }
              medium={'/assets/images/arm-raise-medium.jpg'}
              large={'/assets/images/arm-raise-large.jpg'}
              translateX={animateXLeft(position) * 0.025}
              translateY={animateYDown(position) * 0.8}
            />
            <IpadDevice
              classNames={
                'top-[22.5rem] ml-2 md:top-[46.5rem] md:ml-24 lg:top-[66rem] lg:ml-[4.5rem] xl:top-[51.5rem] xl:ml-52'
              }
              medium={'/assets/images/warrior-pose-medium.jpg'}
              large={'/assets/images/warrior-pose-large.jpg'}
              translateX={animateXRight(position) * 0.025}
              translateY={animateYDown(position) * 0.8}
            />
          </div>
        </div>
      </div>

      <div className='hidden 2xl:block min-h-screen'>
        <video
          onClick={handleVideoPlayback}
          // autoPlay
          muted
          loop
        >
          <source src='/assets/videos/fitness-class.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  );
};

const VideoDevice = forwardRef<HTMLDivElement, VidProps>(
  ({ scroll, cb }, ref) => {
    const { size } = useScreenSize();
    const fn = size < 768 ? animateMobileVideo : animateLargeVideo;
    const scale = useTransform(scroll, fn);

    return (
      <motion.div
        ref={ref}
        style={{ left: '50%', scale }}
        className='phone-size absolute top-52 -ml-[9.4rem] md:top-[24rem] md:-ml-[9.7rem] lg:top-[34rem] lg:-ml-[12.5rem] xl:top-[19rem] xl:-ml-72 z-50'
      >
        <picture style={{ width: '122%' }} className='absolute top-0 left-0'>
          <source
            media='(min-width: 1024px)'
            srcSet='/assets/masks/hero-iphone-shadow-large.png'
            type='image/png'
          />
          <source
            media='(min-width: 768px)'
            srcSet='/assets/masks/hero-iphone-shadow-medium.png'
            type='image/png'
          />
          <source
            media='(min-width: 0px)'
            srcSet='/assets/masks/hero-iphone-shadow-small.png'
            type='image/png'
          />

          <img src='/assets/masks/hero-iphone-shadow-large.png' alt='shadow' />
        </picture>

        <picture className='phone-device-mask absolute top-0 left-0'>
          <source
            media='(min-width: 1024px)'
            srcSet='/assets/masks/hero-iphone-device-large.jpg'
            type='image/jpg'
          />
          <source
            media='(min-width: 768px)'
            srcSet='/assets/masks/hero-iphone-device-medium.jpg'
            type='image/jpg'
          />
          <source
            media='(min-width: 0px)'
            srcSet='/assets/masks/hero-iphone-device-small.jpg'
            type='image/jpg'
          />

          <img src='/assets/masks/hero-iphone-device-large.jpg' alt='phone' />
        </picture>

        <div className='z-10 relative'>
          <video
            className='phone-img-mask relative z-10'
            onClick={cb}
            // autoPlay
            muted
            loop
          >
            <source src='/assets/videos/fitness-class.mp4' type='video/mp4' />
          </video>

          <picture className='phone-img-mask absolute top-0 left-0'>
            <source
              media='(min-width: 768px)'
              srcSet={'/assets/images/fitness-class-medium.jpg'}
              type='image/jpg'
            />
            <source
              media='(min-width: 0px)'
              srcSet={'/assets/images/fitness-class-large.jpg'}
              type='image/jpg'
            />

            <img
              className='phone-img-mask'
              src={'/assets/images/fitness-class-large.jpg'}
              alt=''
            />
          </picture>
        </div>
      </motion.div>
    );
  }
);

const IphoneDevice = ({
  medium,
  large,
  classNames,
  translateX,
  translateY,
}: {
  medium: string;
  large: string;
  classNames: string;
  translateX: number;
  translateY: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { size } = useScreenSize();
  const scale = size < 768 ? 0.75 : 1;

  return (
    <motion.div
      ref={ref}
      style={{
        left: '50%',
        scale,
        translateX,
        translateY,
      }}
      className={`phone-size absolute ${classNames}`}
    >
      <picture style={{ width: '122%' }} className='absolute top-0 left-0'>
        <source
          media='(min-width: 1024px)'
          srcSet='/assets/masks/hero-iphone-shadow-large.png'
          type='image/png'
        />
        <source
          media='(min-width: 768px)'
          srcSet='/assets/masks/hero-iphone-shadow-medium.png'
          type='image/png'
        />
        <source
          media='(min-width: 0px)'
          srcSet='/assets/masks/hero-iphone-shadow-small.png'
          type='image/png'
        />

        <img src='/assets/masks/hero-iphone-shadow-large.png' alt='shadow' />
      </picture>

      <picture className='phone-device-mask absolute top-0 left-0'>
        <source
          media='(min-width: 1024px)'
          srcSet='/assets/masks/hero-iphone-device-large.jpg'
          type='image/jpg'
        />
        <source
          media='(min-width: 768px)'
          srcSet='/assets/masks/hero-iphone-device-medium.jpg'
          type='image/jpg'
        />
        <source
          media='(min-width: 0px)'
          srcSet='/assets/masks/hero-iphone-device-small.jpg'
          type='image/jpg'
        />

        <img src='/assets/masks/hero-iphone-device-large.jpg' alt='phone' />
      </picture>

      <picture className='phone-img-mask relative object-cover z-10'>
        <source media='(min-width: 768px)' srcSet={medium} type='image/jpg' />
        <source media='(min-width: 0px)' srcSet={large} type='image/jpg' />

        <img className='phone-img-mask' src={large} alt='' />
      </picture>
    </motion.div>
  );
};

const IpadDevice = ({
  medium,
  large,
  classNames,
  translateX,
  translateY,
}: {
  medium: string;
  large: string;
  classNames: string;
  translateX: number;
  translateY: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { size } = useScreenSize();

  const handleScale = () => {
    let scale = 1;

    if (size >= 768 && size < 1024) {
      scale = 1.5;
    } else if (size >= 1024 && size < 1280) {
      scale = 1.25;
    } else if (size >= 1280) {
      scale = 1.75;
    }

    return scale;
  };

  return (
    <motion.div
      ref={ref}
      style={{
        left: '50%',
        scale: handleScale(),
        translateX,
        translateY,
      }}
      className={`phone-size absolute ${classNames}`}
    >
      <picture style={{ width: '118%' }} className='absolute top-0 left-0'>
        <source
          media='(min-width: 1024px)'
          srcSet='/assets/masks/hero-ipad-shadow-large.png'
          type='image/png'
        />
        <source
          media='(min-width: 768px)'
          srcSet='/assets/masks/hero-ipad-shadow-medium.png'
          type='image/png'
        />
        <source
          media='(min-width: 0px)'
          srcSet='/assets/masks/hero-ipad-shadow-small.png'
          type='image/png'
        />

        <img src='/assets/masks/hero-ipad-shadow-large.png' alt='shadow' />
      </picture>

      <picture className='tablet-device-mask absolute top-0 left-0'>
        <source
          media='(min-width: 1024px)'
          srcSet='/assets/masks/hero-ipad-device-large.jpg'
          type='image/jpg'
        />
        <source
          media='(min-width: 768px)'
          srcSet='/assets/masks/hero-ipad-device-medium.jpg'
          type='image/jpg'
        />
        <source
          media='(min-width: 0px)'
          srcSet='/assets/masks/hero-ipad-device-small.jpg'
          type='image/jpg'
        />

        <img src='/assets/masks/hero-ipad-device-large.jpg' alt='phone' />
      </picture>

      <picture className='tablet-img-mask relative z-10'>
        <source media='(min-width: 768px)' srcSet={medium} type='image/jpg' />
        <source media='(min-width: 0px)' srcSet={large} type='image/jpg' />

        <img className='tablet-img-mask' src={large} alt='' />
      </picture>
    </motion.div>
  );
};
