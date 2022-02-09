import { Dispatch, SetStateAction } from 'react';
import { ContainerSelect } from './styles';

interface OptionProps{
  codigo: string;
  nome: string;
}
interface SelectProps{
  options: OptionProps[]
  changeValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

export function Select({ options, changeValue, placeholder }:SelectProps) {
  return (
    <ContainerSelect onChange={(e) => changeValue(e.target.value)}>
      <option value="" disabled selected hidden>{placeholder}</option>
      {options.map(
        (option) => (
          <option key={option.codigo} value={option.codigo}>{option.nome}</option>
        ),
      )}
    </ContainerSelect>

  );
}
