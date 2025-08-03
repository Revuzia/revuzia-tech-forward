import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";

// Real author images from Meet Our Team section
const authorImages = {
  "Zara Velez": "/lovable-uploads/zara-velez-team-final.png",
  "Theo Chan": "/lovable-uploads/theo-chan-team-final.png",
  "Aria Lin": "/src/assets/author-aria.jpg",
  "Miles Danner": "/src/assets/author-miles.jpg", 
  "Raj Malhotra": "/src/assets/author-raj.jpg",
  "Imani Brooks": "/src/assets/author-imani.jpg"
};

const getAuthorImage = (authorName: string) => {
  // Always use the author's team photo consistently
  return authorImages[authorName as keyof typeof authorImages] || "/placeholder.svg";
};

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
          <div className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/20 transition-all duration-300 h-48">
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
              <div className="w-2/3 p-4 flex flex-col justify-between h-full">
                <h2 className="font-heading font-bold text-brand group-hover:text-brand/80 transition-colors duration-300 line-clamp-2 text-sm mb-2">
                  {title}
                </h2>
                <p className="text-xs text-white/70 mb-3 leading-relaxed">
                  {title.includes("iPhone") ? "Apple's latest innovations continue to reshape mobile technology and creative workflows. Advanced camera systems and AI-powered features make professional-grade content creation more accessible than ever." :
                   title.includes("Gaming") ? "Latest gaming hardware delivers unprecedented performance and immersive experiences. Our comprehensive testing reveals which products offer the best value for enthusiast gamers." :
                   title.includes("Audio") ? "Premium audio technology meets affordability in this comprehensive review. Experience studio-quality sound without breaking the bank with our expert recommendations." :
                   "Discover the latest innovations and expert insights in this comprehensive review. Our team provides detailed analysis to help you make informed decisions about the newest tech products."}
                </p>
                
                {/* Author and Meta Info */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border border-brand/20">
                      <AvatarImage src={getAuthorImage(author.name)} alt={author.name} />
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
        <div className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/20 transition-all duration-300 h-[400px] flex flex-col">
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
          <div className="p-6 space-y-4 flex-1 flex flex-col">
            <h2 className={`font-heading font-bold text-brand group-hover:text-brand/80 transition-colors duration-300 line-clamp-3 text-center flex-1 min-h-[4.5rem] ${isHero ? 'text-2xl' : 'text-lg'}`}>
              {title}
            </h2>
            
            {/* Author and Meta Info - Single Line */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8 border-2 border-brand/20">
                  <AvatarImage src={getAuthorImage(author.name)} alt={author.name} />
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