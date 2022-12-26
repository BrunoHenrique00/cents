import { useQuery } from 'react-query';
import { useMonth } from '../../contexts/MonthContext';
import { useUser } from '../../contexts/UserContext';
import billRepository from '../../services/bill.service';

export default function useBills() {
  const { date } = useMonth();
  const { user } = useUser();
  const id = user?.uid || '';
  return useQuery(
    date,
    async () => await billRepository.findAllByDate(id, date),
  );
}
