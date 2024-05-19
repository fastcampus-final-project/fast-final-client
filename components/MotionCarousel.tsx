/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

'use client';
import { motion, useMotionValue } from 'framer-motion';
import { HTMLAttributes, useRef, SetStateAction, useState, useEffect, useCallback } from 'react';
import FlexBox from '@/components/ui/FlexBox';
import { cn } from '@/utils/twMerge';
import { useIsMounted } from '@/hooks/useIsMounted';
import { debounce } from '@/utils/debounce';

type MotionCarouselProps = {
  children: Array<React.ReactNode>;
  showDots?: boolean;
  moveGap?: number;
} & HTMLAttributes<HTMLDivElement>;

const DRAG_BUFFER = 10;

const MotionCarousel = ({
  children,
  moveGap,
  showDots = true,
  className,
  ...props
}: MotionCarouselProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [childrenElementWidth, setChildrenElementWidth] = useState(0);
  const [documentSize, setDocumentSize] = useState(0);
  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);
  const newChildrenArr = [...children];
  const isMounted = useIsMounted();
  const containerBoxWidth = ref.current ? childrenElementWidth * children.length : 0;
  const gapSize = ref.current
    ? (ref.current?.scrollWidth - containerBoxWidth) / (children.length - 1)
    : 0;
  const moveTranslateX = childrenElementWidth + gapSize - (moveGap || 0);

  const handleResize = debounce(
    useCallback(() => {
      const documentWidth = document.documentElement.clientWidth;
      setDocumentSize(documentWidth);
    }, []),
    300
  );

  useEffect(() => {
    if (isMounted()) {
      window.addEventListener('resize', handleResize);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted, handleResize]);

  useEffect(() => {
    if (ref.current) {
      setChildrenElementWidth(ref.current.children[0].clientWidth);
    }
  }, [children.length, documentSize]);

  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && index < children.length - 1) {
      setIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={cn('relative overflow-hidden', className)} {...props}>
      <motion.div
        ref={ref}
        drag='x'
        dragConstraints={{
          left: 0,
          right: 0
        }}
        animate={{
          translateX: `-${index * moveTranslateX}px`
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        style={{
          x: dragX
        }}
        className='flex cursor-grab items-center gap-x-4 active:cursor-grabbing'
      >
        {children}
      </motion.div>
      {showDots && <Dots index={index} setIndex={setIndex} newChildrenArr={newChildrenArr} />}
    </div>
  );
};
export default MotionCarousel;

type DotsProps = {
  index: number;
  setIndex: React.Dispatch<SetStateAction<number>>;
  newChildrenArr: Array<React.ReactNode>;
};

const Dots = ({ index, setIndex, newChildrenArr }: DotsProps) => {
  return (
    <FlexBox alignItems='center' justifyContent='center' className='my-[1.6rem] w-full'>
      {newChildrenArr.map((item, idx) => {
        const currentDotClass = idx === index ? 'w-[1.8rem] bg-black' : 'w-[0.8rem] bg-gray-300';
        return (
          <span
            key={item + `${idx}`}
            className={`${currentDotClass} me-3 flex h-[0.8rem] cursor-pointer rounded-full transition-all duration-100 ease-in`}
            onClick={() => setIndex(idx)}
          ></span>
        );
      })}
    </FlexBox>
  );
};