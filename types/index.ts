import { ProductCategory, User } from './commonTypes';

/
 * Interface representing a product in the luxury LRP cosmetics line.
 */
export interface Product {
  id: string; // Unique identifier for the product
  name: string; // Name of the product
  description: string; // Detailed description of the product
  price: number; // Price of the product
  category: ProductCategory; // Category the product belongs to
  imageUrl: string; // URL of the product image
  isFeatured: boolean; // Indicates if the product is featured
}

/
 * Interface representing a user in the luxury LRP cosmetics application.
 */
export interface LuxuryLRPUser extends User {
  loyaltyPoints: number; // Points accumulated by the user for loyalty program
  preferredCategories: ProductCategory[]; // Categories the user prefers
}

/
 * Interface representing the cosmetics business information.
 */
export interface BusinessInfo {
  brandName: string; // Brand name of the cosmetics line
  tagline: string; // Tagline for luxury LRP cosmetics
  contactEmail: string; // Contact email for customer inquiries
  socialMediaLinks: {
    facebook?: string; // Facebook link
    instagram?: string; // Instagram link
    twitter?: string; // Twitter link
  }; // Social media links for marketing
}

/
 * Function to create a new product for luxury LRP cosmetics.
 * @param product - The product details to be added.
 * @returns The newly created product.
 */
export function createProduct(product: Product): Product {
  // Business logic to save the product can be added here
  return product; // Returning the created product for now
}

/
 * Example of luxury LRP cosmetics business information.
 */
export const businessInfo: BusinessInfo = {
  brandName: 'luxury LRP cosmetics',
  tagline: 'Elevate Your Beauty with Luxury',
  contactEmail: 'contact@luxurylrpcosmetics.com',
  socialMediaLinks: {
    facebook: 'https://facebook.com/luxurylrpcosmetics',
    instagram: 'https://instagram.com/luxurylrpcosmetics',
    twitter: 'https://twitter.com/luxurylrpcosmetics',
  },
};