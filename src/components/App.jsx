import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import FriendList from 'components/FriendsList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import data from '../path/data';
import user from '../path/user';
import friends from '../path/friends';
import transactions from '../path/transactions';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
