import { ComponentPropsWithoutRef, MouseEvent } from 'react';
import { MotionValue } from 'framer-motion';

export const SCROLL_LIMIT = 0.411;

export interface RectBounds {
  originTop: number;
  originLeft: number;
  top: number;
  left: number;
}

export interface Origins {
  diff: number;
  margin: number;
}

export interface VidProps extends ComponentPropsWithoutRef<'div'> {
  cb: (e: MouseEvent<HTMLVideoElement>) => void;
  scroll: MotionValue<number>;
}
