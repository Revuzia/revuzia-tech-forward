import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import aiPodcastGeopolitics from "@/assets/ai-podcast-geopolitics.jpg";
import aiPodcastWildWest from "@/assets/ai-podcast-wild-west.jpg";
import aiPodcastRapidAscent from "@/assets/ai-podcast-rapid-ascent.jpg";
import aiPodcastCuttingEdge from "@/assets/ai-podcast-cutting-edge.jpg";
import aiPodcastImmediateImpact from "@/assets/ai-podcast-immediate-impact.jpg";
import aiPodcastParadox from "@/assets/ai-podcast-paradox.jpg";
import aiPodcastTrillionTangle from "@/assets/ai-podcast-trillion-tangle.jpg";
import aiPodcastElonLawsuit from "@/assets/ai-podcast-elon-lawsuit.jpg";

const AIPodcasts = () => {
  const podcastData = [
    {
      title: "AI Unleashed: From Elon's Lawsuit to Chatbot Tragedies, Navigating AI's Wild Frontier",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_Unleashed__From_Elon_s_Lawsuit_to_Chatbot_Tragedies%2C_Navigating_AI_s_Wild_Frontier.m4a",
      image: aiPodcastElonLawsuit,
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "43:25",
    },
    {
      title: "AI Unleashed: Geopolitics, Jobs, and the Race for Tomorrow's Tech",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_Unleashed__Geopolitics%2C_Jobs%2C_and_the_Race_for_Tomorrow_s_Tech.m4a",
      image: aiPodcastGeopolitics,
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "45:20",
    },
    {
      title: "AI's Wild West: Fake Content, Financial Fights, and Failing Safety",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Wild_West__Fake_Content%2C_Financial_Fights%2C_and_Failing_Safety.m4a",
      image: aiPodcastWildWest,
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "38:15",
    },
    {
      title: "AI's Rapid Ascent: Billions, Space, and the Global Race for Dominance",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Rapid_Ascent__Billions%2C_Space%2C_and_the_Global_Race_for_Dominance.m4a",
      image: aiPodcastRapidAscent,
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "42:30",
    },
    {
      title: "AI's Cutting Edge: Data Wars, Deepfakes, and the Justice System",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Cutting_Edge__Data_Wars%2C_Deepfakes%2C_and_the_Justice_System.m4a",
      image: aiPodcastCuttingEdge,
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "41:15",
    },
    {
      title: "AI's Immediate Impact: Job Market Shock, Psychological Peril, and Siri's Stealthy Evolution",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Immediate_Impact__Job_Market_Shock%2C_Psychological_Peril%2C_and_Siri_s_Stealthy_Evolution.m4a",
      image: aiPodcastImmediateImpact,
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "39:45",
    },
    {
      title: "The AI Paradox: From DHL's 'Ja' Flub to Billionaire Battles and Your Digital Future",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/The_AI_Paradox__From_DHL_s__Ja__Flub_to_Billionaire_Battles_and_Your_Digital_Future.m4a",
      image: aiPodcastParadox,
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "44:12",
    },
    {
      title: "AI's Trillion-Dollar Tangle: Copyright, Warships, and K-12 Coders",
      audioUrl: "https://pub-4f1ef9f21cb54c8186d298f94b3277fe.r2.dev/Revuzia-Audio/AI_s_Trillion-Dollar_Tangle__Copyright%2C_Warships%2C_and_K-12_Coders.m4a",
      image: aiPodcastTrillionTangle,
      author: {
        name: "Revuzia AI",
        avatar: "",
      },
      duration: "46:33",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-article-heading font-bold text-brand mb-4">AI Podcasts</h1>
          <p className="text-xl text-white/100">Listen to the latest AI news and insights — all generated with NotebookLM, Google's experimental AI tool for podcast creation.</p>
          <p className="text-xl text-white/100 mt-4">Yes, you read that right — these episodes aren't recorded in a studio, they're conjured up by AI. It's all part of the great AI "takeover"… don't worry, it's a friendly one (so far).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcastData.map((podcast, index) => (
            <AudioPlayer
              key={index}
              title={podcast.title}
              audioUrl={podcast.audioUrl}
              image={podcast.image}
              author={podcast.author}
              duration={podcast.duration}
              isLarge={true}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIPodcasts;