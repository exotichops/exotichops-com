fimport Head from 'next/head'
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
        <img src="https://raw.githubusercontent.com/exotichops/exotichops-com/main/public/logo.svg" width="319" height="353" alt="ExoticHops.com" />
       
        <p className="description">         
          Questions/Comments? Contact us below: 
    
          <form name="contact" netlify>
          <p>
            <label>Name <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message <textarea rows="2" name="message"/></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </p>
      </main>
      <Footer />
    </div>
  )
}
