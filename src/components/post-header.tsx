import Avatar from "./avatar";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import React from "react";

export default function PostHeader({ title, coverImage, author }: any) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.image} />}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage} slug={undefined} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {author && <Avatar name={author.name} picture={author.image} />}
        </div>
      </div>
    </>
  );
}
