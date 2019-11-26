import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import data from '../data/pages'
console.log(data)
const html = () => (
  <div>
    <Head>
      <title>HTML page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
        <h1>html page!</h1>
    </div>

    <div className="row">
        <p>here is some content</p>
    </div>
</div>
)

export default html;