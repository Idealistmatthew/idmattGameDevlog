import { CardList } from "@blueprintjs/core";
import { BlogLoadedMetadata } from "../App";
import { BlogCard } from "./BlogCard";

interface IPostList {
  blogLoadedMetadataList: BlogLoadedMetadata[];
  className: string;
}

export const PostList = (props: IPostList) => {
  const { className, blogLoadedMetadataList } = props;
  // Use the blog Loaded MetadataList to render cards that link to the blog posts
  return (
    <CardList className={className}>
      {blogLoadedMetadataList.map((blogMetadata, index) => {
        return (
          <BlogCard blogLoadedMetadata={blogMetadata} key={index}></BlogCard>
        );
      })}
    </CardList>
  );
};
