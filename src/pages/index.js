import Head from "next/head";
import Frontpage from "../components/frontPage.js";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Frontpage></Frontpage>
    </Layout>
  );
}
