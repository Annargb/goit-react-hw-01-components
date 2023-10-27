import { Profile } from '../profile-component/Profile';
import { Statistics } from '../statistics-component/Statistics';
import { FriendList } from '../friends-list-component/FriendList';
import { TransactionHistory } from '../transaction-component/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import css from './App.module.css';

export const App = () => (
  <>
    <section className={css.section}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </section>

    <section className={css.section}>
      <Statistics title="Upload stats" stats={data} />
    </section>

    <section className={css.section}>
      <FriendList friends={friends} />
    </section>

    <section className={css.section}>
      <TransactionHistory items={transactions} />
    </section>
  </>
);
