import styled from 'styled-components';

export const Container = styled.div`
      background:var(--LightCyan);
      height: 100%;
      width: 100%;
      color: var(--black);
      text-align: center;
      align-items: center;

`;

export const Title = styled.h1`
      color: var(--black);
      padding-top: 40px;

`;

export const Price = styled.h2`
      display: block;
      margin-left: auto;
      margin-right: auto;
      color: var(--shape);
      background:var(--green);
      border-radius: 30px;
      width: 180px;
      height: 100%;
      padding: 5px 0;
      margin-top: 15px;

`;

export const Note = styled.p`
      color: var(--black);
      font-weight: 400;
      margin-top: 15px;
      padding-bottom: 30px;

`;
