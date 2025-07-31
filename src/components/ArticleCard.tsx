import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";

interface ArticleCardProps {
  title: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  category: string;
  slug: string;
  isHero?: boolean;
}

const ArticleCard = ({ title, image, author, readTime, category, slug, isHero = false }: ArticleCardProps) => {
  const cardClasses = isHero 
    ? "group relative overflow-hidden rounded-lg bg-gradient-card border border-border hover:border-brand/50 transition-all duration-300 hover:shadow-glow-primary col-span-2 row-span-2"
    : "group relative overflow-hidden rounded-lg bg-gradient-card border border-border hover:border-brand/50 transition-all duration-300 hover:shadow-glow-primary";

  return (
    <Link to={`/article/${slug}`} className={cardClasses}>
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            isHero ? 'h-80' : 'h-48'
          }`}
          width={isHero ? "600" : "400"}
          height={isHero ? "320" : "192"}
          loading={isHero ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand/20 text-brand border border-brand/30">
            {category}
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className={`font-bold text-foreground mb-3 line-clamp-3 group-hover:text-brand transition-colors duration-300 ${
          isHero ? 'text-2xl mb-4' : 'text-lg'
        }`}>
          {title}
        </h3>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img 
              src={author.avatar} 
              alt={author.name}
              className="w-8 h-8 rounded-full border-2 border-brand/30"
              width="32"
              height="32"
              loading="lazy"
            />
            <span className="text-muted-foreground text-sm font-medium">{author.name}</span>
          </div>
          
          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;