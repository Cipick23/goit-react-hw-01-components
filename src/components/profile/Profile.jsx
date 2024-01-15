import './Profile.module.css'

const Profile = (items) => {
    return (
    <div>
        <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            className="avatar"
        />
        <p className='username'>{items.username}</p>
        <p className="tag">{items.tag}</p>
        <p className="location">{items.location}</p>
        <ul>
            <li>{items.stats.followers}</li>
            <li>{items.stats.views}</li>
            <li>{items.stats.likes}</li>
        </ul>
    </div>
    )
}

export default Profile