import styles from './Statistics.module.css'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Statistics = ({condition, items}) => {
    return (
    <Card className={styles.card}>
        {condition && <h2>Upload stats</h2>}
        <ul>
            
        </ul>
        <ListGroup variant="flush">
            {items.map(item => {
                return (
                <ListGroup.Item key={item.id}>
                    <span>{item.label}</span>
                    <span>{item.percentage}</span>
                </ListGroup.Item>
                );
            })}
        </ListGroup>
    </Card>
    );
}

Statistics.propTypes = {
    condition: PropTypes.bool,
    items: PropTypes.array
}

export default Statistics