import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import css from "./BlogPage.module.scss";
import { Section, SectionCard } from "@blueprintjs/core";

interface IBlogPage {
  markdownPath: string;
}

async function getMarkdown(markdownPath: string) {
  console.log(markdownPath, "markdownPath");
  const module = await import(markdownPath + "?raw");
  console.log(module, "module");
  return module.default;
}

export const BlogPage = (_props: IBlogPage) => {
  const [markdownContent, setMarkdownContent] = useState("");
  useEffect(() => {
    getMarkdown(_props.markdownPath).then(setMarkdownContent);
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
