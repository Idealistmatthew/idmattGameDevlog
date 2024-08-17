import { ReactNode, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { ROOT_PATH } from "../constants/constants";
import { BlogPage } from "../components/BlogPage";

interface BlogLoadedMetadata {
  name: string;
  desc: string;
  date: Date;
  pathFromBlogRoot: string;
  pathToMarkdown: string;
}

interface BlogRouteMetadata {
  path: string;
  element: ReactNode;
}

const yaml = require("js-yaml");

export const BlogRoutes = () => {
  const [blogRouteMetadataList, setBlogRouteMetadataList] =
    useState<BlogRouteMetadata[]>();

  useEffect(() => {
    fetch("/constants/blog_metadata.yml")
      .then((response) => response.text())
      .then((text) => {
        const loadedMetadata = yaml
          .load(text)
          .metadata.map((metadata: any) => ({
            ...metadata,
            date: new Date(metadata.date),
          })) as BlogLoadedMetadata[];

        const newBlogRouteMetadataList: BlogRouteMetadata[] =
          loadedMetadata.map((metadata) => {
            const routeMetadata = {
              path: ROOT_PATH + "/" + metadata.pathFromBlogRoot,
              element: <BlogPage></BlogPage>,
            };
            return routeMetadata;
          });

        setBlogRouteMetadataList(newBlogRouteMetadataList);
      });
  }, []);

  //   const blogMetadataList: BlogMetadata[] = [
  //     {
  //       path: ROOT_PATH + "/Sample_Path",
  //       Element: <Button></Button>,
  //     },
  //     {
  //       path: ROOT_PATH + "/Sample_Path_2",
  //       Element: <Button></Button>,
  //     },
  //   ];
  return (
    <>
      {blogRouteMetadataList &&
        blogRouteMetadataList.map((blogRouteMetadata, index) => {
          <Route
            key={index}
            path={blogRouteMetadata.path}
            element={blogRouteMetadata.element}
          ></Route>;
        })}
    </>
  );
};
