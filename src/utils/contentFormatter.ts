export const formatArticleContent = (content: string): string => {
  if (!content || typeof content !== 'string') {
    return String(content || '');
  }
  
  try {
    let processedContent = content;
    
    // Convert ### headings to h3
    processedContent = processedContent.replace(/^### (.+)$/gm, '<h3 style="color: rgb(0, 255, 191); font-size: 1.25rem; font-weight: bold; margin: 1.5rem 0 0.5rem 0; font-family: Poppins, sans-serif;">$1</h3>');
    
    // Convert ## headings to h2 with glow effect  
    processedContent = processedContent.replace(/^## (.+)$/gm, '<h2 style="color: rgb(0, 255, 191); font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0; font-family: Poppins, sans-serif; text-shadow: 0 0 10px rgba(0, 255, 191, 0.5), 0 0 20px rgba(0, 255, 191, 0.3), 0 0 30px rgba(0, 255, 191, 0.2);">$1</h2>');
    
    // Convert H2: pattern specifically 
    processedContent = processedContent.replace(/^H2:\s*(.+)$/gm, '<h2 style="color: rgb(0, 255, 191); font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0; font-family: Poppins, sans-serif; text-shadow: 0 0 10px rgba(0, 255, 191, 0.5), 0 0 20px rgba(0, 255, 191, 0.3), 0 0 30px rgba(0, 255, 191, 0.2);">$1</h2>');
    
    // Convert # headings to h1
    processedContent = processedContent.replace(/^# (.+)$/gm, '<h1 style="color: rgb(0, 255, 191); font-weight: bold; margin: 1.5rem 0 0.5rem 0; font-family: Poppins, sans-serif;">$1</h1>');
    
    // Convert **bold** text
    processedContent = processedContent.replace(/\*\*(.+?)\*\*/g, '<strong style="font-weight: 600; color: rgb(0, 255, 191);">$1</strong>');
    
    // Convert horizontal rules --- to hr
    processedContent = processedContent.replace(/^---$/gm, '<hr style="border: none; border-top: 1px solid rgba(0, 255, 191, 0.3); margin: 2rem 0;">');
    
    // Style Amazon/product links
    processedContent = processedContent.replace(/\[([^\]]+)\]\s*(https?:\/\/[^\s\)]*amazon[^\s\)]*)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: rgb(0, 255, 191); text-decoration: none; border: 2px solid rgb(0, 255, 191); padding: 8px 16px; border-radius: 6px; display: inline-block; margin: 4px 0; font-weight: 600; transition: all 0.3s ease; background: rgba(0, 255, 191, 0.1);" onmouseover="this.style.background=\'rgba(0, 255, 191, 0.2)\'" onmouseout="this.style.background=\'rgba(0, 255, 191, 0.1)\'">$1</a>');
    
    processedContent = processedContent.replace(/\[([^\]]+)\]\s*(https?:\/\/[^\s\)]*amzn\.to[^\s\)]*)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: rgb(0, 255, 191); text-decoration: none; border: 2px solid rgb(0, 255, 191); padding: 8px 16px; border-radius: 6px; display: inline-block; margin: 4px 0; font-weight: 600; transition: all 0.3s ease; background: rgba(0, 255, 191, 0.1);" onmouseover="this.style.background=\'rgba(0, 255, 191, 0.2)\'" onmouseout="this.style.background=\'rgba(0, 255, 191, 0.1)\'">$1</a>');
    
    // Style regular links  
    processedContent = processedContent.replace(/\[([^\]]+)\]\s*\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: rgb(0, 255, 191); text-decoration: none; border-bottom: 1px dotted rgb(0, 255, 191); transition: all 0.3s ease; font-weight: 600;">$1</a>');
    
    // Convert bullet points (- item)
    processedContent = processedContent.replace(/^- (.+)$/gm, '<li style="margin-bottom: 0.5rem; margin-left: 1.5rem;">$1</li>');
    
    // Wrap consecutive <li> elements in <ul>
    processedContent = processedContent.replace(/(<li[^>]*>.*?<\/li>)(\s*<li[^>]*>.*?<\/li>)*/g, function(match) {
      return '<ul style="margin: 1rem 0; padding-left: 1.5rem; line-height: 1.7; font-family: Poppins, sans-serif;">' + match + '</ul>';
    });
    
    // Convert line breaks to paragraphs
    processedContent = processedContent.replace(/\n\n/g, '</p><p style="margin-bottom: 1.5rem; line-height: 1.7; font-family: Poppins, sans-serif;">');
    
    // Wrap in opening/closing paragraph tags if not already wrapped
    if (!processedContent.startsWith('<')) {
      processedContent = '<p style="margin-bottom: 1.5rem; line-height: 1.7; font-family: Poppins, sans-serif;">' + processedContent;
    }
    if (!processedContent.endsWith('>')) {
      processedContent = processedContent + '</p>';
    }
    
    return processedContent;
  } catch (error) {
    console.error('Error processing content:', error);
    return content;
  }
};