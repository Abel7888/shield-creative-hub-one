
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const HeroSection = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-primary">
                Emerging Tech Solutions for Tomorrow's Challenges
              </h1>
              <p className="max-w-[600px] text-slate-700 md:text-xl">
                DataShield Partners empowers businesses with cutting-edge technologies across cybersecurity, healthcare, proptech, and fintech verticals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Our Solutions
              </Button>
              <Button variant="outline" size="lg">
                Request Media Kit
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-2xl">
            </div>
            <div className="relative bg-white p-6 shadow-lg rounded-lg">
              <div className="aspect-video bg-slate-800 rounded-md overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format" 
                    alt="Computer screen with code" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="h-24 bg-slate-100 rounded-md overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format" 
                      alt="Circuit board closeup" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <div className="h-24 bg-slate-100 rounded-md overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format" 
                      alt="Programming code" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
