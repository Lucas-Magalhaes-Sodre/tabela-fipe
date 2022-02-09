import { useRouter } from 'next/router';
import {
  FormEvent,
  useCallback, useContext, useMemo, useState,
} from 'react';
import { CarContext } from '../context/CarContext';
import api from '../services/api';

export function useCar() {
  const router = useRouter();

  const {
    brand, setBrand, nameCar, setNameCar, yearCar, setYearCar, resultCar, setResultCar,
  } = useContext(CarContext);

  const [nameCars, setNameCars] = useState([]);
  const [yearCars, setYearCars] = useState([]);

  const handleNameCar = useCallback(async () => {
    const response = await api.get(`/carros/marcas/${brand}/modelos`);

    setNameCars(response.data.modelos);
  }, [brand]);

  const handleYearCar = useCallback(async () => {
    const response = await api.get(`/carros/marcas/${brand}/modelos/${nameCar}/anos`);

    setYearCars(response.data);
  }, [brand, nameCar]);

  const handleResultCar = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    const response = await api.get(`/carros/marcas/${brand}/modelos/${nameCar}/anos/${yearCar}`);

    setResultCar(response.data);
    router.push('/results');
  }, [brand, nameCar, yearCar, setResultCar, router]);

  useMemo(() => {
    if (Number(brand) > 0) {
      handleNameCar();
    }
  }, [handleNameCar, brand]);

  useMemo(() => {
    if (Number(nameCar) > 0) {
      handleYearCar();
    }
  }, [nameCar, handleYearCar]);

  return {
    brand,
    setBrand,
    nameCar,
    setNameCar,
    yearCar,
    setYearCar,
    resultCar,
    setResultCar,
    handleResultCar,
    nameCars,
    yearCars,
  };
}
