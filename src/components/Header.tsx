
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-white shadow-md">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Restaurant Name */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/5fe6755a-fc6d-470d-9de3-654bb65ce06e.png" 
              alt="Franguinho de Albufeira" 
              className="h-16 md:h-20"
            />
            <div className="hidden md:block">
              <h1 className="font-playfair font-bold text-2xl text-restaurant-dark">
                Franguinho de Albufeira
              </h1>
              <p className="text-restaurant-dark text-sm">Restaurante | Churrasqueira</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#starters" className="text-restaurant-dark hover:text-restaurant-red font-medium transition duration-300">
              Entradas
            </a>
            <a href="#meat" className="text-restaurant-dark hover:text-restaurant-red font-medium transition duration-300">
              Carnes
            </a>
            <a href="#sides" className="text-restaurant-dark hover:text-restaurant-red font-medium transition duration-300">
              Acompanhamentos
            </a>
            <a href="#desserts" className="text-restaurant-dark hover:text-restaurant-red font-medium transition duration-300">
              Sobremesas
            </a>
            <a href="#drinks" className="text-restaurant-dark hover:text-restaurant-red font-medium transition duration-300">
              Bebidas
            </a>
            <Button className="bg-restaurant-red hover:bg-red-700 text-white">
              Reservar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-restaurant-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full z-10 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#starters" 
              className="text-restaurant-dark hover:text-restaurant-red font-medium transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Entradas
            </a>
            <a 
              href="#meat" 
              className="text-restaurant-dark hover:text-restaurant-red font-medium transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Carnes
            </a>
            <a 
              href="#sides" 
              className="text-restaurant-dark hover:text-restaurant-red font-medium transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acompanhamentos
            </a>
            <a 
              href="#desserts" 
              className="text-restaurant-dark hover:text-restaurant-red font-medium transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobremesas
            </a>
            <a 
              href="#drinks" 
              className="text-restaurant-dark hover:text-restaurant-red font-medium transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bebidas
            </a>
            <Button className="bg-restaurant-red hover:bg-red-700 text-white w-full">
              Reservar
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
