/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef, createRef, forwardRef, MouseEvent } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { ImAccessibility } from 'react-icons/im';

import './hero.css';
import { VidProps } from '../../types';
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
// iphone masks
import ShadowLarge from '../../assets/masks/hero-iphone-shadow-large.png';
import ShadowMedium from '../../assets/masks/hero-iphone-shadow-medium.png';
import ShadowSmall from '../../assets/masks/hero-iphone-shadow-small.png';
import DeviceLarge from '../../assets/masks/hero-iphone-device-large.jpg';
import DeviceMedium from '../../assets/masks/hero-iphone-device-medium.jpg';
import DeviceSmall from '../../assets/masks/hero-iphone-device-small.jpg';
// ipad masks
import IPadShadowLarge from '../../assets/masks/hero-ipad-shadow-large.png';
import IPadShadowMedium from '../../assets/masks/hero-ipad-shadow-medium.png';
import IPadShadowSmall from '../../assets/masks/hero-ipad-shadow-small.png';
import IPadLarge from '../../assets/masks/hero-ipad-device-large.jpg';
import IPadMedium from '../../assets/masks/hero-ipad-device-medium.jpg';
import IPadSmall from '../../assets/masks/hero-ipad-device-small.jpg';
// media assets
import Stretch from '../../assets/images/side-stretch-medium.jpg';
import StretchLarge from '../../assets/images/side-stretch-large.jpg';
import PreStretch from '../../assets/images/pre-stretch-medium.jpg';
import PreStretchLarge from '../../assets/images/pre-stretch-large.jpg';
import Laptop from '../../assets/images/laptop-workout-medium.jpg';
import LaptopLarge from '../../assets/images/laptop-workout-medium.jpg';
import Beach from '../../assets/images/beach-stretch-medium.jpg';
import BeachLarge from '../../assets/images/beach-stretch-large.jpg';
import LegStretch from '../../assets/images/leg-stretch-medium.jpg';
import LegStretchLarge from '../../assets/images/leg-stretch-large.jpg';
import KneeStretch from '../../assets/images/knee-stretch-medium.jpg';
import KneeStretchLarge from '../../assets/images/knee-stretch-large.jpg';
import LegLift from '../../assets/images/leg-lift-medium.jpg';
import LegLiftLarge from '../../assets/images/leg-lift-large.jpg';
import ArmRaise from '../../assets/images/arm-raise-medium.jpg';
import ArmRaiseLarge from '../../assets/images/arm-raise-large.jpg';
import Warrior from '../../assets/images/warrior-pose-medium.jpg';
import WarriorLarge from '../../assets/images/warrior-pose-large.jpg';
import FitnessMedium from '../../assets/images/fitness-class-medium.jpg';
import FitnessLarge from '../../assets/images/fitness-class-large.jpg';
import FitnessVideo from '../../assets/videos/fitness-class.mp4';

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
                '-top-[8.5rem] -ml-[19.5rem] md:-top-[6.5rem] md:-ml-[25rem] lg:-top-[4rem] lg:-ml-[29.5rem] xl:hidden'
              }
              medium={Stretch}
              large={StretchLarge}
              translateX={animateXLeft(position) * 0.052}
              translateY={animateYUp(position)}
            />
            <IpadDevice
              classNames={
                '-top-[8.5rem] ml-3 md:-top-[6.5rem] md:ml-24 lg:-top-[4rem] lg:ml-[4.5rem] xl:hidden'
              }
              medium={PreStretch}
              large={PreStretchLarge}
              translateX={animateXRight(position) * 0.025}
              translateY={animateYUp(position)}
            />

            {/* Top Iphone Row */}
            <IphoneDevice
              classNames={
                'top-20 -ml-[27.5rem] md:top-[12.5rem] md:-ml-[34rem] lg:top-[19rem] lg:-ml-[44.25rem] xl:top-[1.5rem] xl:-ml-[55rem]'
              }
              medium={Laptop}
              large={LaptopLarge}
              translateX={animateXLeft(position) * 0.05}
              translateY={animateYUp(position)}
            />
            <IphoneDevice
              classNames={
                'top-20 -ml-[12.5rem] md:top-[12.5rem] md:-ml-[13.5rem] lg:top-[19rem] lg:-ml-[17.5rem] xl:top-[1.5rem] xl:-ml-[22rem]'
              }
              medium={Beach}
              large={BeachLarge}
              translateX={0}
              translateY={animateYUp(position)}
            />
            <IphoneDevice
              classNames={
                'top-20 ml-[2.5rem] md:top-[12.5rem] md:ml-[7rem] lg:top-[19rem] lg:ml-[9.25rem] xl:top-[1.5rem] xl:ml-44'
              }
              medium={KneeStretch}
              large={KneeStretchLarge}
              translateX={animateXRight(position) * 0.05}
              translateY={animateYUp(position)}
            />

            {/* Bottom Iphone Row */}
            <IphoneDevice
              classNames={
                'top-52 -ml-[24.5rem] md:top-[24rem] md:-ml-[35.5rem] lg:top-[34rem] lg:-ml-[46rem] xl:top-[19rem] xl:-ml-[61rem]'
              }
              medium={LegStretch}
              large={LegStretchLarge}
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
                'top-52 ml-[5.75rem] md:top-[24rem] md:ml-[16rem] lg:top-[34rem] lg:ml-[21rem] xl:top-[19rem] xl:ml-[25rem]'
              }
              medium={LegLift}
              large={LegLiftLarge}
              translateX={animateXRight(position)}
              translateY={0}
            />

            {/* Bottom Ipad Row */}
            <IpadDevice
              classNames={
                'top-[22.5rem] -ml-[19.5rem] md:top-[39rem] md:-ml-[25rem] lg:top-[51.5rem] lg:-ml-[29.5rem] xl:top-[45rem] xl:-ml-[46rem]'
              }
              medium={ArmRaise}
              large={ArmRaiseLarge}
              translateX={animateXLeft(position) * 0.025}
              translateY={animateYDown(position) * 0.8}
            />
            <IpadDevice
              classNames={
                'top-[22.5rem] ml-3 md:top-[39rem] md:ml-24 lg:top-[51.5rem] lg:ml-[4.5rem] xl:top-[45rem] xl:ml-44'
              }
              medium={Warrior}
              large={WarriorLarge}
              translateX={animateXRight(position) * 0.025}
              translateY={animateYDown(position) * 0.8}
            />
          </div>
        </div>
      </div>

      {/* "Calling all" Heading */}
      <div className='absolute top-1/3 left-0 w-full flex flex-col items-center justify-center px-8 text-white z-20 overflow-hidden'>
        <h1 className='flex items-center mb-1'>
          <ImAccessibility size={18} color='#fff' />
          <span className='text-lg font-medium ml-2'>Company</span>
        </h1>
        <h2 className='text-5xl lg:text-4xl font-bold text-center'>
          Calling all <span>yogis</span>
        </h2>
        <a
          href='#'
          className='px-8 py-4 mt-4 bg-blue-600 hover:opacity-80 text-sm font-bold rounded-full'
        >
          Try it free
        </a>
      </div>
      {/* 1280+ vid */}
      <div className='hidden 2xl:block min-h-screen z-40 mb-32'>
        <video
          onClick={handleVideoPlayback}
          poster={FitnessLarge}
          controls={false}
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={FitnessVideo} type='video/mp4' />
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
        className='phone-size absolute top-52 -ml-[9.4rem] md:top-[24rem] md:-ml-[9.7rem] lg:top-[34rem] lg:-ml-[12.5rem] xl:top-[19rem] xl:-ml-72 z-10'
      >
        <picture
          style={{ width: '122%' }}
          className='absolute top-0 left-0 z-[9]'
        >
          <source
            media='(min-width: 1024px)'
            srcSet={ShadowLarge}
            type='image/png'
          />
          <source
            media='(min-width: 768px)'
            srcSet={ShadowMedium}
            type='image/png'
          />
          <source
            media='(min-width: 0px)'
            srcSet={ShadowSmall}
            type='image/png'
          />

          <img src={ShadowLarge} alt='shadow' />
        </picture>

        <picture className='phone-device-mask absolute top-0 left-0 z-[8]'>
          <source
            media='(min-width: 1024px)'
            srcSet={DeviceLarge}
            type='image/jpg'
          />
          <source
            media='(min-width: 768px)'
            srcSet={DeviceMedium}
            type='image/jpg'
          />
          <source
            media='(min-width: 0px)'
            srcSet={DeviceSmall}
            type='image/jpg'
          />

          <img src={DeviceLarge} alt='iphone' />
        </picture>

        <div className='z-10 relative'>
          <video
            className='phone-img-mask relative z-10'
            onClick={cb}
            poster={FitnessLarge}
            controls={false}
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={FitnessVideo} type='video/mp4' />
          </video>

          <picture className='phone-img-mask absolute top-0 left-0'>
            <source
              media='(min-width: 768px)'
              srcSet={FitnessMedium}
              type='image/jpg'
            />
            <source
              media='(min-width: 0px)'
              srcSet={FitnessLarge}
              type='image/jpg'
            />

            <img className='phone-img-mask' src={FitnessLarge} alt='iphone' />
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
      className={`phone-size absolute z-0 ${classNames}`}
    >
      <picture
        style={{ width: '122%' }}
        className='absolute top-0 left-0 z-[9]'
      >
        <source
          media='(min-width: 1024px)'
          srcSet={ShadowLarge}
          type='image/png'
        />
        <source
          media='(min-width: 768px)'
          srcSet={ShadowMedium}
          type='image/png'
        />
        <source
          media='(min-width: 0px)'
          srcSet={ShadowSmall}
          type='image/png'
        />

        <img src={ShadowLarge} alt='shadow' />
      </picture>

      <picture className='phone-device-mask absolute top-0 left-0 z-[8]'>
        <source
          media='(min-width: 1024px)'
          srcSet={DeviceLarge}
          type='image/jpg'
        />
        <source
          media='(min-width: 768px)'
          srcSet={DeviceMedium}
          type='image/jpg'
        />
        <source
          media='(min-width: 0px)'
          srcSet={DeviceSmall}
          type='image/jpg'
        />

        <img src={DeviceLarge} alt='iphone' />
      </picture>

      <div className='relative z-10'>
        <picture className='phone-img-mask object-cover'>
          <source media='(min-width: 768px)' srcSet={medium} type='image/jpg' />
          <source media='(min-width: 0px)' srcSet={large} type='image/jpg' />

          <img className='phone-img-mask' src={large} alt='iphone' />
        </picture>
      </div>
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
      className={`phone-size absolute z-0 ${classNames}`}
    >
      <picture style={{ width: '118%' }} className='absolute top-0 left-0'>
        <source
          media='(min-width: 1024px)'
          srcSet={IPadShadowLarge}
          type='image/png'
        />
        <source
          media='(min-width: 768px)'
          srcSet={IPadShadowMedium}
          type='image/png'
        />
        <source
          media='(min-width: 0px)'
          srcSet={IPadShadowSmall}
          type='image/png'
        />

        <img src={IPadShadowLarge} alt='shadow' />
      </picture>

      <picture className='tablet-device-mask absolute top-0 left-0'>
        <source
          media='(min-width: 1024px)'
          srcSet={IPadLarge}
          type='image/jpg'
        />
        <source
          media='(min-width: 768px)'
          srcSet={IPadMedium}
          type='image/jpg'
        />
        <source media='(min-width: 0px)' srcSet={IPadSmall} type='image/jpg' />

        <img src={IPadLarge} alt='phone' />
      </picture>

      <picture className='tablet-img-mask relative z-10'>
        <source media='(min-width: 768px)' srcSet={medium} type='image/jpg' />
        <source media='(min-width: 0px)' srcSet={large} type='image/jpg' />

        <img className='tablet-img-mask' src={large} alt='' />
      </picture>
    </motion.div>
  );
};
