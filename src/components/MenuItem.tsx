
import { motion } from "framer-motion";

interface MenuItemProps {
  name: string;
  nameEn?: string;
  price: string;
  description?: string;
  descriptionEn?: string;
  allergies?: string;
  imageUrl?: string;
}

const MenuItem = ({ name, nameEn, price, description, descriptionEn, allergies, imageUrl }: MenuItemProps) => {
  return (
    <motion.div 
      className="menu-item backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-grow">
          <h4 className="font-playfair font-bold text-lg text-restaurant-dark">{name}</h4>
          {nameEn && <p className="text-gray-500 italic text-sm">{nameEn}</p>}
          
          {description && (
            <div className="mt-1 text-sm text-gray-600">
              <p>{description}</p>
              {descriptionEn && <p className="italic text-gray-500">{descriptionEn}</p>}
            </div>
          )}
          
          {allergies && (
            <div className="mt-1">
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                {allergies}
              </span>
            </div>
          )}
        </div>
        
        {imageUrl && (
          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border border-white/20">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="font-bold text-restaurant-red text-lg min-w-[60px] text-right flex-shrink-0">
          {price}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;
