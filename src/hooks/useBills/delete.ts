import { useMutation, useQueryClient } from 'react-query';
import { useMonth } from '../../contexts/MonthContext';
import billRepository from '../../services/bill.service';

export default function useBillsDelete() {
  const { date } = useMonth();
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => await billRepository.deleteById(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(date);
      },
    },
  );
}
