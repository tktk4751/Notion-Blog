import { NUMBER_OF_POSTS_PER_PAGE } from "@/constants/constants";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getAllPosts = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DB_ID || "",
    page_size: 100,
  });
  const allPosts = posts.results;
  // return allPosts;
  return allPosts.map((post) => {
    return getPageMetadata(post);
  });
};

const getAlltags = (tags: []) => {
  const alltags = tags.map((tag: any) => {
    return tag.name;
  });

  return alltags;
};

const getPageMetadata = (post: any) => {
  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    description: post.properties.Description.rich_text[0].plain_text,
    // data: post.properties.Date.date.start,
    slug: post.properties.Slug.rich_text[0].plain_text,
    postsimage: post.properties.Posts_Image.files[0]
      ? post.properties.Posts_Image.files[0].file.url
      : "",
    tags: getAlltags(post.properties.Tags.multi_select),
    createdtime: post.properties.Created_Time.created_time,
    updatedtime: post.properties.Updated_Time.last_edited_time,
  };
};

export const getSinglePost = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DB_ID || "",
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0];
  const metadata = getPageMetadata(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  // console.log(mdString);
  return {
    metadata,
    markdown: mdString,
  };
};

export const getPostsForTopPage = async (pageSize = 6) => {
  const allPosts = await getAllPosts();
  const topPagePosts = allPosts.slice(0, pageSize);

  return topPagePosts;
};

export const getPostsByPage = async (page: number) => {
  const allPosts = await getAllPosts();

  const startIndex = (page - 1) * NUMBER_OF_POSTS_PER_PAGE;
  const endIndex = startIndex + NUMBER_OF_POSTS_PER_PAGE;
  return allPosts.slice(startIndex, endIndex);
};

export const getAllPageSize = async () => {
  const allPosts = await getAllPosts();
  const postsPerPage = 6; // 1ページあたりの投稿数
  const pageCounts = Math.ceil(allPosts.length / postsPerPage); // ページ数

  return pageCounts;
};
