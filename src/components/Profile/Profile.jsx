import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  Description,
  ImgAvatar,
  StatsProfile,
  StatList,
  UserName,
  Tag,
  Location,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <Description>
        <ImgAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsProfile>
        <StatList>
          <Label>Followers </Label>
          <Quantity>{stats.followers}</Quantity>
        </StatList>
        <StatList>
          <Label>Views </Label>
          <Quantity>{stats.views}</Quantity>
        </StatList>
        <StatList>
          <Label>Likes </Label>
          <Quantity>{stats.likes}</Quantity>
        </StatList>
      </StatsProfile>
    </ProfileWrapper>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
