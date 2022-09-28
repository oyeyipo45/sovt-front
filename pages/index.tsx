import { useRouter } from 'next/router'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Home from 'components/Home';
import Layout, { siteTitle } from 'components/Layout';

export default function Homes() {
  const { query } = useRouter();
  const page: number = parseInt(query?.page as string);
  

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Home page={page || 1} />
      </section>
    </Layout>
  );
}
