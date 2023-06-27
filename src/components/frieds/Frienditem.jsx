import PropTypes from 'prop-types';
import css from './friends.module.css';


export const Frienditem = ({ avatar, name, isOnline }) => {
    return(
    <li className={css.item}>
        <span className={css.status}
            style={isOnline ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>

        </span>
        <img className={css.avatar}
            src={avatar} 
            alt='User avatar' 
            width='48' />
        <p className={css.statusName}>{name}</p>
    </li>
    );
}
Frienditem.propTypes={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
