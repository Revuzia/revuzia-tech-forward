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
    
    // Convert table-like data (pipe-separated values) to HTML tables
    processedContent = processedContent.replace(/(\|[^|\r\n]*\|[^|\r\n]*\|[^|\r\n]*.*?(?:\r?\n|$))+/g, function(match) {
      const lines = match.trim().split(/\r?\n/).filter(line => line.trim() && line.includes('|'));
      if (lines.length === 0) return match;
      
      const tableRows = lines.map((line, index) => {
        const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);
        if (cells.length < 2) return '';
        
        const cellTag = index === 0 ? 'th' : 'td';
        const cellStyle = index === 0 
          ? 'padding: 12px; text-align: left; font-weight: 600; color: rgb(0, 255, 191); border-bottom: 2px solid rgba(0, 255, 191, 0.3); background: rgba(0, 255, 191, 0.05);'
          : 'padding: 12px; text-align: left; border-bottom: 1px solid rgba(0, 255, 191, 0.1);';
        
        return `<tr>${cells.map(cell => `<${cellTag} style="${cellStyle}">${cell}</${cellTag}>`).join('')}</tr>`;
      }).filter(row => row).join('');
      
      if (!tableRows) return match;
      
      return `<div style="overflow-x: auto; margin: 2rem 0;"><table style="width: 100%; border-collapse: collapse; border: 1px solid rgba(0, 255, 191, 0.2); border-radius: 8px; overflow: hidden; font-family: Poppins, sans-serif; background: rgba(0, 0, 0, 0.02);">${tableRows}</table></div>`;
    });
    
    // Convert bullet points (- item, X item, ❌ item)
    processedContent = processedContent.replace(/^- (.+)$/gm, '<li style="margin-bottom: 0.5rem; margin-left: 1.5rem;">$1</li>');
    processedContent = processedContent.replace(/^X (.+)$/gm, '<li style="margin-bottom: 0.5rem; margin-left: 1.5rem;">$1</li>');
    processedContent = processedContent.replace(/^❌ (.+)$/gm, '<li style="margin-bottom: 0.5rem; margin-left: 1.5rem;">$1</li>');
    
    // Remove standalone dashes
    processedContent = processedContent.replace(/^—\s*$/gm, '');
    processedContent = processedContent.replace(/^-\s*$/gm, '');
    
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