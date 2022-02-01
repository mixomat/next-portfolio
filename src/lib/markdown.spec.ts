import { markdownToHtml, readMarkdownContent } from './markdown';

describe('markdown', () => {

  describe('markdownToHtml', () => {
    const markdown = `## Some title
  Some paragraph.
  
  Another paragraph.
  `;

    it('should contain title html for given markdown', () => {
      const result = markdownToHtml(markdown);
      expect(result).toContain('<h2>Some title</h2>');
    });

    it('should contain paragraph html for given markdown', () => {
      const result = markdownToHtml(markdown);
      expect(result).toContain('<p>Some paragraph.</p>');
      expect(result).toContain('<p>Another paragraph.</p>');
    });

    it('should handle empty string input', () => {
      expect(markdownToHtml('')).toBeEmpty();
    });
  });
  describe('readMarkdown', () => {
    it('should read the file content for a valid path', () => {
      const about = readMarkdownContent('about')
      expect(about).toStartWith('## About me')
      expect(about).toInclude('Hi, I’m Marc')
    });
  });

});
