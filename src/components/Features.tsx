
import React from 'react';
import { 
  Sparkles, 
  Bot, 
  HeartHandshake, 
  TrendingUp
} from 'lucide-react';

const features = [
  {
    title: "AI-Powered Travel Planning",
    description: "Our intelligent system creates personalized travel plans based on your preferences, budget, and travel style.",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
  },
  {
    title: "Virtual Travel Assistant",
    description: "Meet your personal AI travel companion that assists with planning, booking, and real-time support during your trip.",
    icon: <Bot className="h-8 w-8 text-primary" />,
  },
  {
    title: "Mood Matching",
    description: "We analyze your emotional state and preferences to recommend the perfect destinations that match your current mood.",
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
  },
  {
    title: "Price Prediction",
    description: "Our AI analyzes pricing trends to suggest when to book for the best deals and savings on your travel packages.",
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
  },
];

const Features = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Future of Travel Planning</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            OLiver Travels uses cutting-edge AI technology to create seamless, personalized travel experiences that match your unique preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md card-hover-effect"
            >
              <div className="mb-4 bg-accent/10 p-3 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
