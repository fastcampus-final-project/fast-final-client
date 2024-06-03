// /finacial-product
export const FINANCIAL_PRODUCT_NAVIGATION = [
  {
    title: '상품비교',
    subTitle: '하나하나 살펴보기 힘들죠?',
    description: '원하는 혜택을 쉽게 비교해보세요',
    linkTitle: '상품비교 바로가기',
    href: 'comparison?tab1=카드&tab2=신용카드'
  },
  {
    title: '테마별 추천',
    subTitle: '뚜렷한 목표가 없으신가요?',
    description: '상황별로 딱 맞는 상품을 알려드릴게요',
    linkTitle: '테마별 추천 바로가기',
    href: 'theme-recommendations'
  },
  {
    title: 'AI맞춤 추천',
    subTitle: '꼭 맞는 상품 여기있어요!',
    description: '복잡한 금융상품 알아서 찾아드릴게요',
    linkTitle: '맞춤 추천 바로가기',
    href: 'ai-recommendations?tab=예적금'
  }
];

// /finacial-product
export const FINANCIAL_PRODUCT_CATEGORIES = [
  {
    title: '#차근차근 모아봐요',
    products: [
      { title: '입출금', iconPath: '/icons/financial-product/transaction.svg' },
      { title: '예적금', iconPath: '/icons/financial-product/deposit.svg' },
      { title: '청약', iconPath: '/icons/financial-product/subscription.svg' }
    ]
  },
  {
    title: '#똑똑하게 소비해요',
    products: [
      { title: '신용카드', iconPath: '/icons/financial-product/credit-card.svg' },
      { title: '체크카드', iconPath: '/icons/financial-product/check-card.svg' }
    ]
  },
  {
    title: '#신중하게 빌려봐요',
    products: [
      { title: '신용대출', iconPath: '/icons/financial-product/credit-loan.svg' },
      { title: '비상금대출', iconPath: '/icons/financial-product/emergency-loan.svg' },
      { title: '전세대출', iconPath: '/icons/financial-product/lease-loan.svg' }
    ]
  },
  {
    title: '#쑥쑥 불려봐요',
    products: [
      { title: '펀드', iconPath: '/icons/financial-product/fund.svg' },
      { title: '주식투자', iconPath: '/icons/financial-product/stock-investment.svg' },
      { title: 'ISA', iconPath: '/icons/financial-product/isa.svg' }
    ]
  }
];

// /financial-product/theme-recommendations
export const THEMES = [
  {
    title: '쇼핑 카드 추천',
    subTitle: '쇼핑 중독자에게 꼭 맞는',
    iconPath: '/icons/financial-product/shopping.svg',
    color: '#FF7D51',
    href: 'shopping-card'
  },
  {
    title: '편의점 카드 추천',
    subTitle: '편의점 단골 손님을 위한',
    iconPath: '/icons/financial-product/convenience-store-card-recommendation.svg',
    color: '#4CC590',
    href: 'convenience-card'
  },
  {
    title: '6개월 적금 추천',
    subTitle: '다가올 여름 여행 경비를 위한',
    iconPath: '/icons/financial-product/six-month-savings-recommendation.svg',
    color: '#65A4DA',
    href: 'six-month-savings'
  },
  {
    title: '연말 ・ 연초 적금 상품 추천',
    subTitle: '4%이상 금리를 받고싶은 당신을 위한',
    iconPath: '/icons/financial-product/savings-recommendation.svg',
    color: '#8F98FF',
    href: 'savings'
  }
];

// /financial-product/comparison/select-category
export const COMPARISON_STANDARD = [
  { title: '대중교통', iconPath: '/icons/product/product-traffic.svg' },
  { title: '쇼핑', iconPath: '/icons/product/product-shopping.svg' },
  { title: '카페', iconPath: '/icons/product/product-cafe.svg' },
  { title: '편의점', iconPath: '/icons/product/product-cvs.svg' },
  { title: '마트', iconPath: '/icons/product/product-mart.svg' },
  { title: '문화', iconPath: '/icons/product/product-culture.svg' },
  { title: '백화점', iconPath: '/icons/product/product-stores.svg' },
  { title: '통신비', iconPath: '/icons/product/product-communication.svg' },
  { title: '주유', iconPath: '/icons/product/product-oiling.svg' },
  { title: '여행', iconPath: '/icons/product/product-travel.svg' },
  { title: '온라인', iconPath: '/icons/product/product-online.svg' },
  { title: '구독', iconPath: '/icons/product/product-subscribe.svg' }
];