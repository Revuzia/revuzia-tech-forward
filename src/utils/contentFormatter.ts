export const formatArticleContent = (content: string): string => {
  return content
    // Convert H2: markers to actual h2 tags
    .replace(/H2:\s*(.*?)(?=\n|$)/g, '<h2 style="color: #10b981; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0; font-family: Poppins, sans-serif;">$1</h2>')
    // Ensure proper paragraph spacing
    .replace(/\n\n/g, '</p><p style="margin-bottom: 1.5rem; line-height: 1.7; font-family: Poppins, sans-serif;">')
    // Make images smaller (60% width instead of 100%)
    .replace(/style="width:100%"/g, 'style="width:60%; margin: 1.5rem auto; display: block;"')
    // Add proper paragraph tags at start and end
    .replace(/^(?!<)/, '<p style="margin-bottom: 1.5rem; line-height: 1.7; font-family: Poppins, sans-serif;">')
    .replace(/(?!>)$/, '</p>');
};