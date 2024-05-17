// 금융상품

import Text from '@/components/ui/Text';
import ProductCard from './_components/ProductCard';
import RecommendationCard from './_components/RecommendationCard';
import FinancialTransactionIcon from '@/components/icons/financial-product/FinancialTransactionIcon';
import DepositIcon from '@/components/icons/financial-product/DepositIcon';
import SubscriptionIcon from '@/components/icons/financial-product/SubscriptionIcon';
import CheckCardIcon from '@/components/icons/financial-product/CheckCardIcon';
import CreditLoanIcon from '@/components/icons/financial-product/CreditLoanIcon';
import EmergencyLoanIcon from '@/components/icons/financial-product/EmergencyLoanIcon';
import LeaseLoanIcon from '@/components/icons/financial-product/LeaseLoanIcon';
import FundIcon from '@/components/icons/financial-product/FundIcon';
import StockInvestmentIcon from '@/components/icons/financial-product/StockInvestmentIcon';
import ISAIcon from '@/components/icons/financial-product/ISAIcon';
import CreditCardIcon from '@/components/icons/financial-product/CreditCardIcon';

const recommendationArray = [
  {
    title: '테마별 추천',
    subTitle: '뚜렷한 목표가 없으신가요?',
    description: '상황별로 딱 맞는 상품을 알려드릴게요',
    linkTitle: '테마별 추천 바로가기',
    href: 'theme-recommendations'
  },
  {
    title: '상품비교',
    subTitle: '하나하나 살펴보기 힘들죠?',
    description: '원하는 혜택을 쉽게 비교해보세요',
    linkTitle: '상품비교 바로가기',
    href: 'comparison'
  },
  {
    title: 'AI맞춤 추천',
    subTitle: '꼭 맞는 상품 여기있어요!',
    description: '복잡한 금융상품 알아서 찾아드릴게요',
    linkTitle: '맞춤 추천 바로가기',
    href: 'ai-recommendations'
  }
];

const productArray = [
  {
    title: '#차근차근 모아봐요',
    products: [
      { title: '입출금', icon: <FinancialTransactionIcon /> },
      { title: '예적금', icon: <DepositIcon /> },
      { title: '청약', icon: <SubscriptionIcon /> }
    ]
  },
  {
    title: '#똑똑하게 소비해요',
    products: [
      { title: '신용카드', icon: <CreditCardIcon /> },
      { title: '체크카드', icon: <CheckCardIcon /> }
    ]
  },
  {
    title: '#신중하게 빌려봐요',
    products: [
      { title: '신용대출', icon: <CreditLoanIcon /> },
      { title: '비상금대출', icon: <EmergencyLoanIcon /> },
      { title: '전세대출', icon: <LeaseLoanIcon /> }
    ]
  },
  {
    title: '#쑥쑥 불려봐요',
    products: [
      { title: '펀드', icon: <FundIcon /> },
      { title: '주식투자', icon: <StockInvestmentIcon /> },
      { title: 'ISA', icon: <ISAIcon /> }
    ]
  }
];

const FinancialProductPage = () => {
  return (
    <div className='px-20 py-40'>
      <Text sizes='20' variant='h1' weight='600'>
        맞춤탐색
      </Text>
      <ul className='mb-16 mt-8 flex flex-col gap-8'>
        {recommendationArray.map((recommendationInfo) => {
          return (
            <li key={recommendationInfo.title}>
              <RecommendationCard recommendationInfo={recommendationInfo} />
            </li>
          );
        })}
      </ul>
      <Text sizes='20' variant='h1'>
        금융상품
      </Text>
      <ul className='mt-8 flex flex-col gap-[1.2rem]'>
        {productArray.map((productInfo) => {
          return (
            <li key={productInfo.title}>
              <ProductCard productInfo={productInfo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FinancialProductPage;
