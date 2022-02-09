import styled from 'styled-components';

export const Container = styled.div`
      background:var(--background);
      height: 100%;
      width: 100%;
      color: var(--black);
      text-align: center;
      margin-top: 100px;


`;

export const SearchCars = styled.form`
      background:var(--shape);
      height: 280px;
      width: 500px;

      align-items: center;
      text-align: center;

      border: 0.5px outset var(--gray-light);
      border-radius: 5px;
      display: inline-block;




`;

export const Title = styled.h1`

`;

export const SubTitle = styled.h2`


`;

export const SearchButton = styled.button`
    height: 35px;
    width: 150px;
    border-radius: 5px;
    font-weight: 500;
    background: var(--gray-light);
    color: var(--gray);
    padding: 0px;

    display: inline-block;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    cursor: pointer;
    border: 0px;

    transition: filter 0.2s;

    &:not(:disabled){
        filter:brightness(0.9);
        background: var(--purple);
        color: var(--background);
    }

    &:not(:disabled):hover{
        filter:brightness(0.8);

    }

    &:disabled{
        cursor:  not-allowed;
    }



`;
