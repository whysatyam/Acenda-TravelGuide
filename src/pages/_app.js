import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>ACENDA | Travel and Explore</title>
        <meta name="description" content="Your website description" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toaster position="top-center" />
      </Provider>
    </div>
  );
}