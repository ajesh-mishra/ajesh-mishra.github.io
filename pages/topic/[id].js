import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Head from 'next/head'
import ArticleList from "../../components/ArticleList"
import { getPostsMetaData } from "../../lib/getPostsData.js"
import { map } from "../../lib/topicMapping.js"

export default function Topic({ postsData, filter, topic }) {
  return (
    <>
      <Head>
        <title>{filter}</title>
      </Head>
      <Hero postsData={postsData} />
      {/* <Header postsData={postsData} /> */}
      <ArticleList postsData={postsData} filter={filter} topic={topic} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = [
    { params: { id: 'mft' } },
    { params: { id: 'devops' } },
    { params: { id: 'challenge' } },
    { params: { id: 'middleware' } },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsData = getPostsMetaData()
  return {
    props: {
      postsData: postsData,
      filter: params.id,
      topic: map[params.id]
    },
  };
}
