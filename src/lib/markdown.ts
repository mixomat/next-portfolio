import fs from 'fs';
import { join } from 'path';
import micromark from 'micromark';

const contentDirectory = join(process.cwd(), 'src/content');

export const markdownToHtml = (markdown: string): string => micromark(markdown);

export const readMarkdownContent = (name: string): string => {
  const fullPath = join(contentDirectory, `${name}.md`);
  return markdownToHtml(fs.readFileSync(fullPath, 'utf-8'));
};

