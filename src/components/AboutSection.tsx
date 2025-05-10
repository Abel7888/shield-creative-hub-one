
export const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About DataShield Partners
            </h2>
            <p className="text-slate-500 md:text-xl/relaxed">
              DataShield Partners is a leading emerging technology agency providing innovative solutions across various industries. With our expertise in cybersecurity, healthcare technology, property technology, and financial technology, we help businesses stay ahead of the curve.
            </p>
            <p className="text-slate-500 md:text-xl/relaxed">
              Our team of experts works closely with clients to understand their unique challenges and develop custom solutions that drive growth and efficiency. We pride ourselves on our ability to blend cutting-edge technology with practical business applications.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  5+
                </div>
                <div>
                  <p className="font-medium">Years of Experience</p>
                  <p className="text-sm text-slate-500">Industry Leadership</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  40k+
                </div>
                <div>
                  <p className="font-medium">C-Level Executives</p>
                  <p className="text-sm text-slate-500">In Our Network</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg transform rotate-3 group-hover:rotate-1 transition-transform"></div>
            <div className="relative p-6 bg-white border rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-slate-100 rounded-md"></div>
                <div className="aspect-square bg-slate-100 rounded-md"></div>
                <div className="aspect-square bg-slate-100 rounded-md"></div>
                <div className="aspect-square bg-slate-100 rounded-md"></div>
              </div>
              <div className="mt-4">
                <h3 className="font-medium">Our Technology Stack</h3>
                <p className="text-sm text-slate-500">Cutting-edge tools and platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
