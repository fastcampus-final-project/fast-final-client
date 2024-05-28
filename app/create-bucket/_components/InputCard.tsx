import React from 'react';
import { Card } from '@/components/ui/card';

const InputCard = ({ children }: { children: React.ReactNode }) => (
  <Card className='flex h-[7.6rem] items-center px-20 py-16'>{children}</Card>
);
export default InputCard;