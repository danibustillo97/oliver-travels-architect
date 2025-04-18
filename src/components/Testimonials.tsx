
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "The AI travel assistant completely transformed our vacation planning. It suggested activities we never would have found on our own and saved us hours of research.",
    author: "Sarah Johnson",
    position: "Family Traveler",
    rating: 5,
  },
  {
    content: "As a solo traveler, safety is my priority. OLiver Travels not only recommended safe areas but also connected me with other solo travelers for group activities.",
    author: "Mark Thompson",
    position: "Adventure Seeker",
    rating: 5,
  },
  {
    content: "The mood matching feature is incredible! I was feeling stressed and needed relaxation, and the AI recommended the perfect beach retreat that was exactly what I needed.",
    author: "Elena Rodriguez",
    position: "Wellness Enthusiast",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from travelers who have discovered their perfect trips with OLiver Travels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md card-hover-effect"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
