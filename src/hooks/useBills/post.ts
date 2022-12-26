import { useMutation, useQueryClient } from 'react-query';
import { useMonth } from '../../contexts/MonthContext';
import { useUser } from '../../contexts/UserContext';
import billRepository from '../../services/bill.service';
import { IBill } from '../../types/bill';

export default function useBillsMutation() {
  const { date } = useMonth();
  const { user } = useUser();
  const queryClient = useQueryClient();
  const id = user?.uid || '';
  return useMutation(
    async (bill: IBill) =>
      await billRepository.save({
        userId: id,
        bill,
        date,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(date);
      },
    },
  );
}
