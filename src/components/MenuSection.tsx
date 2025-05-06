
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
  }[];
}

const MenuSection = ({ id, title, titleEn, items }: MenuSectionProps) => {
  return (
    <section id={id} className="py-12 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="menu-category font-playfair inline-block">
            {title} <span className="text-gray-500">|</span> <span className="text-gray-500">{titleEn}</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <MenuItem 
              key={index}
              name={item.name}
              nameEn={item.nameEn}
              price={item.price}
              description={item.description}
              descriptionEn={item.descriptionEn}
              allergies={item.allergies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
