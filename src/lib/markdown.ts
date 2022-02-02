import fs from 'fs';
import { join } from 'path';
import micromark from 'micromark';

const contentDirectory = join(process.cwd(), 'src/content');

type Converter = (content: string) => string
export const markdownToHtml: Converter = (markdown: string): string => micromark(markdown);

export const readMarkdownContent = (name: string, convert: Converter = markdownToHtml): string => {
  return convert(readFileContent(name));
};

const readFileContent = function(name: string) {
  const fullPath = join(contentDirectory, `${name}.md`);
  return fs.readFileSync(fullPath, 'utf-8');
};

