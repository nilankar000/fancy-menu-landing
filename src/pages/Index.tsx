
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  // Menu data
  const starters = [
    {
      name: "Pão (por pessoa)",
      nameEn: "Bread (per person)",
      price: "0.80€",
      allergies: "( 4)"
    },
    {
      name: "Manteiga / Patê",
      nameEn: "Butter / Pate",
      price: "0.80€",
      allergies: "( 10)"
    },
    {
      name: "Sopa do Dia",
      nameEn: "Soup of the Day",
      price: "2.60€",
      allergies: "( 1/2/4/6)"
    },
    {
      name: "Camarão Cozido (Dose)",
      nameEn: "Boiled Prawns (Portion)",
      price: "13.00€",
      allergies: "( 10)"
    },
  ];

  const meatItems = [
    {
      name: "1/2 Frango Grelhado (C/ ou S/ Piri-Piri)",
      nameEn: "1/2 Grilled Chicken (w/ or without Piri-Piri)",
      price: "8.00€"
    },
    {
      name: "Frango Grelhado (C/ ou S/ Piri-Piri)",
      nameEn: "Grilled Chicken (w/ or without Piri-Piri)",
      price: "16.00€"
    },
    {
      name: "Lagartinhos de Porco Preto Grelhado",
      nameEn: "Grilled Black Pork Fillet (Lagartinhos)",
      price: "17.00€"
    },
    {
      name: "Bife de Vaca Grelhado",
      nameEn: "Grilled Beef Steak",
      price: "18.00€"
    },
    {
      name: "Costeleta de Vitela",
      nameEn: "Veal Chop",
      price: "24.00€"
    }
  ];

  const sideItems = [
    {
      name: "Batata Grande",
      nameEn: "Chips Large",
      price: "5.50€"
    },
    {
      name: "Batata Pequena",
      nameEn: "Chips Small",
      price: "4.00€"
    },
    {
      name: "Arroz Dose",
      nameEn: "Rice",
      price: "2.50€"
    },
    {
      name: "Salada Tomate Grande",
      nameEn: "Tomato Salad Large",
      price: "6.50€"
    },
    {
      name: "Salada Tomate Média",
      nameEn: "Tomato Salad Medium",
      price: "4.50€"
    },
    {
      name: "Salada Tomate Pequena",
      nameEn: "Tomato Salad Small",
      price: "3.00€"
    },
  ];

  const dessertItems = [
    {
      name: "Dom Rodrigo",
      price: "3.40€",
      allergies: "( 2/11)"
    },
    {
      name: "Arroz Doce",
      nameEn: "Sweet Rice Pudding",
      price: "3.30€",
      allergies: "( 4/10)"
    },
    {
      name: "Baba de Camelo",
      nameEn: "Condensed Milk Delight",
      price: "3.30€",
      allergies: "( 2/10)"
    },
    {
      name: "Trio Algarvio",
      nameEn: "Algarve Traditional Dessert",
      price: "4.60€",
      allergies: "( 2/4/10/11)"
    },
    {
      name: "Mousse de Chocolate",
      nameEn: "Chocolate Mousse",
      price: "3.30€",
      allergies: "( 2/4/10)"
    },
    {
      name: "Salada de Fruta",
      nameEn: "Fruits Salad",
      price: "3.30€"
    },
    {
      name: "Bolo de Bolacha",
      nameEn: "Wafer Cake",
      price: "4.20€",
      allergies: "( 4/10)"
    },
    {
      name: "Semi-Frio de Fruta",
      nameEn: "Fresh Cream Fruit",
      price: "4.20€",
      allergies: "( 2/4/10)"
    },
    {
      name: "Tarte de Natas",
      nameEn: "Cream Pie",
      price: "4.20€",
      allergies: "( 10)"
    },
    {
      name: "Abacaxi",
      nameEn: "Pineapple",
      price: "4.20€"
    },
  ];

  const wines = [
    {
      name: "Vinha do Conde (Alentejo)",
      price: "13.00€",
      description: "0.75L",
      allergies: "Contém sulfitos"
    },
    {
      name: "Caiado (Alentejo)",
      price: "14.00€",
      description: "0.75L",
      allergies: "Contém sulfitos"
    },
    {
      name: "Casa Velha (Douro)",
      price: "13.00€",
      description: "0.75L",
      allergies: "Contém sulfitos"
    },
    {
      name: "Herdade dos Coteis (Alentejo)",
      price: "15.00€",
      description: "0.75L",
      allergies: "Contém sulfitos"
    },
    {
      name: "Herdade Paço do Conde (Alentejo)",
      price: "17.00€", 
      description: "0.75L",
      allergies: "Contém sulfitos"
    },
    {
      name: "Jarro de Vinho (0.25L)",
      nameEn: "Jug of Wine (0.25L)",
      price: "3.00€"
    },
    {
      name: "Jarro de Vinho (0.5L)",
      nameEn: "Jug of Wine (0.5L)",
      price: "4.50€"
    },
    {
      name: "Jarro de Vinho (1L)",
      nameEn: "Jug of Wine (1L)",
      price: "8.50€"
    }
  ];

  const drinks = [
    {
      name: "Refrigerante",
      nameEn: "Soft Drink",
      price: "2.40€"
    },
    {
      name: "Néctares",
      nameEn: "Nectars",
      price: "2.40€"
    },
    {
      name: "Água (33cl)",
      nameEn: "Water (33cl)",
      price: "1.00€"
    },
    {
      name: "Água (50cl)",
      nameEn: "Water (50cl)",
      price: "1.50€"
    },
    {
      name: "Água Gaseificada",
      nameEn: "Sparkling Water",
      price: "1.30€"
    },
    {
      name: "Imperial",
      nameEn: "Small Beer",
      price: "1.60€"
    },
    {
      name: "Caneca",
      nameEn: "Large Beer",
      price: "2.80€"
    },
    {
      name: "Cerveja S/ Álcool",
      nameEn: "Non Alcoholic Beer",
      price: "2.00€"
    },
    {
      name: "Café Expresso/Descafeinado",
      nameEn: "Coffee/Decaf",
      price: "1.00€"
    },
    {
      name: "Café Duplo",
      nameEn: "Double Coffee",
      price: "2.20€"
    },
    {
      name: "Café c/ Leite",
      nameEn: "Coffee with Milk",
      price: "2.20€"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-restaurant-light">
      <Header />
      <HeroSection />

      <div className="flex-1">
        <div className="py-10 text-center max-w-3xl mx-auto px-4">
          <h2 className="section-title font-playfair">Nossa Ementa</h2>
          <p className="text-gray-600 mt-6">
            Descubra os sabores tradicionais da cozinha portuguesa, com ênfase no nosso famoso frango grelhado.
            Todos os pratos são preparados com ingredientes frescos e de alta qualidade.
          </p>
        </div>

        <Separator className="max-w-2xl mx-auto my-6 bg-gray-200" />

        <MenuSection
          id="starters"
          title="Entradas"
          titleEn="Starters"
          items={starters}
        />

        <MenuSection
          id="meat"
          title="Carnes"
          titleEn="Meat"
          items={meatItems}
        />

        <MenuSection
          id="sides"
          title="Acompanhamentos"
          titleEn="Side Orders"
          items={sideItems}
        />

        <MenuSection
          id="desserts"
          title="Sobremesas"
          titleEn="Desserts"
          items={dessertItems}
        />

        <MenuSection
          id="drinks"
          title="Vinhos"
          titleEn="Wines"
          items={wines}
        />

        <MenuSection
          id="drinks"
          title="Bebidas"
          titleEn="Drinks"
          items={drinks}
        />
      </div>

      <div className="bg-restaurant-cream py-8 text-center">
        <div className="container mx-auto px-4">
          <h3 className="font-playfair text-2xl font-bold mb-3">Faça a sua Reserva</h3>
          <p className="text-restaurant-dark mb-5">
            Garantir a sua mesa é fácil! Ligue para +351 289 123 456
          </p>
          <p className="text-sm text-gray-500">
            Nenhum prato, produto alimentar ou bebida, incluindo couvert, pode ser cobrado se não for solicitado pelo cliente ou por este foi inutilizado. DL 10/2015 DE 16-1
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
