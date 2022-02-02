import type { NextPage } from 'next';
import styles from '../styles/utils.module.css';
import { Layout } from '../components/layout';
import { About } from '../components/about';
import { GetStaticProps } from 'next';
import { readMarkdownContent } from '../lib/markdown';

type IndexProps = {
  about: string
}

const Index : NextPage<IndexProps> = ({ about }: IndexProps) => {
  return (
    <Layout>
      <h1 className={styles.title}>Welcome to my Portfolio</h1>
      <About aboutHtml={about}/>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    about: readMarkdownContent('about')
  }
});

export default Index;
