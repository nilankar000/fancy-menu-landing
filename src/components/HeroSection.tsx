
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-restaurant-dark to-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Autêntica Churrasqueira Portuguesa
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Descubra os sabores tradicionais do nosso frango grelhado com piri-piri e muito mais. 
            Uma experiência gastronómica única em Albufeira.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-restaurant-red hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md">
              Ver Menu
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black font-medium px-6 py-3 rounded-md">
              Fazer Reserva <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Design elements */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-transparent to-black/10 hidden md:block"></div>
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden md:block">
        <div className="h-40 w-40 rounded-full bg-restaurant-red/20 blur-xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
