import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px #c6cccced;
  padding: 20px;
`;

export const ListStatus = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => (props.online ? 'green' : 'red')};
  margin-right: 20px;
`;

export const ListAvatar = styled.img`
  width: 80px;
  margin-right: 20px;
`;

export const ListName = styled.p`
  font-weight: 700;
  font-size: 30px;
  color: #524a4d;
`;
