import axios from 'axios';
import styles from './header.module.css';
import {useState, useEffect} from 'react';

function Header() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://randomuser.me/api');
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <div className={styles.header}>
      <div>Users</div>
      {data.results && data.results.length > 0 ? (
        <div className={styles.randomImage}>
          <span>
            {data.results[0].name.first + ' ' + data.results[0].name.last}
          </span>
          <img src={data.results[0].picture.thumbnail} alt="" />
        </div>
      ) : (
        <div>No results found.</div>
      )}
    </div>
  );
}

export default Header;
