import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Pomadă Mată Premium",
    description: "Ținere puternică, finisaj mat natural. Ideală pentru stiluri clasice și moderne.",
    price: 85,
    image: "https://images.unsplash.com/photo-1597854710916-6e2f0bb0b89f?w=400&h=400&fit=crop",
    category: "Styling"
  },
  {
    id: 2,
    name: "Ulei pentru Barbă",
    description: "Ulei natural cu vitamina E pentru hidratare și strălucire. Parfum lemn de cedru.",
    price: 75,
    image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=400&h=400&fit=crop",
    category: "Îngrijire Barbă"
  },
  {
    id: 3,
    name: "Balsam pentru Barbă",
    description: "Balsam nutritiv pentru o barbă moale și ușor de stilizat. Cu unt de shea.",
    price: 65,
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=400&fit=crop",
    category: "Îngrijire Barbă"
  },
  {
    id: 4,
    name: "Șampon pentru Păr și Barbă",
    description: "Formula 2-în-1 pentru păr și barbă. Curăță delicat, fără a usca.",
    price: 55,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop",
    category: "Îngrijire"
  },
  {
    id: 5,
    name: "Ceară de Păr",
    description: "Ceară flexibilă pentru un look natural și restructurabil pe tot parcursul zilei.",
    price: 70,
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&h=400&fit=crop",
    category: "Styling"
  },
  {
    id: 6,
    name: "Kit Complet Îngrijire",
    description: "Set complet: ulei barbă, balsam, șampon și pieptene din lemn.",
    price: 180,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop",
    category: "Seturi"
  }
];

interface CartItem extends Product {
  quantity: number;
}

const Shop = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    toast({
      title: "Produs adăugat",
      description: `${product.name} a fost adăugat în coș.`,
    });
  };

  const updateQuantity = (productId: number, change: number) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    toast({
      title: "Comandă plasată!",
      description: "Vă vom contacta în curând pentru confirmare.",
    });
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <section id="shop" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-gradient-gold">Magazin</span> Online
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Produse premium pentru îngrijirea părului și bărbii, selectate cu grijă pentru rezultate profesionale acasă.
          </p>
        </div>

        {/* Cart Button */}
        <div className="flex justify-end mb-8">
          <Button
            variant="gold"
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Coș ({totalItems})
          </Button>
        </div>

        {/* Cart Drawer */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-2xl font-bold">Coșul Tău</h3>
                <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {cart.length === 0 ? (
                <p className="text-foreground/60 text-center py-8">Coșul este gol.</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-4 p-4 bg-secondary/50 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{item.name}</h4>
                          <p className="text-primary font-bold">{item.price} RON</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 ml-auto text-destructive"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg font-bold mb-4">
                      <span>Total:</span>
                      <span className="text-primary">{totalPrice} RON</span>
                    </div>
                    <Button variant="gold" className="w-full" onClick={handleCheckout}>
                      Finalizează Comanda
                    </Button>
                    <p className="text-foreground/50 text-sm text-center mt-3">
                      Plata se face la livrare sau în salon.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <Card key={product.id} className="bg-background border-border overflow-hidden group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {product.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-foreground/60 text-sm mb-4">
                  {product.description}
                </p>
                <p className="text-primary font-bold text-2xl">
                  {product.price} <span className="text-sm font-normal">RON</span>
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="goldOutline"
                  className="w-full"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Adaugă în Coș
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl border border-primary/20">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Livrare în toată România
            </h3>
            <p className="text-foreground/60">
              Comenzile peste 200 RON beneficiază de livrare gratuită. Plata se poate face ramburs sau în salon la ridicare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
