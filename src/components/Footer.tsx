const Footer = () => {
  return (
    <footer className="w-full h-[100px] bg-card border-t border-border flex items-center mt-auto">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <img 
            src="/flyup-logo.png" 
            alt="Flyup Logo" 
            className="h-[32px] md:h-[50px] lg:h-[70px] w-auto" 
          />
          <span className="text-[14px] text-foreground font-medium">
            © 2026 FLYUP — สงวนลิขสิทธิ์
          </span>
        </div>

        {/* Right Side: Links */}
        <div className="flex items-center gap-6 md:gap-10">
          <a href="#" className="text-[14px] text-foreground font-medium hover:text-primary transition-colors">
            เกี่ยวกับเรา
          </a>
          <a href="#" className="text-[14px] text-foreground font-medium hover:text-primary transition-colors">
            ข้อกำหนด
          </a>
          <a href="#" className="text-[14px] text-foreground font-medium hover:text-primary transition-colors">
            ศูนย์ช่วยเหลือ
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;