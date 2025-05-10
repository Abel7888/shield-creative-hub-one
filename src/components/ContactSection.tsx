
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Media Kit Request Submitted",
      description: "Thank you for your interest. We'll be in touch shortly.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 p-2 mb-2">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Request Our Media Kit
            </h2>
            <p className="text-slate-500 md:text-xl/relaxed max-w-[600px]">
              Interested in advertising your services to our network of over 40,000 C-level executives? Fill out the form to receive our comprehensive media kit.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="rounded-full bg-slate-100 p-1">
                <span className="block h-2 w-2 rounded-full bg-primary"></span>
              </div>
              <p>Detailed audience demographics</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-slate-100 p-1">
                <span className="block h-2 w-2 rounded-full bg-primary"></span>
              </div>
              <p>Advertising options and pricing</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-slate-100 p-1">
                <span className="block h-2 w-2 rounded-full bg-primary"></span>
              </div>
              <p>Case studies and success stories</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your company name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your specific interests..."
                  className="min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full">Request Media Kit</Button>
              <p className="text-xs text-slate-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
