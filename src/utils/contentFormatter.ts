export const formatArticleContent = (content: string): string => {
  return content
    // Convert H2: markers to actual h2 tags with glow effect
    .replace(/H2:\s*(.*?)(?=\n|$)/g, '<h2 style="color: rgb(0, 255, 191); font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0; font-family: Poppins, sans-serif; text-shadow: 0 0 10px rgba(0, 255, 191, 0.5), 0 0 20px rgba(0, 255, 191, 0.3), 0 0 30px rgba(0, 255, 191, 0.2);">$1</h2>')
    // Convert product names in brackets to clickable Amazon links
    .replace(/\[([^\]]+)\]\s*(https?:\/\/[^\s]+)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: rgb(0, 255, 191); text-decoration: none; border-bottom: 1px dotted rgb(0, 255, 191); transition: all 0.3s ease;">[$1]</a>')
    // Ensure proper paragraph spacing
    .replace(/\n\n/g, '</p><p style="margin-bottom: 1.5rem; line-height: 1.7; font-family: Poppins, sans-serif;">')
    // Make images much smaller (20-25% width)
    .replace(/style="width:100%"/g, 'style="width:25%; margin: 1.5rem auto; display: block;"')
    .replace(/style="width:60%"/g, 'style="width:25%; margin: 1.5rem auto; display: block;"')
    .replace(/style="width:40%"/g, 'style="width:25%; margin: 1.5rem auto; display: block;"')
    // Add proper paragraph tags at start and end
    .replace(/^(?!<)/, '<p style="margin-bottom: 1.5rem; line-height: 1.7; font-family: Poppins, sans-serif;">')
    .replace(/(?!>)$/, '</p>');
};