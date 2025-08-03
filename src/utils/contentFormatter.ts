import { marked } from 'marked';

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true
});

export const formatArticleContent = (content: string): string => {
  if (!content || typeof content !== 'string') {
    console.error('Content is not a string:', typeof content, content);
    return String(content || '');
  }
  
  try {
    // Process the markdown content with marked
    const markedResult = marked(content);
    let processedContent = typeof markedResult === 'string' ? markedResult : String(markedResult);
    
    // Post-process the HTML to add custom styling
    processedContent = processedContent
      // Style headings with brand color and glow effect for h2
      .replace(/<h2>/g, '<h2 style="color: rgb(0, 255, 191); font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0; font-family: Poppins, sans-serif; text-shadow: 0 0 10px rgba(0, 255, 191, 0.5), 0 0 20px rgba(0, 255, 191, 0.3), 0 0 30px rgba(0, 255, 191, 0.2);">')
      .replace(/<h([1,3-6])>/g, '<h$1 style="color: rgb(0, 255, 191); font-weight: bold; margin: 1.5rem 0 0.5rem 0; font-family: Poppins, sans-serif;">')
      
      // Style paragraphs
      .replace(/<p>/g, '<p style="margin-bottom: 1.5rem; line-height: 1.7; font-family: Poppins, sans-serif;">')
      
      // Style lists
      .replace(/<ul>/g, '<ul style="margin: 1rem 0; padding-left: 1.5rem; line-height: 1.7; font-family: Poppins, sans-serif;">')
      .replace(/<ol>/g, '<ol style="margin: 1rem 0; padding-left: 1.5rem; line-height: 1.7; font-family: Poppins, sans-serif;">')
      .replace(/<li>/g, '<li style="margin-bottom: 0.5rem;">')
      
      // Style images
      .replace(/<img([^>]*?)>/g, '<img$1 style="width:50%; max-width:600px; height:auto; margin:20px auto; display:block; border-radius:8px;" loading="lazy">')
      
      // Style links - special styling for Amazon/product links
      .replace(/<a href="([^"]*amazon[^"]*)"([^>]*)>(.*?)<\/a>/gi, '<a href="$1"$2 target="_blank" rel="noopener noreferrer" style="color: rgb(0, 255, 191); text-decoration: none; border: 2px solid rgb(0, 255, 191); padding: 8px 16px; border-radius: 6px; display: inline-block; margin: 4px 0; font-weight: 600; transition: all 0.3s ease; background: rgba(0, 255, 191, 0.1);" onmouseover="this.style.background=\'rgba(0, 255, 191, 0.2)\'" onmouseout="this.style.background=\'rgba(0, 255, 191, 0.1)\'">$3</a>')
      .replace(/<a href="([^"]*amzn\.to[^"]*)"([^>]*)>(.*?)<\/a>/gi, '<a href="$1"$2 target="_blank" rel="noopener noreferrer" style="color: rgb(0, 255, 191); text-decoration: none; border: 2px solid rgb(0, 255, 191); padding: 8px 16px; border-radius: 6px; display: inline-block; margin: 4px 0; font-weight: 600; transition: all 0.3s ease; background: rgba(0, 255, 191, 0.1);" onmouseover="this.style.background=\'rgba(0, 255, 191, 0.2)\'" onmouseout="this.style.background=\'rgba(0, 255, 191, 0.1)\'">$3</a>')
      
      // Style regular external links
      .replace(/<a href="(https?:\/\/[^"]*)"([^>]*)>(.*?)<\/a>/gi, (match, url, attrs, text) => {
        // Skip if already processed as Amazon link
        if (url.includes('amazon') || url.includes('amzn.to')) return match;
        return `<a href="${url}"${attrs} target="_blank" rel="noopener noreferrer" style="color: rgb(0, 255, 191); text-decoration: none; border-bottom: 1px dotted rgb(0, 255, 191); transition: all 0.3s ease; font-weight: 600;">${text}</a>`;
      })
      
      // Handle any remaining bracket links that weren't caught by markdown
      .replace(/\[([^\]]+)\]\s*(https?:\/\/[^\s\)]+)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: rgb(0, 255, 191); text-decoration: none; border: 2px solid rgb(0, 255, 191); padding: 8px 16px; border-radius: 6px; display: inline-block; margin: 4px 0; font-weight: 600; transition: all 0.3s ease; background: rgba(0, 255, 191, 0.1);">$1</a>')
      
      // Handle links in parentheses
      .replace(/\[([^\]]+)\]\s*\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: rgb(0, 255, 191); text-decoration: none; border: 2px solid rgb(0, 255, 191); padding: 8px 16px; border-radius: 6px; display: inline-block; margin: 4px 0; font-weight: 600; transition: all 0.3s ease; background: rgba(0, 255, 191, 0.1);">$1</a>')
      
      // Style bold text
      .replace(/<strong>/g, '<strong style="font-weight: 600; color: rgb(0, 255, 191);">')
      
      // Style code blocks
      .replace(/<pre><code>/g, '<pre style="background: rgba(0, 255, 191, 0.1); border: 1px solid rgba(0, 255, 191, 0.3); border-radius: 6px; padding: 1rem; margin: 1rem 0; overflow-x: auto;"><code style="color: rgb(0, 255, 191); font-family: monospace;">')
      
      // Style inline code
      .replace(/<code>/g, '<code style="background: rgba(0, 255, 191, 0.1); color: rgb(0, 255, 191); padding: 2px 4px; border-radius: 3px; font-family: monospace;">');
    
    return processedContent;
  } catch (error) {
    console.error('Error processing markdown:', error);
    // Fallback to basic HTML processing if markdown fails
    return content
      .replace(/\n\n/g, '</p><p style="margin-bottom: 1.5rem; line-height: 1.7; font-family: Poppins, sans-serif;">')
      .replace(/^(?!<)/, '<p style="margin-bottom: 1.5rem; line-height: 1.7; font-family: Poppins, sans-serif;">')
      .replace(/(?!>)$/, '</p>');
  }
};