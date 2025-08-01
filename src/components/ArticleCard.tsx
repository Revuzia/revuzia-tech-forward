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
  isHorizontal?: boolean;
}

const ArticleCard = ({ title, image, author, readTime, category, slug, isHero = false, isHorizontal = false }: ArticleCardProps) => {
  const cardSizeClass = "";
  const imageHeightClass = isHero ? "h-48" : isHorizontal ? "h-32" : "h-40";

  if (isHorizontal) {
    return (
      <article className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${cardSizeClass}`}>
        <Link to={`/articles/${slug}`} className="block">
          <div className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-brand/30 transition-all duration-300 h-full">
            <div className="flex h-full">
              {/* Image Container - Left Side */}
              <div className={`relative w-1/3 overflow-hidden`}>
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-card/90 text-white border-0 font-semibold px-2 py-1 text-xs rounded-full group-hover:bg-brand group-hover:text-black transition-all duration-300">
                    {category}
                  </Badge>
                </div>
              </div>
              
              {/* Content - Right Side */}
              <div className="w-2/3 p-4 flex flex-col justify-center">
                <h2 className="font-heading font-bold text-white group-hover:text-brand transition-colors duration-300 line-clamp-2 text-sm mb-1">
                  {title}
                </h2>
                <p className="text-xs text-white/70 mb-2 line-clamp-1">
                  Discover the latest innovations and expert insights in this comprehensive review.
                </p>
                
                {/* Author and Meta Info */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border border-brand/20">
                      <AvatarImage src={author.avatar} alt={author.name} />
                      <AvatarFallback className="bg-brand/10 text-brand text-xs font-medium">
                        {author.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-xs font-medium text-white font-body">{author.name}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-white" />
                    <p className="text-xs text-white font-medium font-body">{readTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${cardSizeClass}`}>
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
              <Badge className="bg-card/90 text-white border-0 font-semibold px-3 py-1 rounded-full group-hover:bg-brand group-hover:text-black transition-all duration-300">
                {category}
              </Badge>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 space-y-4">
            <h2 className={`font-heading font-bold text-white group-hover:text-brand transition-colors duration-300 line-clamp-3 text-center ${isHero ? 'text-2xl' : 'text-lg'}`}>
              {title}
            </h2>
            
            {/* Author and Meta Info - Single Line */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8 border-2 border-brand/20">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback className="bg-brand/10 text-brand text-xs font-medium">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm font-medium text-white font-body">{author.name}</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-white" />
                <p className="text-sm text-white font-medium font-body">{readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;