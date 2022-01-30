import markdownToHtml from './markdownToHtml';

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
