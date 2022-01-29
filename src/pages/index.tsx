import type { NextPage } from 'next';
import styles from '../styles/utils.module.css';
import { Layout } from '../components/layout';
import { About } from '../components/about';

const Index: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Welcome to my Portfolio</h1>
      <About />
    </Layout>
  );
};

export default Index;
