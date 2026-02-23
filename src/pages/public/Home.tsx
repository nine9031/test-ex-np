const FEATURED_PROJECTS = [
  { 
    id: 1, 
    title: 'DormMate', 
    description: 'แอปหาเพื่อนร่วมหอพักมหาวิทยาลัย ค้นหาคนที่ไลฟ์สไตล์ตรงกัน', 
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800', 
    category: 'Mobile App', 
    progress: 72, 
    raised: 21000, 
    daysLeft: 15, 
    badge: '🔥 ฮิต' 
  },
  { 
    id: 2, 
    title: 'EduChain', 
    description: 'ระบบเก็บใบรับรองการศึกษาบน Blockchain', 
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800', 
    category: 'Fintech', 
    progress: 90, 
    raised: 50000, 
    daysLeft: 5, 
    badge: '🔥 ฮิต' 
  },
  { 
    id: 3, 
    title: 'UniTrack', 
    description: 'แอปนำทางในมหาวิทยาลัยอัจฉริยะสำหรับนักศึกษา', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 
    category: 'Mobile App', 
    progress: 15, 
    raised: 1000, 
    daysLeft: 55, 
    badge: '✨ ใหม่' 
  },
];

const Home = () => {
  return (
    <div className="bg-[#F5F5F9] min-h-screen font-sans pb-24">
      
      {/* --- 1. Hero Section --- */}
      <section className="pt-[120px] pb-[80px] px-4 md:px-8 bg-gradient-to-b from-[#F0EAFC] to-[#F5F5F9]">
        <div className="container mx-auto max-w-[1280px] flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DDDDE6] shadow-sm mb-6">
            <span>🚀</span>
            <span className="text-[14px] font-medium text-[#191826]">แพลตฟอร์มระดมทุนสำหรับนักศึกษาแห่งแรก</span>
          </div>
          
          <h1 className="text-[40px] md:text-[64px] font-extrabold text-[#191826] mb-6 max-w-[800px] leading-tight">
            เปลี่ยนไอเดียในห้องเรียน <br className="hidden md:block" />
            ให้เป็น <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C4DDB] to-[#E54DA0]">นวัตกรรมเปลี่ยนโลก</span>
          </h1>
          
          <p className="text-[18px] md:text-[20px] text-[#6E6E7A] mb-10 max-w-[600px]">
            ร่วมเป็นส่วนหนึ่งในการสนับสนุนผลงานซอฟต์แวร์ของนักศึกษาไทย 
            ผลักดันโปรเจกต์ดีๆ ให้เกิดขึ้นจริงและออกสู่ตลาด
          </p>
          
          <div className="flex gap-4">
            <a href="/projects" className="bg-[#191826] hover:bg-[#333240] text-white px-8 py-4 rounded-xl text-[16px] font-semibold transition-all shadow-lg">
              สำรวจโปรเจกต์ ➔
            </a>
          </div>
        </div>
      </section>

      {/* --- 2. Stats Section --- */}
      <section className="container mx-auto max-w-[1280px] px-4 md:px-8 -mt-8">
        <div className="bg-white rounded-[24px] p-8 shadow-xl border border-[#DDDDE6] grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#DDDDE6]">
          <div className="flex flex-col items-center text-center">
            <span className="text-[40px] font-extrabold text-[#7C4DDB] mb-2">1.2M+</span>
            <span className="text-[16px] font-medium text-[#6E6E7A]">ยอดระดมทุนรวม (บาท)</span>
          </div>
          <div className="flex flex-col items-center text-center pt-8 md:pt-0">
            <span className="text-[40px] font-extrabold text-[#191826] mb-2">45</span>
            <span className="text-[16px] font-medium text-[#6E6E7A]">โปรเจกต์ที่สำเร็จแล้ว</span>
          </div>
          <div className="flex flex-col items-center text-center pt-8 md:pt-0">
            <span className="text-[40px] font-extrabold text-[#191826] mb-2">3,500+</span>
            <span className="text-[16px] font-medium text-[#6E6E7A]">ผู้สนับสนุน</span>
          </div>
        </div>
      </section>

      {/* --- 3. Trending Projects (สร้าง Card สดๆ ในนี้เลย ไม่ต้องง้อไฟล์อื่น) --- */}
      <section className="container mx-auto max-w-[1280px] px-4 md:px-8 mt-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-[32px] font-extrabold text-[#191826] mb-2">🔥 โปรเจกต์มาแรง</h2>
            <p className="text-[#6E6E7A]">โปรเจกต์ที่กำลังได้รับความสนใจในขณะนี้</p>
          </div>
          <a href="/projects" className="hidden md:block text-[#7C4DDB] font-semibold hover:underline">
            ดูทั้งหมด ➔
          </a>
        </div>
        
        {/* ลูปสร้างการ์ดจากข้อมูล Mock ด้านบน */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div key={project.id} className="bg-white rounded-[24px] overflow-hidden border border-[#DDDDE6] hover:shadow-xl transition-all cursor-pointer flex flex-col">
              
              {/* รูปปกและป้ายบอกสถานะ */}
              <div className="relative h-[220px] w-full bg-gray-200">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-[#191826] px-3 py-1.5 rounded-full text-[12px] font-bold shadow-md">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* ข้อมูลโปรเจกต์ */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[24px] font-semibold text-[#191826]">{project.title}</h3>
                  <span className="text-[12px] font-medium text-[#6E6E7A] border border-[#DDDDE6] px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-[16px] text-[#6E6E7A] mb-6 flex-1">{project.description}</p>

                {/* Progress Bar */}
                <div className="w-full h-[6px] bg-[#EBEBF0] rounded-full mb-4">
                  <div className="h-full bg-[#7C4DDB] rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>

                {/* ยอดเงินและวันเวลา */}
                <div className="flex justify-between items-center">
                  <span className="text-[18px] font-semibold text-[#191826]">{project.raised.toLocaleString()}฿</span>
                  <span className="text-[14px] font-medium text-[#6E6E7A]">{project.daysLeft} วัน</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* --- 4. How it Works --- */}
      <section className="container mx-auto max-w-[1280px] px-4 md:px-8 mt-24">
        <div className="text-center mb-10">
          <h2 className="text-[32px] font-extrabold text-[#191826] mb-2">ทำงานอย่างไร?</h2>
          <p className="text-[#6E6E7A]">3 ขั้นตอนง่ายๆ ในการร่วมสนับสนุนไอเดีย</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-[24px] border border-[#DDDDE6]">
            <div className="text-[40px] mb-4">🎯</div>
            <h3 className="text-[20px] font-semibold text-[#191826] mb-2">1. ค้นหาโปรเจกต์</h3>
            <p className="text-[#6E6E7A]">สำรวจโปรเจกต์จากนักศึกษาที่ตรงกับความสนใจของคุณ</p>
          </div>
          
          <div className="bg-white p-8 rounded-[24px] border border-[#DDDDE6]">
            <div className="text-[40px] mb-4">💳</div>
            <h3 className="text-[20px] font-semibold text-[#191826] mb-2">2. ร่วมสนับสนุน</h3>
            <p className="text-[#6E6E7A]">เลือกแพ็กเกจระดมทุนเพื่อให้ทีมพัฒนานำไปต่อยอด</p>
          </div>

          <div className="bg-white p-8 rounded-[24px] border border-[#DDDDE6]">
            <div className="text-[40px] mb-4">🌟</div>
            <h3 className="text-[20px] font-semibold text-[#191826] mb-2">3. เติบโตไปด้วยกัน</h3>
            <p className="text-[#6E6E7A]">รับของรางวัล และติดตามความคืบหน้าจนแอปเปิดใช้งาน</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;