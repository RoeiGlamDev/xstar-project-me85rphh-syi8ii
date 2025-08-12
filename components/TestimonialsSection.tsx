import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photo: string;
  rating: number;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Adams',
    photo: '/images/sophia.jpg',
    rating: 5,
    content: 'Luxury LRP cosmetics transformed my skincare routine! My skin has never felt so radiant and smooth. The quality is unparalleled!',
  },
  {
    name: 'Olivia Martinez',
    photo: '/images/olivia.jpg',
    rating: 5,
    content: 'I am obsessed with the luxurious feel of the lipsticks! They apply so smoothly and last all day. Highly recommend!',
  },
  {
    name: 'Isabella Johnson',
    photo: '/images/isabella.jpg',
    rating: 5,
    content: 'The packaging is absolutely stunning and the products exceed my expectations. Luxury LRP cosmetics is my new go-to brand!',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white border border-orange-200 rounded-lg shadow-lg p-6 m-4 max-w-xs transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-orange-500">{testimonial.name}</h3>
              <div className="flex items-center justify-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.121-6.528L0 6.382l6.588-.961L10 0l2.412 5.421L20 6.382l-5.243 4.580 1.121 6.528L10 15z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;