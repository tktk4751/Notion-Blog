import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  tags: string;
  slug: string;
  postsimage: string;
  createdtime: string;
  updatedtime: string;
};

export const SinglePost = (props: Props) => {
  const { title, description, createdtime, tags, slug, postsimage } = props;

  return (
    <div className="mx-8 mt-4">
      <Link href={`/posts/${slug}`}>
        <div className="card w-96 bg-base-100 shadow-xl mb-5 flex">
          <figure className="bg-cover max-h-96">
            <img src={postsimage} alt="img" />
          </figure>
          <div className="card-body">
            <span className="card-title">{title}</span>
            <span>{createdtime.substring(0, 10)}</span>
            <span>{description}</span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">今すぐ読む</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
