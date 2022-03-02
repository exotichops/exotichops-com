import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Exotic Hops, Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="ExoticHops.com" />
        <p className="description">
          Providing and preserving <code>unique, exotic, and flavorful hops</code> for generations to come.
        </p>
        <p className="description">
          Contact us at <a href="mailto:exotichopsco@gmail.com">exotichopsco@gmail.com</a> for more information.
        </p>
      </main>

      <Footer />
    </div>
  )
}
