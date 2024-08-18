import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import css from "./BlogPage.module.scss";
import { Section, SectionCard } from "@blueprintjs/core";

interface IBlogPage {
  markdownPath: string;
}

export const BlogPage = (_props: IBlogPage) => {
  const [markdownContent, setMarkdownContent] = useState("");
  useEffect(() => {
    console.log(_props.markdownPath);
    fetch(_props.markdownPath)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);
  // TODO: Stylise the Markdown content with neat css and other components to make it actually presentable

  return (
    <Section className={css.fixTopBar}>
      <SectionCard padded={true}>
        <ReactMarkdown children={markdownContent}></ReactMarkdown>
      </SectionCard>
    </Section>
  );
};
