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
        <img src="https://github.com/exotichops/exotichops-com/blob/main/public/logo.svg" width="319" height="353" alt="ExoticHops.com" />
       
        <p className="description">
          Contact <a href="mailto:exotichopsco@gmail.com">exotichopsco@gmail.com</a> for information.
        </p>
      </main>
      <Footer />
    </div>
  )
}
