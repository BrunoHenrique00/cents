import { createContext, ReactNode, useContext, useState } from 'react';

interface MonthContextProps {
  month: string;
  updateDate: (date: Date) => void;
}

const MonthContext = createContext<MonthContextProps>({} as MonthContextProps);

const MonthProvider = ({ children }: { children: ReactNode }) => {
  const [month, setDate] = useState(
    new Date().toLocaleString('pt-BR', { month: 'long' }).toLocaleUpperCase(),
  );

  function updateDate(date: Date) {
    const onlyMonth = date
      .toLocaleString('pt-BR', { month: 'long' })
      .toLocaleUpperCase();
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
