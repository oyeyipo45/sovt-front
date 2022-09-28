import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Home from 'components/Home';

export default function Homes() {
  const { query } = useRouter();
  const page: number = parseInt(query?.page as string);

  console.log(query, "querydfdfd");
  

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
