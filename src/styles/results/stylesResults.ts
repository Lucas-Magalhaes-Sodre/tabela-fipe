import styled from 'styled-components';

export const Container = styled.div`
      background:var(--LightCyan);
      color: var(--black);
      height: 100%;
      width: 100%;

      text-align: center;
      align-items: center;
`;

export const Title = styled.h1`
      color: var(--black);

      padding-top: 40px;
`;

export const Price = styled.h2`
      background:var(--green);
      color: var(--shape);
      width: 180px;
      height: 100%;

      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 15px;


      border-radius: 30px;
      padding: 5px 0;
`;

export const Note = styled.p`
      color: var(--black);
      font-weight: 400;

      margin-top: 15px;
      padding-bottom: 30px;
`;
