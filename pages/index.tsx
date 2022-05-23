import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { MenuContent } from '../components/NavMenu/NavMenu.types';
import { NavMenu } from '../components/NavMenu/NavMenu';

const menuContent: MenuContent = {
  item1: { title: 'item1', link: 'https://www.facebook.com' },
  item2: { title: 'item2', link: 'https://www.youtube.com' },
  item3: {
    title: 'item3',
    subMenu: {
      item1: { title: 'item1' },
      item2: { title: 'item2' },
    }
  },
}


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Chanel</title>
        <meta name="description" content="Menu dynamique" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavMenu menuContent={menuContent} />
    </div>
  )
}
