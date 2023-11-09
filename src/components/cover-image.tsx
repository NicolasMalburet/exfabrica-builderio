import BuilderImage from "./builder-image";
import Link from "next/link";
import cn from "classnames";
import React from "react";

export default function CoverImage({ title, url, slug }: any) {
  const image = (
    <BuilderImage
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={url}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/blog/${slug}`} legacyBehavior>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
