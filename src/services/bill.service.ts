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
      bills.push({
        ...(item.data().bill as IBillDetails),
        id: item.id,
      });
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
      bills.push({
        ...(item.data().bill as IBillDetails),
        id: item.id,
      });
    });
    return bills;
  },

  findByTypeAndDate: async (
    type: BillType,
    date: string,
    id: string,
  ): Promise<IBillDetails[]> => {
    const result = await firestore()
      .collection('Bills')
      .where('type', '==', type)
      .where('userId', '==', id)
      .where('date', '==', date)
      .get();
    const bills: IBillDetails[] = [];
    result.forEach(item => {
      bills.push({
        ...(item.data().bill as IBillDetails),
        id: item.id,
      });
    });
    return bills;
  },
  deleteById: async (id: string) => {
    await firestore().collection('Bills').doc(id).delete();
  },
};

export default billRepository;
