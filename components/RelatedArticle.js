import Link from "next/link";
import Tags from "./Tags";
import styles from "./ArticleList.module.css";

export default function RelatedArticle({ postsData, tags, title }) {
  const posts = postsData.filter(function (post) {
    if (this.count >= 5) {
      return false;
    }
    if (post.tags.includes(tags[0]) && title !== post.title) {
      this.count++;
      return true;
    }
  }, { count: 0 });

  return (
    <>
      <div className="mx-auto mb-8 max-w-3xl p-4 sm:p-8">
        <span className="text-lg text-fluent-60 sm:text-xl">Related Articles</span>
        <br />
        <br />
        <div className="grid md:grid-cols-1">

          {posts.map((metadata) => {
            return (
              <Link href={`/blog/${metadata.id}`} key={metadata.title}>
                <div
                  key={metadata.id}
                  className="hover:bg-fluent-200 p-4 rounded shadow-lg flex flex-col justify-between space-y-10 hover:cursor-pointer"
                >

                  <div className="flex gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="fill-fluent-60 h-3 w-3 mt-1.5"
                      viewBox="0 0 256 512">
                      <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                    </svg>
                    <div className="flex flex-col space-y-2">
                      <span className="text-fluent-60">{metadata.title}</span>
                      <p className="card-description pb-5">{metadata.description}</p>
                      <Tags postMetadata={metadata} />
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
