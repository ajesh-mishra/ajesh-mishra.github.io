import { getPostsMetaData } from "../../lib/getPostsData.js"
import Hero from "../../components/Hero"
import ArticleList from "../../components/ArticleList"
import { map } from "../../lib/topicMapping.js"

export default function Blogs({ postsData }) {
    return (
        <>
            <Hero postsData={postsData} isHome={false} />
            <ArticleList postsData={postsData} filter="aws" limit="true" size="5" topic={map['aws']} />
            <ArticleList postsData={postsData} filter="mft" limit="true" size="5" topic={map['mft']} />
            <ArticleList postsData={postsData} filter="devops" limit="true" size="5" topic={map['devops']} />
            <ArticleList postsData={postsData} filter="challenge" limit="true" size="5" topic={map['challenge']} />
            <ArticleList postsData={postsData} filter="middleware" limit="true" size="5" topic={map['middleware']} />
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