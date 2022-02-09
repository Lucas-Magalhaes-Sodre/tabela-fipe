import {
  createContext, Dispatch, ReactNode, SetStateAction, useState,
} from 'react';

interface CarProviderProps{
  children: ReactNode;
}

interface ResultCar{
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
}
interface CreateContextProps{
  brand: string;
  setBrand: Dispatch<SetStateAction<string>>;
  nameCar:string;
  setNameCar: Dispatch<SetStateAction<string>>;
  yearCar: string;
  setYearCar: Dispatch<SetStateAction<string>>;
  resultCar: ResultCar
  setResultCar: Dispatch<SetStateAction<ResultCar>>;
}

export const CarContext = createContext({} as CreateContextProps);

export function CarProvider({ children }:CarProviderProps) {
  const [brand, setBrand] = useState<string>('0');
  const [nameCar, setNameCar] = useState<string>('0');
  const [yearCar, setYearCar] = useState<string>('0');
  const [resultCar, setResultCar] = useState<ResultCar>();

  return (
    <CarContext.Provider value={{
      brand, setBrand, nameCar, setNameCar, yearCar, setYearCar, resultCar, setResultCar,
    }}
    >
      {children}
    </CarContext.Provider>
  );
}
