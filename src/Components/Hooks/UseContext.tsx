import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../../services/api';

interface ContextType {
  id: number;
  image: string;
  description: string;
  description2: string;
  description3: string;
}
interface ContextTs {
  dados: ContextType[];
}
interface ContextProviderProps {
  children: ReactNode;
}
export const UseContext = createContext<ContextTs>({} as ContextTs);
export const UseStorage = ({ children }: ContextProviderProps) => {
  const [dados, setDados] = useState<ContextType[]>([]);
  useEffect(() => {
    async function getDados() {
      const response = await api.get('help');
      setDados(response.data);
    }
    getDados();
  }, []);

  return (
    <UseContext.Provider value={{ dados }}>{children}</UseContext.Provider>
  );
};
