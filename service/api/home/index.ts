import { requestFetch } from '../fetchOptions';
import { EditWidgetDataType } from '@/types/widget-type/widgetType';

export const getWidgetItem = (): Promise<EditWidgetDataType> => {
  return requestFetch('/api/widget');
};

type WalletDataType = {
  bank: string;
  bankBookName: string;
  amount: number;
  lastDeposit: number;
  lastSpending: number;
  iconSrc: string;
}[];
export const getMyWalletData = (): Promise<WalletDataType> => {
  return requestFetch('/api/wallet');
};
