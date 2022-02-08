import {
  createContext, Dispatch, ReactNode, SetStateAction, useState,
} from 'react';

interface CarProviderProps{
  children: ReactNode;
}

interface CreateContextProps{
  brand: string;
  setBrand: Dispatch<SetStateAction<string>>;
  nameCar:string;
  setNameCar: Dispatch<SetStateAction<string>>;
}

export const CarContext = createContext({} as CreateContextProps);

export function CarProvider({ children }:CarProviderProps) {
  const [brand, setBrand] = useState<string>('0');
  const [nameCar, setNameCar] = useState<string>('0');

  return (
    <CarContext.Provider value={{
      brand, setBrand, nameCar, setNameCar,
    }}
    >
      {children}
    </CarContext.Provider>
  );
}
