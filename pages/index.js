import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="ExoticHops.com" />
        <p className="description">
          Providing and preserving <code>unique, exotic, and flavorful hops</code> for generations to come.
        </p>
      </main>

      <Footer />
    </div>
  )
}
