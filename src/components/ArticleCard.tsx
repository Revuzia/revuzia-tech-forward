import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";

interface Author {
  name: string;
  avatar: string;
}

interface ArticleCardProps {
  title: string;
  image: string;
  author: Author;
  readTime: string;
  category: string;
  slug: string;
  isHero?: boolean;
}

const ArticleCard = ({ title, image, author, readTime, category, slug, isHero = false }: ArticleCardProps) => {
  const cardSizeClass = isHero ? "md:col-span-2 md:row-span-2" : "";
  const imageHeightClass = isHero ? "h-96" : "h-48";

  return (
    <article className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${cardSizeClass}`}>
      <Link to={`/articles/${slug}`} className="block">
        <div className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-brand/30 transition-all duration-300">
          {/* Image Container */}
          <div className={`relative ${imageHeightClass} overflow-hidden`}>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-background/90 text-white border-0 font-semibold px-3 py-1 rounded-full hover:bg-brand hover:text-black transition-colors duration-300">
                {category}
              </Badge>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 space-y-4">
            <h2 className={`font-bold text-white group-hover:text-brand transition-colors duration-300 line-clamp-3 text-center ${isHero ? 'text-2xl' : 'text-lg'}`}>
              {title}
            </h2>
            
            {/* Author and Meta Info - Centered and Spaced */}
            <div className="flex flex-col items-center gap-3 pt-2">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 border-2 border-brand/20">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback className="bg-brand/10 text-brand text-sm font-medium">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium text-white">{author.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-white" />
                <p className="text-sm text-white font-medium">{readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;