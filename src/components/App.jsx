import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import user from './user.json'
import data from './data.json'
import FriendList from "./friendList/FriendList";
import friends from './friends.json'
import transactions from './transactions.json'
import TransactionHistory from "./transactionHistory/TransactionHistory";
import 'bootstrap/dist/css/bootstrap.min.css'

export const App = () => {
  return (
    <div>
      <Profile items = {user} />

      <Statistics condition = {true} items = {data}/>

      <FriendList friends = {friends}/>

      <TransactionHistory items = {transactions} />

    </div>
  );
};
