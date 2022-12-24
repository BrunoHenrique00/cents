import { createContext, ReactNode, useContext, useState } from 'react';
import formatDate from '../helpers/formatDate';

interface MonthContextProps {
  month: string;
  updateDate: (date: Date) => void;
}

const MonthContext = createContext<MonthContextProps>({} as MonthContextProps);

const MonthProvider = ({ children }: { children: ReactNode }) => {
  const [month, setDate] = useState(formatDate(new Date()));

  function updateDate(date: Date) {
    const onlyMonth = formatDate(date);
    setDate(onlyMonth);
  }

  return (
    <MonthContext.Provider value={{ month, updateDate }}>
      {children}
    </MonthContext.Provider>
  );
};

export default MonthProvider;

export function useMonth() {
  return useContext(MonthContext);
}
