import PropTypes from 'prop-types';
import { Frienditem } from './Frienditem';
import css from './friends.module.css';

function Friendlist({friends}) {
    return (
            <div className={css.container}>
                <ul className={css.friendList}>
                {
                friends.map(({ id, avatar, name, isOnline }) => (
                    <Frienditem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
                ))
                }
                </ul>
            </div>
            );
        }
Friendlist.propTypes = {
    friends: PropTypes.arrayOf(
            PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
}

export default Friendlist;