import Layout from "../components/Layout";
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div>
        <main>
          <h1>
            Welcome to <a href="#">컨넥트 쇼핑몰 Connect</a>
          </h1>
          <p><Link href="/page">Move to Page</Link></p>
        </main>
      </div>
    </Layout>
  )
}
