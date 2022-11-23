import Link from "next/link";
import Tags from "./Tags";

export default function ArticleList({ postsData, limit, filter, size, title }) {
  const posts = postsData.filter(function (post) {
    if (this.count >= size && limit === "true") {
      return false;
    }
    if (post.tags.includes(filter)) {
      this.count++;
      return true;
    }
  }, { count: 0 });

  return (
    <>
      <div className="mx-auto max-w-5xl my-4 md:my-16 px-2 sm:px-8">
        <span className="text-fluent-30 text-2xl font-semibold">{title}</span><br /><br />
        <div className="grid gap-2 md:grid-cols-3 sm:gap-4">
          {posts.map((metadata) => {
            return (
              <Link href={`/blog/${metadata.id}`} key={metadata.title}>
                <div
                  key={metadata.id}
                  className="bg-fluent-180 p-4 rounded shadow-lg flex flex-col justify-between space-y-10 hover:cursor-pointer"
                >
                  <div className="flex flex-col space-y-2">
                    <span className="text-fluent-20">{metadata.title}</span>
                    <p className="card-description">{metadata.description}</p>
                    {/* <Tags postMetadata={metadata} /> */}
                  </div>

                  <div className="flex place-items-center justify-between">
                    <span className="flex place-items-center space-x-2 text-xs text-fluent-100 sm:text-sm">
                      <span className="text-xs">{metadata.date}</span>
                      <svg
                        className="w-1 h-1 fill-fluent-100"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
                      </svg>
                      <span className="text-xs">{metadata.duration}</span>
                    </span>

                    <div>
                      <span className="text-fluent-100 hover:text-fluent-40 text-xs flex space-x-2 hover:cursor-pointer">
                        <span>Learn More</span>
                        <svg
                          className="h-4 w-4 fill-fluent-70"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z" />
                        </svg>
                      </span>
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
