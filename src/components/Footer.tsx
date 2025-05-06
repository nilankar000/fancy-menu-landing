
import { Phone, MapPin, Clock, Coffee } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-restaurant-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair font-bold text-xl mb-4">Franguinho de Albufeira</h3>
            <p className="mb-4">Restaurante | Churrasqueira</p>
            <div className="flex items-center space-x-2 mb-3">
              <MapPin size={18} className="text-restaurant-red" />
              <p>Rua Principal 123, 8200 Albufeira, Portugal</p>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <Phone size={18} className="text-restaurant-red" />
              <p>+351 289 123 456</p>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} className="text-restaurant-red" />
              <p>Aberto todos os dias: 12:00 - 23:00</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-xl mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#starters" className="hover:text-restaurant-red transition duration-300">Entradas | Starters</a>
              </li>
              <li>
                <a href="#meat" className="hover:text-restaurant-red transition duration-300">Carnes | Meat</a>
              </li>
              <li>
                <a href="#sides" className="hover:text-restaurant-red transition duration-300">Acompanhamentos | Side Orders</a>
              </li>
              <li>
                <a href="#desserts" className="hover:text-restaurant-red transition duration-300">Sobremesas | Desserts</a>
              </li>
              <li>
                <a href="#drinks" className="hover:text-restaurant-red transition duration-300">Bebidas | Drinks</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-xl mb-4">Informação</h3>
            <p className="mb-4 text-sm">
              IVA incluido à taxa em vigor. Este estebelecimento dispõe de Livro de Reclamções.
            </p>
            <p className="text-sm">
              VAT included at legal rate. We have a Complaints Book.
            </p>
            <div className="mt-6">
              <div className="flex items-center space-x-2">
                <Coffee size={18} className="text-restaurant-red" />
                <p className="text-sm">Nos dedicamos a oferecer comida de qualidade com ingredientes locais</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 bg-gray-700" />
        
        <div className="text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Franguinho de Albufeira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
