import firestore from '@react-native-firebase/firestore';
import { BillType, IBillDetails } from '../types/bill';

const billRepository = {
  save: async (data: any) => {
    await firestore().collection('Bills').add(data);
  },
  findAll: async (id: string): Promise<IBillDetails[]> => {
    const result = await firestore()
      .collection('Bills')
      .where('userId', '==', id)
      .get();
    const bills: IBillDetails[] = [];
    result.forEach(item => {
      bills.push(item.data().bill as IBillDetails);
    });
    return bills;
  },

  findAllByDate: async (id: string, date: string): Promise<IBillDetails[]> => {
    const result = await firestore()
      .collection('Bills')
      .where('userId', '==', id)
      .where('date', '==', date)
      .get();
    const bills: IBillDetails[] = [];
    result.forEach(item => {
      bills.push(item.data().bill as IBillDetails);
    });
    return bills;
  },

  findByType: async (type: BillType, id: string): Promise<IBillDetails[]> => {
    const result = await firestore()
      .collection('Bills')
      .where('type', '==', type)
      .where('userId', '==', id)
      .get();
    const bills: IBillDetails[] = [];
    result.forEach(item => {
      bills.push(item.data().bill as IBillDetails);
    });
    return bills;
  },
};

export default billRepository;
