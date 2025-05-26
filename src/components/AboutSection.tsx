
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Linkedin, Users, TrendingUp, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container px-4 md:px-6">
        {/* Main About Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Your Boutique Technology Partner
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Small Agency, Big Impact
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                DataShield Partners is your boutique gateway to emerging technologies. We're not just another agency – we're your dedicated technology partners who understand that every business is unique and deserves personalized solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">How We Work & What We Aim To Do</h3>
              <div className="space-y-3 text-slate-600">
                <p>
                  <strong>Personalized Approach:</strong> As a boutique agency, we work closely with each client to understand their specific challenges and craft tailored solutions that drive real results.
                </p>
                <p>
                  <strong>Strategic Partnerships:</strong> We've partnered with leading emerging tech, proptech, fintech, and cybersecurity solution providers to offer you the best-in-class products and services.
                </p>
                <p>
                  <strong>Data-Driven Decisions:</strong> Our recommendations are backed by comprehensive analytics, insights, statistics, and reviews from top vendor review sites, ensuring you get solutions that truly work.
                </p>
                <p>
                  <strong>End-to-End Support:</strong> From initial consultation to implementation and ongoing support, we're with you every step of the way.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mx-auto mb-2">
                  40k+
                </div>
                <p className="font-medium text-slate-800">Weekly Newsletter Reach</p>
                <p className="text-sm text-slate-500">Healthcare, Real Estate, Finance</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mx-auto mb-2">
                  12+
                </div>
                <p className="font-medium text-slate-800">Years of Experience</p>
                <p className="text-sm text-slate-500">Emerging Technologies</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl transform rotate-2 group-hover:rotate-1 transition-transform"></div>
            <div className="relative p-6 bg-white border rounded-xl shadow-xl">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <AspectRatio ratio={1}>
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format" 
                      alt="Technology innovation" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <AspectRatio ratio={1}>
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format" 
                      alt="Strategic partnerships" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <AspectRatio ratio={1}>
                    <img 
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format" 
                      alt="Data analytics" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <AspectRatio ratio={1}>
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format" 
                      alt="Technology solutions" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-slate-800">Boutique Excellence</h3>
                <p className="text-sm text-slate-500">Personalized technology solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border">
          <div className="grid gap-8 lg:grid-cols-3 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">Meet the Founder</h3>
                <h4 className="text-xl font-semibold text-primary">Abel Assefa</h4>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Abel runs DataShield Partners with the passion that has driven his technology journey since 2011. What started with a fascination for robotics evolved into deep expertise across the most exciting frontiers of technology.
                </p>
              </div>
              
              <div className="space-y-4">
                <h5 className="font-semibold text-slate-800">The Journey:</h5>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-800">2011:</strong> <span className="text-slate-600">Entered emerging technologies with a passion for robotics</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-800">2015:</strong> <span className="text-slate-600">Transitioned into data science and machine learning, working on numerous personal projects</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-800">Present:</strong> <span className="text-slate-600">Leading innovations in software engineering, IoT, and proptech</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h6 className="font-semibold text-slate-800">Industry Impact</h6>
                </div>
                <p className="text-slate-600 mb-4">
                  Abel currently runs a weekly newsletter that reaches <strong>40,000+ executives</strong> across healthcare, real estate, finance, and supply chain industries, sharing insights on emerging technologies and market trends.
                </p>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="https://www.linkedin.com/in/abel7888/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    Connect with Abel on LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-xl transform rotate-3"></div>
                <div className="relative p-6 bg-white rounded-xl shadow-lg border">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-600 mx-auto flex items-center justify-center text-white text-2xl font-bold">
                      AA
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Abel Assefa</h4>
                      <p className="text-sm text-slate-500">Founder & Technology Strategist</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-50 rounded p-2">
                        <div className="font-semibold text-slate-800">Robotics</div>
                        <div className="text-slate-500">Since 2011</div>
                      </div>
                      <div className="bg-slate-50 rounded p-2">
                        <div className="font-semibold text-slate-800">Data Science</div>
                        <div className="text-slate-500">Since 2015</div>
                      </div>
                      <div className="bg-slate-50 rounded p-2">
                        <div className="font-semibold text-slate-800">IoT & PropTech</div>
                        <div className="text-slate-500">Current Focus</div>
                      </div>
                      <div className="bg-slate-50 rounded p-2">
                        <div className="font-semibold text-slate-800">Newsletter</div>
                        <div className="text-slate-500">40k+ Reach</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
