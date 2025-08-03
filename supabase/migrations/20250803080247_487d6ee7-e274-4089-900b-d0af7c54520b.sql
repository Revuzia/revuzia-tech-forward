-- Update the buying guide article to assign it to "Best In Class" subcategory
UPDATE articles 
SET subCategory_name = 'Best In Class'
WHERE title = 'The Ultimate Creative Tech Buying Guide 2025: Best Apple Tools for Video, Music, and Productivity'
AND category_name = 'buying-guides';