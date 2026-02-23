import { Search, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full py-4 bg-transparent">
      <div className="container mx-auto">
        <div className="flex items-center justify-between bg-card/90 backdrop-blur-md border border-border h-[70px] px-8 rounded-full shadow-sm">

          {/* Logo */}
          <a href='/' className="flex-shrink-0">
            <img 
              src="/flyup-logo.png" 
              alt="Flyup Logo" 
              className="h-[32px] md:h-[45px] lg:h-[55px] w-auto transition-all" 
            />
          </a>

          <div className="hidden md:flex items-center gap-[10px] bg-background border border-border h-[40px] w-[414px] rounded-full px-4 focus-within:border-primary transition-all">
            <Search size={18} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="ค้นหา โปรเจกต์ , หมวดหมู่ที่ต้องการ"
              className="bg-transparent outline-none w-full text-[14px] text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a href='/' className="bg-primary hover:bg-primary-hover text-white-foreground px-6 py-2 rounded-xl text-[14px] font-medium transition-all shadow-sm active:scale-95">
              เริ่มต้น
            </a>

            <div className="flex items-center gap-2">
              <a href='/' className="bg-background border border-border px-6 py-2 rounded-xl text-[14px] font-medium text-foreground hover:bg-muted transition-all active:scale-95">
                สมัคร
              </a>
              
              <div className="cursor-pointer flex items-center justify-center p-1 hover:bg-background rounded-full transition-all">
                <ChevronDown size={16} className="text-foreground" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;