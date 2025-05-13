
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ProductsSection = () => {
  const products = [
    {
      title: "DataShield Sentry",
      category: "Cybersecurity",
      description: "Enterprise-grade threat detection and prevention system.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format"
    },
    {
      title: "MediConnect",
      category: "Healthcare",
      description: "Secure patient data management and exchange platform.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format"
    },
    {
      title: "PropIntel",
      category: "PropTech",
      description: "AI-powered property management and analytics suite.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format"
    },
    {
      title: "FinGuard",
      category: "FinTech",
      description: "Advanced fraud detection and prevention for financial institutions.",
      image: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=2070&auto=format"
    },
    {
      title: "DataVision",
      category: "Analytics",
      description: "Real-time business intelligence and visualization tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format"
    },
    {
      title: "SecureCloud",
      category: "Infrastructure",
      description: "Managed cloud security and compliance platform.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format"
    }
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sample Products</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our flagship products designed to transform your business
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                  {product.category}
                </span>
                <CardDescription className="pt-2">{product.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
