import styled from '@emotion/styled';

export const TransactionHistoryWrapper = styled.table`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px #c6cccced;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Head = styled.thead`
  display: flex;
  width: 100%;
  background-color: aqua;
`;

export const HeadItem = styled.tr`
  display: flex;
  justify-content: space-between;
  width: inherit;
  text-align: center;
`;

export const Body = styled.tbody`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BodyItem = styled.tr`
  display: flex;
  justify-content: space-between;
  width: inherit;
  text-align: center;background-color: #75b7e5;
  
  &:nth-of-type(even) {
    background-color: #d5cdc1;
`;

export const HeadIcon = styled.th`
  width: inherit;
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 5px;
  color: #524a4d;
  padding: 10px;
`;

export const BodyIcon = styled.td`
  padding: 10px;
  width: inherit;
  font-weight: 700;
  font-size: 15px;
  color: #524a4d;
  justify-content: center;
`;
