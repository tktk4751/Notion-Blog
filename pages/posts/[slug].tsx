import CTA from "@/components/CTA";
import { getAllPosts, getSinglePost } from "@/lib/notionAPI";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  title: string;
  description: string;
  data: string;
  tags: string;
  slug: string;
  postsimage: string;
  post: string;
};
export async function getStaticPaths() {
  const allPosts = await getAllPosts();
  // console.log(allPosts);
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps = async ({ params }: any) => {
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

const posts = ({ post }: any) => {
  const SinglePost = (props: Props) => {
    const { title, description, data, tags, slug, postsimage } = props;
  };
  return (
    <>
      <div>
        <section className="container mx-auto  ">
          <h1 className="text-5xl font-bold mt-20 justify-center text-center ">
            {post.metadata.title}
          </h1>
          {/* <div className="border-b-2 w-1/3 mt-3"></div> */}

          <div className=" justify-center text-center">
            <div className="flex justify-center items-center">
              {post.metadata.createdtime.substring(0, 10) ===
              post.metadata.updatedtime.substring(0, 10) ? (
                <p className="mt-16 mx-1 text-lg font-style: italic font-normal">
                  Created at : {post.metadata.createdtime.substring(0, 10)}
                </p>
              ) : (
                <p className="mt-16 synthwave:text-gray-200 text-lg font-style: italic font-extralight">
                  Created at : {post.metadata.createdtime.substring(0, 10)}
                  {"  "}
                  Updated at : {post.metadata.updatedtime.substring(0, 10)}
                </p>
              )}
            </div>
            {post.metadata.tags.map((tag: any) => (
              <p className="mt-4 mb-20 mx-1 text-gray-700 text-md badge badge-accent font-style: italic font-semibold">
                {tag}
              </p>
            ))}
          </div>
          <div className="flex justify-center items-center px-4">
            <div className="mb-20 font-normal text-xl max-w-screen-lg ">
              <ReactMarkdown
                children={post.markdown}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={dracula}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <div className=" max-w-2xl rounded-3xl">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </div>
                    );
                  },
                }}
              ></ReactMarkdown>
            </div>
          </div>
        </section>
        <div className=" my-20">
          <CTA />
        </div>
      </div>
    </>
  );
};

export default posts;
