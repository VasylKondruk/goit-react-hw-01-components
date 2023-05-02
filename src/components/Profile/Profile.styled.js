import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 0 10px #c6cccced;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ImgAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 0 3px 0px #0000004d;
`;

export const UserName = styled.p`
  color: #524a4d;
  font-weight: 700;
  font-size: 20px;
  font-family: cursive;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: grey;
  font-weight: 500;
  font-size: 20px;
  font-family: cursive;
  margin-bottom: 10px;
`;

export const Location = styled.p`
    color: grey;
  font-weight: 500
  font-size: 20px;
  font-family: cursive;
  margin-bottom: 10px;
`;

export const StatsProfile = styled.ul`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const StatList = styled.li`
  display: flex;
  flex-direction: column;
  width: 33%;
  background-color: #ada1a1;
  border: 1px solid black;
`;

export const Label = styled.span`
  margin-right: 3px;
  font-weight: 500;
  font-size: 16px;
  color: #13162c8b;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d;
`;
