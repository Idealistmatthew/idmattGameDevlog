import { Card } from "@blueprintjs/core";
import { BlogLoadedMetadata } from "../App";
import { useNavigate } from "react-router-dom";
import { ROOT_PATH } from "../constants/constants";
import css from "./BlogCard.module.scss";

interface IBlogCard {
  blogLoadedMetadata: BlogLoadedMetadata;
}

export const BlogCard = (_props: IBlogCard) => {
  const { name, desc, date, pathFromBlogRoot } = _props.blogLoadedMetadata;

  const navigate = useNavigate();

  return (
    <Card
      className={css.BlogCard}
      onClick={() => navigate(ROOT_PATH + "/blogs/" + pathFromBlogRoot)}
      interactive={true}
    >
      <h3>{name}</h3>
      <h4>{desc}</h4>
      <p>Created at: {date.toString()}</p>
    </Card>
  );
};
