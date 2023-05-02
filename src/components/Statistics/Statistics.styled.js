import styled from '@emotion/styled';
// import getRandomHexColor from 'components/Utils/Utils';

// const getRandomHexColor = () => {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

export const StatisticsWrapper = styled.section`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px #c6cccced;
  margin-top: 30px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #524a4d;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  background-color: ${props => props.backgroundColor};
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d8b;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #524a4d;
`;
