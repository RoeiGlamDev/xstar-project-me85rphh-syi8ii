import { useEffect, useState } from 'react';

/
 * Custom hook for animating elements in an elegant and luxurious manner.
 * This hook is tailored for luxury LRP cosmetics to enhance user experience with high-end animations.
 * 
 * @param {boolean} trigger - A boolean that triggers the animation when set to true.
 * @returns {string} - The class name for animation to be applied on the targeted component.
 */
export function useLuxuryAnimation(trigger: boolean): string {
    const [animationClass, setAnimationClass] = useState<string>('');

    useEffect(() => {
        if (trigger) {
            // Apply luxury animation classes for an elegant effect
            setAnimationClass('luxury-animation bounce-in');
            
            // Remove the class after the animation completes
            const timeoutId = setTimeout(() => {
                setAnimationClass('');
            }, 1000); // Duration of animation

            return () => clearTimeout(timeoutId);
        }
    }, [trigger]);

    return animationClass;
}

/
 * Custom hook to handle the entrance of luxury LRP cosmetics product showcase.
 * This hook can be utilized for animating product cards in a luxurious 3D style.
 * 
 * @param {boolean} isVisible - Flag indicating if the product is visible.
 * @returns {string} - CSS class for the 3D effect animation.
 */
export function useProductShowcaseAnimation(isVisible: boolean): string {
    const [showcaseClass, setShowcaseClass] = useState<string>('');

    useEffect(() => {
        if (isVisible) {
            // Add 3D effect class when the product is visible
            setShowcaseClass('showcase-3d-effect');
            
            // Reset class when the product is not visible
            const timeoutId = setTimeout(() => {
                setShowcaseClass('');
            }, 800); // Duration for 3D effect
            
            return () => clearTimeout(timeoutId);
        }
    }, [isVisible]);

    return showcaseClass;
}

/
 * Interface representing the product details for luxury LRP cosmetics.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

/
 * Function to format the price of products in a luxury format, including currency.
 * 
 * @param {number} price - The price of the product.
 * @returns {string} - Formatted price string for luxury LRP cosmetics.
 */
export function formatPrice(price: number): string {
    return €${price.toFixed(2)}; // Assuming Euro as currency for luxury LRP cosmetics
}