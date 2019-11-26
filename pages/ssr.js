import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import data from '../data/pages'
import FacetBar from '../components/facetbar'


const ssr = () => (
  <div>
    <Head>
      <title>SSR page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <FacetBar parent='ssr'  linkData={data.ssr} />

    <div class="hero">
        <h1>SSR page!</h1>
    </div>

    <div class="row">
        <p>here is some content</p>
    </div>
</div>
)

export default ssr;