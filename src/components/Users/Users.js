import styles from './User.module.css';
import Header from './header/header';
import UsersList from './UserList/UserList';
function Users() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <UsersList />
      </div>{' '}
    </>
  );
}

export default Users;
