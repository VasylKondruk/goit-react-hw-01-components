import {
  ListItem,
  ListStatus,
  ListAvatar,
  ListName,
} from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <ListStatus online={isOnline}></ListStatus>
      <ListAvatar src={avatar} alt="User avatar" width="48" />
      <ListName>{name}</ListName>
    </ListItem>
  );
};

export default FriendListItem;
