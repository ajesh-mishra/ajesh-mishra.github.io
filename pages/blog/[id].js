import ArticleHeader from "../../components/ArticleHeader.js";
import Header from "../../components/Header";
import Cover from "../../components/Cover";
import styles from "../../styles/Post.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useEffect } from "react";
import { useRouter } from 'next/router'
import Prism from "prismjs";

import { getAllPostsPath, getPostData, getPostsMetaData } from "../../lib/getPostsData.js";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-json");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-rust");
require("prismjs/components/prism-docker");
require("prismjs/components/prism-python");
require("prismjs/components/prism-ruby");
require("prismjs/components/prism-ruby");
require("prismjs/components/prism-xml-doc");
require("prismjs/components/prism-yaml");

export default function Blog({ postMetadata, postContent, postsData }) {
  const router = useRouter()
  
  useEffect(() => {
    Prism.highlightAll();
  }, [router.pathname]);

  return (
    <>
      <Header postsData={postsData} />
      <Cover src={postMetadata.cover}/>

      <div className="mx-auto max-w-3xl p-4 sm:p-8">
        <ArticleHeader postMetadata={postMetadata} />

        <div className={styles.post}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {postContent}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsPath();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const postsData = await getPostsMetaData()

  return {
    props: {
      postsData: postsData,
      postMetadata: postData.metadata,
      postContent: postData.content,
      id: params.id,
    },
  };
}
