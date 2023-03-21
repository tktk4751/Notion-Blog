import React from "react";
import Head from "next/head";
import {
  getAllPageSize,
  getAllPosts,
  getPostsByPage,
  getPostsForTopPage,
} from "@/../../lib/notionAPI";
import { Profile } from "@/components/Profile";
import { SinglePost } from "@/components/posts/SinglePost";
import { Tabs } from "@/components/Tabs";
import Pagination from "@/components/Pagination";
import { GetStaticProps } from "next";

export async function getStaticPaths() {
  const allPosts = await getAllPosts();
  const postsPerPage = 6; // 1ページあたりの投稿数
  const pageCount = Math.ceil(allPosts.length / postsPerPage); // ページ数
  const paths = Array.from({ length: pageCount }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const currentPage: any = context.params?.page;
  const pageCount = await getAllPageSize();
  const postsByPage = await getPostsByPage(
    parseInt(currentPage.toString(), 10)
  );

  return {
    props: {
      pageCount,
      postsByPage,
    },
    revalidate: 60,
  };
};

function Page({ postsByPage, pageCount }: any) {
  return (
    <>
      <Head>
        <title>Fullstack Journey</title>
        <meta
          name="description"
          content="世界一フルスタック開発を楽しむブログ"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-20 my-5">
        <div className="">
          <Profile />
        </div>

        <span className="text-3xl font-bold my-16 flex justify-center items-center">
          最近の投稿
        </span>
        <div className="my-20  flex justify-center item-center  flex-wrap">
          {postsByPage.map((post: any) => (
            <SinglePost
              title={post.title}
              description={post.description}
              tags={post.tags}
              slug={post.slug}
              postsimage={post.postsimage}
              createdtime={post.createdtime}
              updatedtime={post.updatedtime}
            />
          ))}
        </div>
      </main>
      <Pagination pageCount={pageCount} />
    </>
  );
}

export default Page;
