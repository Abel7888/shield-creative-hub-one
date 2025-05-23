
import { 
  Shield, 
  Database, 
  Link, 
  FileSearch, 
  Building2, 
  FileText
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ServiceCards = () => {
  const services = [
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security products and services to protect your digital assets and infrastructure.",
      icon: Shield,
      link: "https://www.datashieldsecurity.xyz",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Healthcare Tech",
      description: "Emerging technology solutions designed for modern healthcare challenges and innovation.",
      icon: FileText,
      link: "https://www.datashieldhealthcare.space",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Data Insights & Blogs",
      description: "Analytics and insights resources to help you make data-driven decisions.",
      icon: FileSearch,
      link: "https://www.datashieldpartners.blog",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format"
    },
    {
      title: "PropTech Solutions (Coming Soon)",
      description: "Technology solutions for real estate and property management modernization.",
      icon: Building2,
      link: "#proptech",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format"
    },
    {
      title: "FinTech Solutions (coming Soon)",
      description: "Innovative financial technology services for banking and financial institutions.",
      icon: Database,
      link: "#fintech",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our comprehensive range of technology solutions designed for the modern enterprise.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <div className="mb-2 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <a 
                  href={service.link} 
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Learn more
                  <Link className="h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
