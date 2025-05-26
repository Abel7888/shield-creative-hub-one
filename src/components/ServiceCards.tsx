
import { 
  Shield, 
  Database, 
  Link, 
  FileSearch, 
  Building2, 
  Users,
  TrendingUp,
  Award,
  Target
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

export const ServiceCards = () => {
  const services = [
    {
      title: "Advertising & Marketing Services",
      description: "Strategic marketing solutions tailored for small, medium, and enterprise businesses across all verticals.",
      icon: TrendingUp,
      link: "#marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
      badge: "For All Business Sizes",
      category: "Marketing"
    },
    {
      title: "Healthcare Products & Solutions",
      description: "Cutting-edge healthcare technology solutions designed for modern healthcare challenges and innovation.",
      icon: Shield,
      link: "https://www.datashieldhealthcare.space",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      badge: "External Platform",
      category: "Healthcare"
    },
    {
      title: "Finance & Real Estate Solutions",
      description: "Innovative fintech and proptech solutions for banking, financial institutions, and real estate professionals.",
      icon: Building2,
      link: "https://www.datashieldpartners.blog",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format",
      badge: "External Platform",
      category: "FinTech & PropTech"
    },
    {
      title: "Cybersecurity Product Solutions",
      description: "Comprehensive security products and services to protect your digital assets and infrastructure.",
      icon: Database,
      link: "https://www.datashieldsecurity.xyz",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
      badge: "External Platform",
      category: "Cybersecurity"
    },
    {
      title: "Data Insights & Analytics",
      description: "Comprehensive analytics and insights backed by statistics and reviews from top vendor review sites.",
      icon: FileSearch,
      link: "https://www.datashieldpartners.blog",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format",
      badge: "Data-Driven",
      category: "Analytics"
    },
    {
      title: "Strategic Partnerships",
      description: "Access to our network of leading emerging tech, proptech, fintech, and cybersecurity solution providers.",
      icon: Users,
      link: "#partnerships",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
      badge: "Boutique Network",
      category: "Partnerships"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Boutique Services, Enterprise Results
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Strategic Services
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We partner with industry leaders to deliver comprehensive technology solutions backed by data-driven insights, 
              vendor reviews, and proven analytics. Our boutique approach ensures personalized service with enterprise-grade results.
            </p>
          </div>
        </div>

        {/* Partnership Info */}
        <div className="bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-2xl p-8 mb-12 border border-primary/10">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-slate-800">Strategic Technology Partnerships</h3>
            </div>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We've carefully curated partnerships with leading emerging technology, proptech, fintech, and cybersecurity solution providers. 
              Our recommendations are powered by comprehensive analytics, insights, statistics, and reviews from top vendor review sites, 
              ensuring you get solutions that deliver real results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </AspectRatio>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                <div className="text-xs text-primary font-medium">{service.category}</div>
                <CardDescription className="text-sm leading-relaxed mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-0">
                <a 
                  href={service.link} 
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                  target={service.link.startsWith('http') ? '_blank' : '_self'}
                  rel={service.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  Learn more
                  <Link className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
            <div className="space-y-4">
              <Target className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-2xl font-bold text-slate-800">Ready to Transform Your Business?</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                As your boutique technology partner, we're ready to understand your unique challenges and craft personalized solutions 
                that drive real results. Let's discuss how our strategic partnerships and data-driven approach can benefit your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
