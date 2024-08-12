import { PostList } from "../components/PostList";
import css from "./Home.module.scss";

export const Home = () => {
  return <PostList className={css.PostList}></PostList>;
};
