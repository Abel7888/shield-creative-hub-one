
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/1fd50076-98a0-45c7-bea1-7dde101b3542.png" 
                alt="DataShield Partners Logo" 
                className="h-8 w-auto"
              />
              <span className="font-semibold text-xl text-white">DataShield</span>
            </div>
            <p className="text-slate-400 text-sm mt-2">
              Emerging technology solutions for forward-thinking businesses.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#cybersecurity" className="text-slate-400 hover:text-white">Cybersecurity</a></li>
              <li><a href="#healthcare" className="text-slate-400 hover:text-white">Healthcare Tech</a></li>
              <li><a href="#insights" className="text-slate-400 hover:text-white">Data Insights</a></li>
              <li><a href="#proptech" className="text-slate-400 hover:text-white">PropTech Solutions</a></li>
              <li><a href="#fintech" className="text-slate-400 hover:text-white">FinTech Solutions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-slate-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Blog</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © {currentYear} DataShield Partners. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 mt-4 sm:mt-0">
            Designed for emerging technology solutions
          </p>
        </div>
      </div>
    </footer>
  );
};
