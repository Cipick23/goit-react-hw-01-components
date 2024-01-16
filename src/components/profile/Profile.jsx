import styles from './Profile.module.css'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Profile = ({items}) => {
    return (
    <Card style={{ width: '18rem' }} className={styles.card}>
        
        <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            className={styles.Image}
        />
        <Card.Body className={styles.body}>
            <Card.Title className={styles.black}>{items.username}</Card.Title>
            <Card.Text>{items.tag}</Card.Text>
            <Card.Text className={styles.location}>{items.location}</Card.Text>
            <ListGroup className={styles.my-2}>
                <ListGroup.Item>
                    <span className={styles.label}>Followers</span>
                    <br />
                    <span>{items.stats.followers}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span className={styles.label}>Views</span>
                    <br />
                    <span>{items.stats.views}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span className={styles.label}>Likes</span>
                    <br />
                    <span>{items.stats.likes}</span>
                </ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
    )
}

Profile.propTypes = {
    items: PropTypes.object
}

export default Profile