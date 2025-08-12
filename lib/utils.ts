import { format } from 'date-fns';

/
 * Utility functions for luxury LRP cosmetics application
 * @module utils
 */

/
 * Interface representing a cosmetic product
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    isFeatured: boolean;
}

/
 * Function to format the price of a cosmetic product
 * @param price - The price of the product
 * @returns A string representing the formatted price
 */
export function formatPrice(price: number): string {
    return $${price.toFixed(2)};
}

/
 * Function to capitalize the first letter of each word in a string
 * @param input - The input string to be formatted
 * @returns The formatted string with each word capitalized
 */
export function capitalizeWords(input: string): string {
    return input.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
}

/
 * Function to generate a unique identifier for a product
 * @returns A unique string identifier
 */
export function generateProductId(): string {
    return luxury-lrp-cosmetics-${Date.now()};
}

/
 * Function to create a featured product object
 * @param name - The name of the product
 * @param description - The description of the product
 * @param price - The price of the product
 * @param category - The category of the product
 * @param imageUrl - The image URL of the product
 * @returns A CosmeticProduct object
 */
export function createFeaturedProduct(name: string, description: string, price: number, category: string, imageUrl: string): CosmeticProduct {
    return {
        id: generateProductId(),
        name: capitalizeWords(name),
        description,
        price,
        category,
        imageUrl,
        isFeatured: true,
    };
}

/
 * Function to format date for luxury LRP cosmetics promotions
 * @param date - The date to format
 * @returns A string representing the formatted date
 */
export function formatPromotionDate(date: Date): string {
    return format(date, 'MMMM d, yyyy');
}