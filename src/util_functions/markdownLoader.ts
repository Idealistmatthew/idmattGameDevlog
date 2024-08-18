
const markdownModules = import.meta.glob('./blog_markdowns/*.md');

export async function loadMarkdown() {
  const markdownPromises = Object.keys(markdownModules).map(async (path) => {
    const module = await markdownModules[path]();
    return { path, content: module.default };
  });
  
  return Promise.all(markdownPromises);
}