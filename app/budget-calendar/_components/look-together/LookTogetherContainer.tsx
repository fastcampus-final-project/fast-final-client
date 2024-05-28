import React, { useState } from 'react';
import Line from '../common/Line';
import Title from '../common/Title';
import SharedCalendar from './SharedCalendar';
import SharedMembers from './SharedMembers';
import ConsumptionWeather from './ConsumptionWeather';

const LookTogetherContainer: React.FC<{ viewMode: string }> = ({ viewMode }) => {
  // 함께봐요
  const [selectedProfile, setSelectedProfile] = useState('나');

  return (
    <>
      {/* 공유한 멤버 */}
      <SharedMembers
        viewMode={viewMode}
        selectedProfile={selectedProfile}
        setSelectedProfile={setSelectedProfile}
      />
      {/* 공유 가계부 캘린더 */}
      <SharedCalendar selectedProfile={selectedProfile} />
      <Line />
      {/* 소비 날씨 */}
      <ConsumptionWeather selectedProfile={selectedProfile} />
      <Line />
      {/* 쓰고 후회한 돈 */}
      <div className='px-20 py-32 text-14'>
        <Title title='쓰고 후회한 돈' />
        <div className='text-center'>
          <div className='mb-40 h-[15.9rem] w-[16rem] text-[16rem]'></div>
          <div className='mb-16'>
            <h4 className='mb-4 text-18 font-700'>최신형 맥북</h4>
            <p>만큼 아낄 수 있었어요</p>
          </div>
          <p className='text-12 text-gray-500'>총 1,000,000원</p>
        </div>
      </div>
    </>
  );
};

export default LookTogetherContainer;
