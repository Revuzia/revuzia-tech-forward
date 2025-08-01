import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const VideoReviews = () => {
  const videos = [
    {
      title: "RTX 5090 Gaming Laptop Full Review",
      thumbnail: "/lovable-uploads/d72cd261-6580-4fde-8fc1-c96bbcf98b2e.png",
      duration: "15:32",
      views: "125K",
      published: "2 days ago",
    },
    {
      title: "Samsung Galaxy S25 Ultra Camera Test",
      thumbnail: "/lovable-uploads/d72cd261-6580-4fde-8fc1-c96bbcf98b2e.png",
      duration: "12:45",
      views: "89K",
      published: "1 week ago",
    },
    // ... more videos would be added here
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Video Reviews</h1>
          <p className="text-xl text-muted-foreground">Watch our expert video reviews of the latest tech products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="hero" size="lg" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand/90 rounded-full border-2 border-black">
                    <Play className="w-6 h-6 text-black" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h3>
                <div className="text-muted-foreground text-sm">
                  <span>{video.views} views</span>
                  <span className="mx-2">•</span>
                  <span>{video.published}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://youtube.com/@revuzia', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View on YouTube
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VideoReviews;