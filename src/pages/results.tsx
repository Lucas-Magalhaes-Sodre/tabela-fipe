import { useCar } from '../hook/useCar';
import {
  Container, Title, Price, Note,
} from '../styles/results/stylesResults';

export default function Results() {
  const {
    resultCar,
  } = useCar();

  return (
    <Container>
      <Title>
        Tabela Fipe: Preço
        {' '}
        {resultCar.Marca}
        {' '}
        {resultCar.Modelo}
      </Title>
      <Price>{resultCar.Valor}</Price>
      <Note>Este é o preço de compra do veículo</Note>
    </Container>

  );
}
