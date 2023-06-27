import PropTypes from 'prop-types';
import { Frienditem } from './Frienditem';

function Friendlist({friends}) {
    return (
        <ul className="friend-list">
        {
        friends.map(({ id, avatar, name, isOnline }) => (
            <Frienditem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
           ))
        }
        </ul>);
}
Friendlist.propTypes = {
    friends: PropTypes.arrayOf(
            PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
}

export default Friendlist;