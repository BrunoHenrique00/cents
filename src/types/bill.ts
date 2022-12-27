export type BillType = 'ganhos' | 'despesa';

export interface IBill {
  type: BillType;
  value: string;
  description: string;
}

export interface IBillDetails extends IBill {
  userId: string;
  month: string;
  id: string;
}
