import { useQuery } from 'react-query';
import { useMonth } from '../../contexts/MonthContext';
import { useUser } from '../../contexts/UserContext';
import billRepository from '../../services/bill.service';
import { BillType } from '../../types/bill';

export default function useBills(billType?: BillType) {
  const { date } = useMonth();
  const { user } = useUser();
  const id = user?.uid || '';

  if (billType) {
    return useQuery(
      date,
      async () => await billRepository.findByTypeAndDate(billType, date, id),
    );
  }
  return useQuery(
    date,
    async () => await billRepository.findAllByDate(id, date),
  );
}
