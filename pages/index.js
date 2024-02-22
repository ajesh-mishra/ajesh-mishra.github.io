import Head from 'next/head'
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import { getPostsMetaData } from "../lib/getPostsData.js"
import Social from '../components/Social.js';

export default function Home({ postsData }) {
  return (
    <>
      <Head>
        <title>Ajesh Mishra</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="title" content="Ajesh Mishra's Blog" />
        <meta name="description" content="Ajesh Mishra's Blog, where one can find artiles about technology, programming and more." />
        <meta name="keywords" content="Ajesh Mishra, Ajesh, web development, middleware, file transfer, sterling integrator, connect direct" />

        <meta property="twitter:url" content="https://ajesh-mishra.github.io/" />
        <meta name="twitter:title" content="Ajesh Mishra's Blog" />
        <meta name="twitter:description" content="Ajesh Mishra's Blog, where one can find artiles about technology, programming and more." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ajesh-mishra.github.io/" />
        <meta property="og:title" content="Ajesh Mishra's Blog" />
        <meta property="og:description" content="Ajesh Mishra's Blog, where one can find artiles about technology, programming and more." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" />

        <meta name="theme-color" content="#11100f" />
        <meta name="msapplication-navbutton-color" content="#11100f" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#11100f" />
      </Head>

      <Hero postsData={postsData} isHome={true} />
      <Social />
      <Experience />

    </>
  );
}

export async function getStaticProps() {
  const postsData = getPostsMetaData()
  return {
    props: {
      postsData: postsData,
    },
  };
}
