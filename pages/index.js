import Layout from "../components/Layout";
import styles from '../styles/Home.module.css';
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="#">Connect</a>
          </h1>
          <p><Link href="/page">Move to Page</Link></p>
        </main>
      </div>
    </Layout>
  )
}
