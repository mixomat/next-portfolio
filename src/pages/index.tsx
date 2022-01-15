import type { NextPage } from 'next';
import styles from '../styles/utils.module.css';
import { Layout } from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Welcome to my Portfolio</h1>
    </Layout>
  );
};

export default Home;
