import styles from './TransactionHistory.module.css'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table';

const TransactionHistory = ({ items }) => (
  <Table className="transaction-history" striped bordered hover>
  <thead>
    <tr>
      <th className={styles.red}>Type</th>
      <th className={styles.red}>Amount</th>
      <th className={styles.red}>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
  </tbody>
</Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array
}

export default TransactionHistory