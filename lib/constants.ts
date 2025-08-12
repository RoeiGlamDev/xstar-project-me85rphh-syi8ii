export const BRAND_NAME = "luxury LRP cosmetics";

export const COLORS = {
    primary: "#FFA500", // Orange
    secondary: "#FFFFFF", // White
};

export const CONFIG = {
    siteTitle: ${BRAND_NAME} - Elevate Your Beauty,
    siteDescription: "Discover the elegance of luxury cosmetics with luxury LRP cosmetics. Our products are designed to enhance your natural beauty with sophistication and style.",
    contactEmail: "info@luxurylrpcosmetics.com",
    socialMediaLinks: {
        instagram: "https://www.instagram.com/luxurylrpcosmetics",
        facebook: "https://www.facebook.com/luxurylrpcosmetics",
        twitter: "https://twitter.com/luxurylrpcosmetics",
    },
    currency: "USD",
};

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    isFeatured: boolean;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string; // Consider using a hashed password for security
    address: string;
    isPremiumMember: boolean;
}

/
 * Function to format currency based on the business context.
 * @param amount - The amount to format.
 * @returns A formatted currency string.
 */
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: CONFIG.currency,
    }).format(amount);
}

/
 * Function to create a new product for the luxury LRP cosmetics line.
 * @param product - The product details to be added.
 * @returns The created product object.
 */
export function createProduct(product: Product): Product {
    // Business logic for creating a new product could include validation, etc.
    return {
        ...product,
        id: generateUniqueId(), // Placeholder for unique ID generation logic
    };
}

/
 * Function to generate a unique identifier (placeholder implementation).
 * @returns A unique identifier string.
 */
function generateUniqueId(): string {
    return (Math.random() * 1000000).toString(36);
}