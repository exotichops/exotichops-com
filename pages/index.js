import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Exotic Hops, Inc.</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Hubballi&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="https://raw.githubusercontent.com/exotichops/exotichops-com/main/public/logo.svg" width="319" height="353" alt="ExoticHops.com" />
       
        <p className="description">         
          Questions/Comments? Contact us below: 
        </p>
    
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name:<br /><input type="text" name="name" /></label>   
          </p>
          <p>
            <label>Your Email:<br /><input type="email" name="email" /></label>
          </p>          
          <p>
            <label>Message:<br /><textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  )
}
