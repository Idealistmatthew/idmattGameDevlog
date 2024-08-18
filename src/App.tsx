import css from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { ROOT_PATH } from "./constants/constants";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { AppNavbar } from "./components/AppNavbar";
import { BlogRoutes } from "./util_components/BlogRoutes";
import YamlContent from "./constants/blog_metadata.yaml";

export interface BlogLoadedMetadata {
  name: string;
  desc: string;
  date: Date;
  pathFromBlogRoot: string;
  markdownFileName: string;
}

function App() {
  const blogLoadedMetadataList = (YamlContent.metadata as any[]).map(
    (metadata: any) => {
      console.log(metadata.date, "date");
      const dateParts = metadata.date.split("/");
      return {
        ...metadata,
        date: new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]),
      };
    }
  ) as BlogLoadedMetadata[];

  console.log(blogLoadedMetadataList);

  return (
    <div className={css.AppContainer}>
      <AppNavbar></AppNavbar>
      <Routes>
        <Route
          path={ROOT_PATH + "/"}
          element={
            <Home blogLoadedMetadataList={blogLoadedMetadataList}></Home>
          }
        />
        <Route path={ROOT_PATH + "/About"} element={<About></About>} />
        {blogLoadedMetadataList && (
          <Route
            path={ROOT_PATH + "/blogs/*"}
            element={
              <BlogRoutes
                blogLoadedMetadataList={blogLoadedMetadataList}
              ></BlogRoutes>
            }
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
