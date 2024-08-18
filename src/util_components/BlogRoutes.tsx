import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { BlogPage } from "../components/BlogPage";
import { BlogLoadedMetadata } from "../App";

export interface BlogRoutesProps {
  blogLoadedMetadataList: BlogLoadedMetadata[];
}

interface BlogRouteMetadata {
  path: string;
  element: ReactNode;
}

export const BlogRoutes = (_props: BlogRoutesProps) => {
  const blogRouteMetadataList: BlogRouteMetadata[] =
    _props.blogLoadedMetadataList.map((metadata) => {
      const markdownPath = `../blog_markdowns/${metadata.markdownFileName}.md`;
      return {
        path: metadata.pathFromBlogRoot,
        element: <BlogPage markdownPath={markdownPath}></BlogPage>,
      };
    });

  return (
    <Routes>
      {blogRouteMetadataList.map((blogRouteMetadata, index) => {
        console.log(blogRouteMetadata, "blogRouteMetadata");
        return (
          <Route
            key={index}
            path={blogRouteMetadata.path}
            element={blogRouteMetadata.element}
          ></Route>
        );
      })}
    </Routes>
  );
};
