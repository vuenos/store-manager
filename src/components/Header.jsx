import Head from 'next/head';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SHConnect</title>
        <meta name="description" content="Sellerhub Connect" />
        <link rel="icon" href="/public/favicon.ico" />
        <link href="/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
        <link href="/styles/custom.css" rel="stylesheet" type="text/css" />
      </Head>

      <div>
        <h1>
          <Link href='/'>Home</Link>
        </h1>
      </div>
    </div>
  )
}
export default Header;