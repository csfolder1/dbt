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
        <Header title="Welcome to my app!" />
        <p>
          <p>Databases can be classified in a variety of ways, but the most common classification is by the level of abstraction.</p> 
         <p> There are four major types of databases: Relational, Network, Hierarchical, and Object-Oriented. In this blog post, </p>
           we'll discuss each type in detail. Stay tuned for future posts on specific database applications!<a href="https://databasetown.com/">Types of Database</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
