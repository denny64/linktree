import Head from 'next/head';
import Footer from '../components/layout/footer';
import { LinkCollection } from '../components/card';
import styles from './main.module.css';
import DATA from '../data';

const DEFAULT_PROFILE_IMG = "https://pbs.twimg.com/profile_images/1097375332577902592/2ok8lbkd_400x400.png";

export default () => {
  return (
    <>
      <Head>
        <title>Linktree Demo</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <img className={styles.profileImg} src={DEFAULT_PROFILE_IMG} />
          <p className={styles.description}>{DATA.user.username}</p>
          <LinkCollection links={DATA.links} />
        </main>
        <Footer />
      </div>
    </>
  )
}
