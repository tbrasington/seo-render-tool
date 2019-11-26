import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'


const csr = () => (
  <div>
    <Head>
      <title>CSR page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
        <h1>CSR page!</h1>
    </div>

    <div className="row">
        <p>here is some content</p>
    </div>
</div>
)

export default csr;