import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'


const ssr = () => (
  <div>
    <Head>
      <title>SSR page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div class="hero">
        <h1>SSR page!</h1>
    </div>

    <div class="row">
        <p>here is some content</p>
    </div>
</div>
)

export default ssr;