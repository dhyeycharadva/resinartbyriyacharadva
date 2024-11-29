export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  // Keychains
  {
    id: 1,
    name: "Ocean Wave Keychain",
    price: 299,
    description: "Beautiful ocean-inspired resin keychain with wave patterns",
    image: "https://i.etsystatic.com/27713645/r/il/9b0b9d/3175172221/il_fullxfull.3175172221_7zl0.jpg",
    category: "Keychains"
  },
  {
    id: 2,
    name: "Galaxy Swirl Keychain",
    price: 349,
    description: "Mesmerizing galaxy-themed resin keychain",
    image: "https://i.etsystatic.com/31459873/r/il/b99d05/3899252441/il_fullxfull.3899252441_7vx4.jpg",
    category: "Keychains"
  },
  {
    id: 3,
    name: "Butterfly Garden Keychain",
    price: 299,
    description: "Elegant butterfly-themed resin keychain",
    image: "https://i.etsystatic.com/27713645/r/il/9b0b9d/3175172221/il_fullxfull.3175172221_7zl0.jpg",
    category: "Keychains"
  },

  // Photoframes
  {
    id: 4,
    name: "Elegant Floral Frame",
    price: 1499,
    description: "5x7 resin photo frame with preserved flowers",
    image: "https://i.etsystatic.com/35937799/r/il/e61e17/4931056766/il_fullxfull.4931056766_3n36.jpg",
    category: "Photoframes"
  },
  {
    id: 5,
    name: "Coastal Theme Frame",
    price: 1999,
    description: "Beach-inspired 8x10 resin photo frame",
    image: "https://i.etsystatic.com/35937799/r/il/e61e17/4931056766/il_fullxfull.4931056766_3n36.jpg",
    category: "Photoframes"
  },
  {
    id: 6,
    name: "Vintage Rose Frame",
    price: 1799,
    description: "Classic 6x8 frame with preserved roses",
    image: "https://i.etsystatic.com/35937799/r/il/e61e17/4931056766/il_fullxfull.4931056766_3n36.jpg",
    category: "Photoframes"
  },

  // Resin Charms
  {
    id: 7,
    name: "Butterfly Garden Charm",
    price: 249,
    description: "Delicate butterfly-themed resin charm",
    image: "https://i.etsystatic.com/31459873/r/il/b99d05/3899252441/il_fullxfull.3899252441_7vx4.jpg",
    category: "Resin Charms"
  },
  {
    id: 8,
    name: "Lucky Clover Charm",
    price: 199,
    description: "Four-leaf clover preserved in crystal clear resin",
    image: "https://i.etsystatic.com/31459873/r/il/b99d05/3899252441/il_fullxfull.3899252441_7vx4.jpg",
    category: "Resin Charms"
  },
  {
    id: 9,
    name: "Rainbow Heart Charm",
    price: 299,
    description: "Colorful heart-shaped resin charm",
    image: "https://i.etsystatic.com/31459873/r/il/b99d05/3899252441/il_fullxfull.3899252441_7vx4.jpg",
    category: "Resin Charms"
  },

  // Small Keychains
  {
    id: 10,
    name: "Mini Heart Keychain",
    price: 149,
    description: "Tiny heart-shaped resin keychain",
    image: "https://i.etsystatic.com/27713645/r/il/9b0b9d/3175172221/il_fullxfull.3175172221_7zl0.jpg",
    category: "Small Keychains"
  },
  {
    id: 11,
    name: "Petite Star Keychain",
    price: 129,
    description: "Small star-shaped glitter resin keychain",
    image: "https://i.etsystatic.com/27713645/r/il/9b0b9d/3175172221/il_fullxfull.3175172221_7zl0.jpg",
    category: "Small Keychains"
  },
  {
    id: 12,
    name: "Mini Moon Keychain",
    price: 169,
    description: "Crescent moon mini keychain with sparkles",
    image: "https://i.etsystatic.com/27713645/r/il/9b0b9d/3175172221/il_fullxfull.3175172221_7zl0.jpg",
    category: "Small Keychains"
  },

  // Pendant
  {
    id: 13,
    name: "Ocean Drop Pendant",
    price: 499,
    description: "Teardrop-shaped ocean-themed resin pendant",
    image: "https://i.etsystatic.com/24956191/r/il/a97e32/4630889391/il_fullxfull.4630889391_qqo0.jpg",
    category: "Pendant"
  },
  {
    id: 14,
    name: "Floral Fantasy Pendant",
    price: 599,
    description: "Round pendant with preserved real flowers",
    image: "https://i.etsystatic.com/24956191/r/il/a97e32/4630889391/il_fullxfull.4630889391_qqo0.jpg",
    category: "Pendant"
  },
  {
    id: 15,
    name: "Crystal Heart Pendant",
    price: 649,
    description: "Heart-shaped pendant with crystal effects",
    image: "https://i.etsystatic.com/24956191/r/il/a97e32/4630889391/il_fullxfull.4630889391_qqo0.jpg",
    category: "Pendant"
  },

  // Mini Frames
  {
    id: 16,
    name: "Tiny Memories Frame",
    price: 799,
    description: "3x3 mini resin photo frame",
    image: "https://i.etsystatic.com/35937799/r/il/e61e17/4931056766/il_fullxfull.4931056766_3n36.jpg",
    category: "Mini Frames"
  },
  {
    id: 17,
    name: "Pocket Size Frame",
    price: 899,
    description: "4x4 portable resin photo frame",
    image: "https://i.etsystatic.com/35937799/r/il/e61e17/4931056766/il_fullxfull.4931056766_3n36.jpg",
    category: "Mini Frames"
  },
  {
    id: 18,
    name: "Mini Floral Frame",
    price: 849,
    description: "3x3 frame with dried flower accents",
    image: "https://i.etsystatic.com/35937799/r/il/e61e17/4931056766/il_fullxfull.4931056766_3n36.jpg",
    category: "Mini Frames"
  },

  // Rose Preserved Varmala
  {
    id: 19,
    name: "Classic Rose Varmala",
    price: 4999,
    description: "Traditional varmala with preserved roses",
    image: "https://i.etsystatic.com/19533807/r/il/5f3f20/4847460077/il_fullxfull.4847460077_7krs.jpg",
    category: "Rose Preserved Varmala"
  },
  {
    id: 20,
    name: "Royal Wedding Varmala",
    price: 5999,
    description: "Luxury varmala with mixed preserved flowers",
    image: "https://i.etsystatic.com/19533807/r/il/5f3f20/4847460077/il_fullxfull.4847460077_7krs.jpg",
    category: "Rose Preserved Varmala"
  },
  {
    id: 21,
    name: "Premium Gold Varmala",
    price: 6999,
    description: "Premium varmala with gold accents and preserved roses",
    image: "https://i.etsystatic.com/19533807/r/il/5f3f20/4847460077/il_fullxfull.4847460077_7krs.jpg",
    category: "Rose Preserved Varmala"
  },

  // Custom Name Plates
  {
    id: 22,
    name: "Modern Family Name Plate",
    price: 2499,
    description: "Contemporary design with LED backlight option",
    image: "https://i.etsystatic.com/31459873/r/il/b99d05/3899252441/il_fullxfull.3899252441_7vx4.jpg",
    category: "Custom Name Plates"
  },
  {
    id: 23,
    name: "Traditional Name Plate",
    price: 1999,
    description: "Classic design with gold accents",
    image: "https://i.etsystatic.com/31459873/r/il/b99d05/3899252441/il_fullxfull.3899252441_7vx4.jpg",
    category: "Custom Name Plates"
  },
  {
    id: 24,
    name: "Premium LED Name Plate",
    price: 3499,
    description: "Luxury design with RGB LED lighting",
    image: "https://i.etsystatic.com/31459873/r/il/b99d05/3899252441/il_fullxfull.3899252441_7vx4.jpg",
    category: "Custom Name Plates"
  }
];