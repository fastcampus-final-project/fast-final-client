'use client';
import React, { useState } from 'react';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/CheckBox';
import Switch from '@/components/ui/Switch';

const BudgetCalendarPage = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleCheckboxChange1 = (checked: boolean) => {
    setIsChecked1(checked);
  };

  const handleCheckboxChange2 = (checked: boolean) => {
    setIsChecked2(checked);
  };

  const handleToggle3 = () => {
    setIsChecked3(!isChecked3);
  };

  return (
    <div>
      <p>가계부</p>
      <Input placeholder='Enter text...' />
      <Input placeholder='Enter text...' borderType='bottom' action='error' />
      <Checkbox id='1' checked={isChecked1} onChange={handleCheckboxChange1} onImage='greenImage'>
        <p>체크박스 레이블</p>
      </Checkbox>
      <Checkbox
        id='2'
        checked={isChecked2}
        onChange={handleCheckboxChange2}
        size='md'
        childrenPosition='left'
        offImage='none'
      >
        체크박스 레이블
      </Checkbox>
      <Switch id='switch' checked={isChecked3} onChange={handleToggle3} />
    </div>
  );
};

export default BudgetCalendarPage;
