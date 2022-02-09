import { GetServerSideProps } from 'next';
import {
  useEffect, useState,
} from 'react';
import { Select } from '../components/Select';
import { useCar } from '../hook/useCar';
import {
  Container, Title, SubTitle, SearchCars, SearchButton,
} from '../styles/home/stylesHome';

interface Brands{
  nome: string;
  codigo: string;
}

interface HomeProps{
  brands: Brands[];
}

export default function Home({ brands }:HomeProps) {
  const {
    setBrand, setNameCar, yearCar, setYearCar, handleResultCar, yearCars, nameCars,
  } = useCar();

  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    if (yearCar !== '0') {
      setIsDisable(false);
    }
  }, [yearCar]);

  return (
    <Container>

      <Title>Tabela Fipe</Title>

      <SubTitle>Consulte o valor de um veículo de forma gratuita</SubTitle>

      <SearchCars onSubmit={handleResultCar}>

        <Select placeholder="Marca" changeValue={setBrand} options={brands} />

        <Select placeholder="Modelo" changeValue={setNameCar} options={nameCars} />

        {!!yearCars.length && <Select placeholder="Ano" changeValue={setYearCar} options={yearCars} />}

        <SearchButton disabled={isDisable} type="submit">Consultar Preço</SearchButton>

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
