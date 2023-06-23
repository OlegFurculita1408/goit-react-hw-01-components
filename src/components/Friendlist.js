function FriedList(props) {
    const { avatar, name, isOnline, id} = props
    return (
        <ul className="friend-list">
            <li key={id} className="item">
                <span className="status">{isOnline}</span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className={name}></p>
            </li>
        </ul>
    )
};

export default FriedList;