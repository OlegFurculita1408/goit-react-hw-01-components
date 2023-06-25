import PropTypes from 'prop-types';


export const Frienditem = ({ avatar, name, isOnline }) => {
    return(
    <li className='item'>
        <span className='status' 
            style={isOnline ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>

        </span>
        <img className='avatar' 
            src={avatar} 
            alt='User avatar' 
            width='48' />
        <p className='statusName'>{name}</p>
    </li>
    );
}
Frienditem.propTypes={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};



// export const Frienditem ({ avatar, name, isOnline }) => {
//     return ( <li className="item">
//                 <span className="status" style={isOnline ? {backgroundColor: "green"} : {backgroundColor: "red"}}></span>
//                     <img className="avatar" 
//                         src={avatar} 
//                         alt="User avatar" 
//                         width="48"
//                     />
//                 <p className="statusName">{name}</p>
//             </li>
//     );
// }
// Frienditem.propTypes={
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// }
// // export default Frienditem;