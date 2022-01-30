import micromark from 'micromark'

const markdownToHtml = (markdown: string): string => micromark(markdown);

export default markdownToHtml
