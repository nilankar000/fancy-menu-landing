
interface MenuItemProps {
  name: string;
  nameEn?: string;
  price: string;
  description?: string;
  descriptionEn?: string;
  allergies?: string;
}

const MenuItem = ({ name, nameEn, price, description, descriptionEn, allergies }: MenuItemProps) => {
  return (
    <div className="menu-item">
      <div className="flex justify-between items-start gap-4">
        <div>
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
        
        <div className="font-bold text-restaurant-red text-lg min-w-[60px] text-right">
          {price}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
