import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import Link from 'next/link';

const name = 'SOVTECH-TEST'
export const siteTitle = 'Sovtech Test'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/images/Star-Wars-Logo.jpeg' />
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        <Link href='/?page=1'>
          <a>
            <Image priority src='/images/Star-Wars-Logo.jpeg' height={114} width={194} alt={name} />
          </a>
        </Link>
        <h1 >{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
