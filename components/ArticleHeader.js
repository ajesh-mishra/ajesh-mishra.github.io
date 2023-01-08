import React from "react";
import Tags from "./Tags";

export default function ArticleHeader({ postMetadata }) {
  return (
    <>
      <div>
        <h1 className="text-fluent-50 text-2xl sm:text-3xl">
          {postMetadata.title}
        </h1>

        <Tags postMetadata={postMetadata} />

        <p className="text-sm text-fluent-50 sm:text-base">
          {postMetadata.description}
        </p>
      </div>

      <div className="my-6 flex space-x-4 ml-2">
        <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
          <img
            src="/1.png"
            alt="author_image"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>

        <div>
          <span className="text-sm font-medium text-fluent-50 sm:text-base">
            {postMetadata.author}
          </span>
          <span className="flex place-items-center space-x-2 text-xs text-fluent-100 sm:text-sm">
            <span>{postMetadata.date}</span>
            <svg
              className="w-1 h-1 fill-fluent-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z" />
            </svg>
            <span>{postMetadata.duration}</span>
          </span>
        </div>
      </div>
    </>
  );
}
