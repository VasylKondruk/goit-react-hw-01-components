import PropTypes from 'prop-types';
import style from './Profile.module.css'

export const Profile = ({ avatar, username, tag, location, stats}) => {

    return (
    <div className={style.profile}>
        <div className="description">
            <img
            src={avatar}
            alt={username}
            className={style.avatar}
            />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className={style.label}>Followers</span>
                <span className="quantity"> {stats.followers}</span>
            </li>
            <li>
                <span className={style.label}>Views</span>
                <span className="quantity"> {stats.views}</span>
            </li>
            <li>
                <span className={style.label}>Likes</span>
                <span className="quantity"> {stats.likes}</span>
            </li>
        </ul>
    </div>
    )
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};