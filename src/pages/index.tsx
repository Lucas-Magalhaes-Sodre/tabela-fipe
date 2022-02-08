import { GetServerSideProps } from 'next';
import {
  useCallback, useMemo, useState,
} from 'react';
import { Select } from '../components/Select';
import { useCar } from '../hook/useCar';
import api from '../services/api';
import {
  Container, Title, SubTitle, SearchCars,
} from './styles';

interface Brands{
  nome: string;
  codigo: string;
}

interface HomeProps{
  brands: Brands[];
}

export default function Home({ brands }:HomeProps) {
  const {
    brand, setBrand, nameCar, setNameCar,
  } = useCar();
  const [nameCars, setNameCars] = useState([]);
  const [yearCars, setYearCars] = useState([]);

  const handleNameCar = useCallback(async () => {
    const response = await api.get(`/carros/marcas/${brand}/modelos`);

    setNameCars(response.data.modelos);
  }, [brand]);

  const handleYearCar = useCallback(async () => {
    const response = await api.get(`/carros/marcas/${brand}/modelos/${nameCar}/anos`);

    console.log(response.data);

    setYearCars(response.data);
  }, [brand, nameCar]);

  useMemo(() => {
    if (Number(brand) > 0) {
      handleNameCar();
    }

    if (Number(nameCar) > 0) {
      handleYearCar();
    }
  }, [handleNameCar, brand, nameCar, handleYearCar]);

  useMemo(() => {
    if (Number(nameCar) > 0) {
      handleYearCar();
    }
  }, [nameCar, handleYearCar]);

  return (
    <Container>

      <Title>Tabela</Title>

      <SubTitle>Consulte o valor de um veículo de forma gratuita</SubTitle>

      <SearchCars>

        <Select changeValue={setBrand} options={brands} />

        {!!nameCars.length && <Select changeValue={setNameCar} options={nameCars} />}

        {!!yearCars.length && <Select changeValue={() => {}} options={yearCars} />}

      </SearchCars>

    </Container>
  );
}

export const getServerSideProps:GetServerSideProps = async () => {
  const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
  const data = await response.json();

  return {
    props: {
      brands: data,
    },
  };
};
