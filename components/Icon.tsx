import React, { forwardRef, HtmlHTMLAttributes } from 'react';
import Image from 'next/image';
import { cn } from '@/utils/twMerge';

type IconProps = {
  src: string;
  alt: string;
  size: '12' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '48' | '52' | '56';
  imgClass?: string;
} & HtmlHTMLAttributes<HTMLDivElement>;

/**
 * @src 이미지 주소
 * @alt 이미지 대체 테스트
 * @size 이미지 사이즈 16~48
 * @imgClass Image태그에 들어갈 className
 */
const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ src, alt, size = '24', imgClass, className, ...props }, ref) => {
    const sizeClass: { [key: string]: string } = {
      '12': 'w-[1.2rem] h-[1.2rem]',
      '16': 'w-[1.6rem] h-[1.6rem]',
      '20': 'w-[2rem] h-[2rem]',
      '24': 'w-[2.4rem] h-[2.4rem]',
      '28': 'w-[2.8rem] h-[2.8rem]',
      '32': 'w-[3.2rem] h-[3.2rem]',
      '36': 'w-[3.6rem] h-[3.6rem]',
      '40': 'w-[4rem] h-[4rem]',
      '48': 'w-[4.8rem] h-[4.8rem]',
      '52': 'w-[5.2rem] h-[5.2rem]',
      '56': 'w-[5.6rem] h-[5.6rem]'
    };

    return (
      <div className={cn(`${sizeClass[size]} relative`, className)} {...props} ref={ref}>
        <Image src={src} alt={alt} fill sizes='auto' className={imgClass} />
      </div>
    );
  }
);

Icon.displayName = 'Icon';
export default Icon;
