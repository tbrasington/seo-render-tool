import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Nav from "../../../components/nav";
import data from "../../../data/pages";


const Page = () => {

  const router = useRouter();
  const { parent, url  } = router.query;
  console.log(parent, url)

  console.log(data[parent])
  return (
    
    <div>

      <Head>
        <title>page page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="row">
        <p>here is some {parent} {url}</p>
      </div>
    </div>

  );
};
// Page.getInitialProps = async ()=>{
//   return {parent: 'foo', url : 'bar'}
// }
export default Page;
