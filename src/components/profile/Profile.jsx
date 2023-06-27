import PropTypes from 'prop-types';
import style from './profile.module.css';


function Profile(props) {
    const { ueserName, tag, location, iconsUser, folower, views, likes } = props;
    return (
      <div className={style.profile}>
      <div className="description">
        <img
          src={iconsUser}
          width="280"
          alt={ueserName}
          className="avatar"
        />
        <p className="name">{ueserName}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{folower}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
      </li>
      </ul>
    </div>
    );
  }
  Profile.propTypes = {
    ueserName: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    iconsUser: PropTypes.string,
    folower: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  };

  export default Profile;