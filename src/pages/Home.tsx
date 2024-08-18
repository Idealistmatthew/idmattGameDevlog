import { BlogLoadedMetadata } from "../App";
import { PostList } from "../components/PostList";
import css from "./Home.module.scss";

interface IHome {
  blogLoadedMetadataList: BlogLoadedMetadata[];
}

export const Home = (_props: IHome) => {
  return (
    <PostList
      className={css.PostList}
      blogLoadedMetadataList={_props.blogLoadedMetadataList}
    ></PostList>
  );
};
