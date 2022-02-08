import { useContext } from 'react';
import { CarContext } from '../context/CarContext';

export function useCar() {
  const {
    brand, setBrand, nameCar, setNameCar,
  } = useContext(CarContext);

  return {
    brand,
    setBrand,
    nameCar,
    setNameCar,
  };
}
