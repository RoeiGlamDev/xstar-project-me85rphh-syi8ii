import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
    name: string;
    price: string;
    features: string[];
}

const pricingPlans: PricingPlan[] = [
    {
        name: 'Luxury Glow Package',
        price: '$150',
        features: [
            'Includes 3 luxury cosmetic products',
            'Personalized beauty consultation',
            'Exclusive access to special events',
            'Free shipping on all orders',
        ],
    },
    {
        name: 'Radiant Elegance Package',
        price: '$250',
        features: [
            'Includes 5 luxury cosmetic products',
            'Personalized beauty consultation',
            'VIP access to exclusive launches',
            'Free shipping on all orders',
        ],
    },
    {
        name: 'Ultimate Indulgence Package',
        price: '$400',
        features: [
            'Includes 10 luxury cosmetic products',
            'Personalized beauty consultation',
            'One-on-one with our beauty experts',
            'Free shipping on all orders',
        ],
    },
];

const FAQ = [
    {
        question: 'What types of products do you offer?',
        answer: 'At luxury LRP cosmetics, we offer a range of high-end skincare and makeup products crafted with the finest ingredients.',
    },
    {
        question: 'How can I contact customer support?',
        answer: 'You can reach our customer support team via email at support@luxurylrpcosmetics.com or through our contact form on the website.',
    },
    {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we offer worldwide shipping to ensure that our luxury products are accessible to our valued customers.',
    },
];

const PricingPage: React.FC = () => {
    return (
        <div className="bg-white text-orange-600 p-8">
            <motion.div
                className="text-4xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Pricing Plans for luxury LRP cosmetics
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan) => (
                    <motion.div
                        key={plan.name}
                        className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
                        <p className="text-xl font-bold mb-4">{plan.price}</p>
                        <ul className="list-disc list-inside mb-4">
                            {plan.features.map((feature) => (
                                <li key={feature} className="text-gray-700">{feature}</li>
                            ))}
                        </ul>
                        <button className="bg-orange-600 text-white py-2 px-4 rounded transition-colors duration-200 hover:bg-orange-500">
                            Select Plan
                        </button>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="text-3xl font-bold text-center mt-12 mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Frequently Asked Questions
            </motion.h2>

            <div className="bg-orange-50 p-6 rounded-lg">
                {FAQ.map((item) => (
                    <div key={item.question} className="mb-4">
                        <h3 className="font-semibold text-lg">{item.question}</h3>
                        <p className="text-gray-700">{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPage;