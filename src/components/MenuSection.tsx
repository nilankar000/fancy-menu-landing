
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

interface MenuSectionProps {
  id: string;
  title: string;
  titleEn: string;
  items: {
    name: string;
    nameEn?: string;
    price: string;
    description?: string;
    descriptionEn?: string;
    allergies?: string;
    imageUrl?: string;
  }[];
}

const getFoodImage = (category: string, index: number) => {
  // Define default image URLs based on category
  const categoryImages = {
    starters: [
      "/food/starter-1.jpg",
      "/food/starter-2.jpg",
      "/food/bread.jpg",
      "/food/seafood.jpg",
    ],
    meat: [
      "/food/chicken.jpg",
      "/food/chicken-2.jpg",
      "/food/pork.jpg",
      "/food/beef.jpg",
      "/food/veal.jpg",
    ],
    sides: [
      "/food/fries.jpg",
      "/food/fries-small.jpg",
      "/food/rice.jpg",
      "/food/salad.jpg",
      "/food/salad-2.jpg",
      "/food/salad-3.jpg",
    ],
    desserts: [
      "/food/dessert-1.jpg",
      "/food/dessert-2.jpg", 
      "/food/dessert-3.jpg",
      "/food/dessert-4.jpg",
      "/food/fruit.jpg",
    ],
    drinks: [
      "/food/wine.jpg",
      "/food/wine-2.jpg",
      "/food/beer.jpg",
      "/food/coffee.jpg",
      "/food/water.jpg",
    ]
  };

  // Return a placeholder image if category doesn't match or index out of bounds
  const images = categoryImages[category as keyof typeof categoryImages] || [];
  if (images.length > 0) {
    return images[index % images.length];
  }
  
  // Fallback to placeholder
  return `https://placehold.co/200x200/FFF8E1/333333?text=${category}`;
};

const MenuSection = ({ id, title, titleEn, items }: MenuSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemCategory = id.toLowerCase();

  return (
    <section id={id} className="py-12 scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="menu-category font-playfair inline-block">
            {title} <span className="text-gray-500">|</span> <span className="text-gray-500">{titleEn}</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <MenuItem 
              key={index}
              name={item.name}
              nameEn={item.nameEn}
              price={item.price}
              description={item.description}
              descriptionEn={item.descriptionEn}
              allergies={item.allergies}
              imageUrl={getFoodImage(itemCategory, index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
