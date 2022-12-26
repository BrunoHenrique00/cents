import { createContext, ReactNode, useContext, useState } from 'react';
import formatDate from '../helpers/formatDate';

interface MonthContextProps {
  date: string;
  updateDate: (date: Date) => void;
  getYear: () => string;
}

const MonthContext = createContext<MonthContextProps>({} as MonthContextProps);

const MonthProvider = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState(formatDate(new Date()));

  function updateDate(date: Date) {
    const onlydate = formatDate(date);
    setDate(onlydate);
  }

  function getYear() {
    return date.substring(date.length - 4);
  }

  return (
    <MonthContext.Provider value={{ date, updateDate, getYear }}>
      {children}
    </MonthContext.Provider>
  );
};

export default MonthProvider;

export function useMonth() {
  return useContext(MonthContext);
}
