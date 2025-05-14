
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ProductsSection = () => {
  const products = [
    {
      title: "Zscaler Private Access™ (ZPA)",
      category: "Cybersecurity",
      description: "Zero Trust Networking, Cyberthreat Protection & Data Protection",
      image: "/lovable-uploads/0a25eef1-25c3-4854-ad29-936e1f5adf3a.png",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-400"
    },
    {
      title: "Eon Reality",
      category: "Healthcare",
      description: "Spatial AI and immersive training technologies designed for healthcare professionals",
      image: "/lovable-uploads/27478782-e0bf-4266-b167-6a2ae30622a9.png",
      bgColor: "bg-blue-600"
    },
    {
      title: "TeamViewer DEX",
      category: "IT Support",
      description: "Solve IT issues before they impact users",
      image: "/lovable-uploads/0f545c2c-1dfa-41f7-9dcc-c0c5f4a6c097.png",
      bgColor: "bg-gradient-to-r from-slate-900 to-slate-800"
    },
    {
      title: "Lumen Edge Cloud Solutions",
      category: "Cloud Computing",
      description: "From edge compute and storage servers to data processing, machine learning (ML) and IoT devices",
      image: "/lovable-uploads/ed80be76-a5cc-453c-8937-02cbfeeda631.png",
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-600"
    },
    {
      title: "Palo Alto Prisma AIRS",
      category: "AI Security",
      description: "Prisma® AIRS is the world's most comprehensive AI security platform",
      image: "/lovable-uploads/c135d375-8beb-48de-8362-4dee1acae79f.png",
      bgColor: "bg-gradient-to-r from-red-600 to-red-400"
    }
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Enterprise solutions designed to transform your business
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-0">
              <div className={`h-48 overflow-hidden flex items-center justify-center ${product.bgColor} p-6`}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="object-contain h-full max-w-full"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <Badge variant="default" className="mt-2">
                  {product.category}
                </Badge>
                <CardDescription className="pt-3">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary flex items-center gap-1">
                  Request Demo <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
