import { Dispatch, SetStateAction } from 'react';
import { ContainerSelect } from './styles';

interface OptionProps{
  codigo: string;
  nome: string;
}
interface SelectProps{
  options: OptionProps[]
  changeValue: Dispatch<SetStateAction<string>>;
}

export function Select({ options, changeValue }:SelectProps) {
  return (
    <ContainerSelect onChange={(e) => changeValue(e.target.value)}>
      {options.map(
        (option) => (
          <option key={option.codigo} value={option.codigo}>{option.nome}</option>
        ),
      )}
    </ContainerSelect>

  );
}
