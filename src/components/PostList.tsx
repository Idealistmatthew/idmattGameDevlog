interface IPostList {
  className: string;
}

export const PostList = (props: IPostList) => {
  const { className } = props;
  return <div className={className}>Assume that posts are rendered here</div>;
};
