import Head from "next/head";
import {
  getAllPageSize,
  getAllPosts,
  getPostsForTopPage,
} from "@/lib/notionAPI";
import { Profile } from "@/components/Profile";
import { SinglePost } from "@/components/posts/SinglePost";
import { Tabs } from "@/components/Tabs";
import Pagination from "@/components/Pagination";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const topPagePosts = await getPostsForTopPage();
  const pageCount = await getAllPageSize();

  return {
    props: {
      pageCount,
      topPagePosts,
    },
    revalidate: 60,
  };
};

interface Props {
  allPosts: any[];
}

export default function Home({ topPagePosts, pageCount }: any) {
  // console.log(allPosts);

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
          {topPagePosts.map((post: any) => (
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
