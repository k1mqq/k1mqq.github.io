import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export const getMarkdownFiles = (dirPath: string) => {
  return fs.readdirSync(dirPath).map((fileName) => {
    return fileName.replace(/\.md$/, "");
  });
};

export const getMarkdown = (filePath: string) => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return matter(fileContents);
};

export const markdownToHtml = async (markdownContent: string) => {
  const result = await remark().use(remarkHtml).process(markdownContent);
  return result.toString();
};
