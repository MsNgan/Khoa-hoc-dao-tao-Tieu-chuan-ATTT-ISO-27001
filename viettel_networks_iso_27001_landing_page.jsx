import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ShieldCheck,
  Clock,
  MapPin,
  Video,
  UserCheck,
  BookOpen,
  Award,
  FileText,
  CheckCircle2,
  ClipboardList,
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
  CalendarDays,
  GraduationCap,
  LockKeyhole,
  Layers,
  Users,
} from "lucide-react";

const COLORS = {
  red: "#E30613",
  redDark: "#B30000",
  black: "#0A0A0A",
  dark: "#1A1A1A",
  gray1: "#4A4A4A",
  gray2: "#7F7F7F",
  gray3: "#CCCCCC",
  gray4: "#F5F5F5",
};

const navItems = [
  { label: "Tổng quan", href: "#tong-quan" },
  { label: "Đối tượng", href: "#doi-tuong" },
  { label: "Nội dung", href: "#noi-dung" },
  { label: "Thời gian & địa điểm", href: "#thong-tin" },
  { label: "Đăng ký", href: "#dang-ky" },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Nâng cao nhận thức về an toàn thông tin",
    text: "Học viên được đào tạo nhận thức về tiêu chuẩn ISO/IEC 27001:2022 và vai trò của hệ thống quản lý an toàn thông tin trong tổ chức.",
  },
  {
    icon: Layers,
    title: "Hiểu các yêu cầu cốt lõi của tiêu chuẩn",
    text: "Nội dung tập trung vào các điều khoản yêu cầu từ 4 đến 10 và các kiểm soát trong Phụ lục A.",
  },
  {
    icon: LockKeyhole,
    title: "Áp dụng vào công việc thực tế",
    text: "Chương trình định hướng học viên liên hệ các biện pháp, nguy cơ và rủi ro an toàn thông tin đã gặp trong thực tế.",
  },
  {
    icon: ClipboardList,
    title: "Hỗ trợ hoạt động đánh giá nội bộ",
    text: "Khóa học có phần hướng dẫn đánh giá viên nội bộ theo tiêu chuẩn ISO/IEC 27001:2022.",
  },
  {
    icon: Award,
    title: "Nhận chứng nhận và tài liệu đào tạo",
    text: "Học viên hoàn thành khóa học được nhận chứng nhận hoàn thành nội bộ và tài liệu đào tạo.",
  },
];

const courseInfo = [
  { icon: CalendarDays, label: "Thời gian", value: "Thứ Sáu, ngày 29/5/2026" },
  { icon: Clock, label: "Thời lượng", value: "8 giờ" },
  { icon: GraduationCap, label: "Hình thức", value: "Blended Learning" },
  { icon: MapPin, label: "Địa điểm trực tiếp", value: "Tầng G – Tòa nhà Thái Bình" },
  { icon: Video, label: "Online", value: "Qua Zoom" },
  { icon: UserCheck, label: "Người hướng dẫn", value: "Đ/c Văn Thị Ngân – Phòng Công nghệ Thông tin" },
];

const curriculum = [
  {
    title: "Phần 1: Tổng quan về ISO/IEC 27001:2022",
    content:
      "Giới thiệu tổng quan về tiêu chuẩn ISO/IEC 27001:2022 và vai trò của Hệ thống Quản lý An toàn Thông tin trong tổ chức.",
  },
  {
    title: "Phần 2: Các điều khoản yêu cầu từ 4–10",
    content:
      "Điều khoản 4: Bối cảnh của tổ chức; Điều khoản 5: Sự lãnh đạo; Điều khoản 6: Hoạch định; Điều khoản 7: Hỗ trợ; Điều khoản 8: Vận hành; Điều khoản 9: Đánh giá hiệu suất; Điều khoản 10: Cải tiến.",
  },
  {
    title: "Phần 3: Phụ lục A – 93 kiểm soát bảo mật thông tin",
    content:
      "Chủ đề 5: Kiểm soát tổ chức – 37 kiểm soát; Chủ đề 6: Kiểm soát con người – 8 kiểm soát; Chủ đề 7: Kiểm soát vật lý – 14 kiểm soát; Chủ đề 8: Kiểm soát công nghệ – 34 kiểm soát.",
  },
  {
    title: "Phần 4: Hướng dẫn đánh giá viên nội bộ",
    content:
      "Cung cấp nội dung hướng dẫn phục vụ hoạt động đánh giá viên nội bộ theo tiêu chuẩn ISO/IEC 27001:2022.",
  },
];

const steps = [
  "Nghiên cứu trước tài liệu tiêu chuẩn ISO/IEC 27001 trên LXP.",
  "Chuẩn bị ví dụ về bảo mật, biện pháp/nguy cơ an toàn thông tin đã gặp hoặc rủi ro an toàn thông tin trong thực tế.",
  "Tham gia đầy đủ khóa đào tạo vào Thứ Sáu, ngày 29/5/2026 theo hình thức Blended Learning.",
  "Thực hiện bài thi cuối khóa.",
  "Hoàn thành khóa học khi tham gia đầy đủ và đạt bài thi cuối khóa với điểm đạt từ 7 điểm trở lên.",
];

const faqs = [
  {
    q: "Ai nên tham gia chương trình?",
    a: "CBCNV cần chứng nhận hoàn thành khóa đào tạo tiêu chuẩn ISO/IEC 27001 để đáp ứng KNL và CBCNV có nhu cầu tìm hiểu về tiêu chuẩn ISO/IEC 27001 để phục vụ công việc hàng ngày.",
  },
  { q: "Khóa học diễn ra khi nào?", a: "Khóa học diễn ra vào Thứ Sáu, ngày 29/5/2026." },
  { q: "Khóa học kéo dài bao lâu?", a: "Thời lượng khóa học là 8 giờ." },
  { q: "Hình thức tham gia là gì?", a: "Khóa học tổ chức theo hình thức Blended Learning, kết hợp online và offline." },
  { q: "Tham gia trực tiếp ở đâu?", a: "Học viên tham gia trực tiếp tại tầng G – Tòa nhà Thái Bình." },
  { q: "Tham gia online qua kênh nào?", a: "Học viên tham gia online qua Zoom." },
  {
    q: "Cần chuẩn bị gì trước khi học?",
    a: "Học viên cần nghiên cứu trước tài liệu tiêu chuẩn ISO/IEC 27001 trên LXP và chuẩn bị ví dụ về bảo mật, biện pháp/nguy cơ hoặc rủi ro an toàn thông tin trong thực tế.",
  },
  {
    q: "Điều kiện hoàn thành khóa học là gì?",
    a: "Học viên cần tham gia đầy đủ và thi đạt bài thi cuối khóa với điểm đạt từ 7 điểm trở lên.",
  },
];

function Logo({ inverse = false }) {
  return (
    <div className="leading-none" aria-label="Viettel Networks">
      <div
        className="font-black tracking-[-0.06em] text-[30px] sm:text-[34px]"
        style={{ color: inverse ? "#FFFFFF" : COLORS.red }}
      >
        viettel
      </div>
      <div
        className="font-black tracking-[-0.05em] text-[16px] sm:text-[18px] ml-[72px] -mt-1"
        style={{ color: inverse ? "#FFFFFF" : COLORS.black }}
      >
        networks
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, children, center = true }) {
  return (
    <div className={`mb-10 ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: COLORS.red }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-neutral-600 md:text-lg">{children}</p>}
    </div>
  );
}

function Button({ children, variant = "primary", href = "#dang-ky", className = "" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition duration-200 focus:outline-none focus:ring-4 focus:ring-red-200";
  const styles =
    variant === "primary"
      ? "bg-[#E30613] text-white hover:bg-[#B30000] shadow-lg shadow-red-100"
      : "border border-neutral-300 bg-white text-neutral-950 hover:border-[#E30613] hover:text-[#E30613]";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [openCurriculum, setOpenCurriculum] = useState(0);

  return (
    <main className="min-h-screen bg-white text-neutral-950" style={{ fontFamily: "Arial, Helvetica Neue, sans-serif" }}>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#top" className="flex items-center gap-4">
            <Logo />
            <div className="hidden border-l border-neutral-200 pl-4 text-sm font-semibold text-neutral-700 lg:block">
              Chương trình đào tạo nội bộ<br />ISO/IEC 27001:2022
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Điều hướng chính">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-neutral-700 hover:text-[#E30613]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:0989208017" className="text-sm font-bold text-neutral-800 hover:text-[#E30613]">
              0989 208 017
            </a>
            <Button>Đăng ký tham gia</Button>
          </div>

          <button
            className="rounded-xl border border-neutral-200 p-2 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Mở menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-2 w-full">Đăng ký tham gia</Button>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative overflow-hidden bg-[#F5F5F5]">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#E30613]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E30613] ring-1 ring-neutral-200">
              Chương trình đào tạo nội bộ
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-neutral-950 md:text-7xl">
              Tiêu chuẩn <span className="text-[#E30613]">ISO/IEC 27001:2022</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
              Tham gia chương trình đào tạo nội bộ về ISO/IEC 27001:2022 – tiêu chuẩn quốc tế về Hệ thống Quản lý An toàn Thông tin (Information Security Management System – ISMS).
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              Chương trình giúp CBCNV nâng cao nhận thức về an toàn thông tin, hiểu các yêu cầu cốt lõi của tiêu chuẩn và áp dụng vào công việc thực tế.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="text-base">Đăng ký tham gia <ArrowRight size={18} /></Button>
              <Button variant="secondary" href="#noi-dung" className="text-base">
                Xem nội dung chương trình
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Hạn đăng ký: 25/5/2026", "Thời lượng: 8 giờ", "Hình thức: Blended Learning"].map((item) => (
                <div key={item} className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-bold text-neutral-800">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] bg-[#0A0A0A] p-6 shadow-2xl">
              <div className="mb-8 flex items-center justify-between">
                <Logo inverse />
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white">ISMS</div>
              </div>
              <div className="rounded-3xl bg-white p-6">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E30613] text-white">
                    <ShieldCheck size={30} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7F7F7F]">Information Security</p>
                    <p className="text-2xl font-black text-neutral-950">ISO/IEC 27001:2022</p>
                  </div>
                </div>
                <div className="grid gap-3">
                  {[
                    "Điều khoản yêu cầu 4–10",
                    "Phụ lục A – 93 kiểm soát",
                    "Hướng dẫn đánh giá viên nội bộ",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-neutral-200 p-4">
                      <CheckCircle2 className="text-[#E30613]" size={20} />
                      <span className="font-semibold text-neutral-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="tong-quan" className="border-y border-neutral-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="sr-only">Thông tin nổi bật về chương trình</h2>
          <div className="grid gap-3 md:grid-cols-5">
            {[
              "Tiêu chuẩn quốc tế ISO/IEC 27001:2022",
              "Hệ thống Quản lý An toàn Thông tin – ISMS",
              "Có chứng nhận hoàn thành nội bộ",
              "Tài liệu đào tạo nội dung khóa học",
              "Người hướng dẫn: Đ/c Văn Thị Ngân",
            ].map((badge) => (
              <div key={badge} className="rounded-2xl bg-[#F5F5F5] px-4 py-4 text-sm font-bold leading-6 text-neutral-800">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader eyebrow="Lợi ích" title="Lợi ích khi tham gia chương trình">
            Tập trung vào nhận thức, yêu cầu cốt lõi của tiêu chuẩn và khả năng áp dụng vào công việc thực tế.
          </SectionHeader>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.article
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E30613]/10 text-[#E30613]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-extrabold text-neutral-950">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{benefit.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="thong-tin" className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader eyebrow="Course Snapshot" title="Thông tin khóa học" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courseInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-3xl bg-white p-6 shadow-sm">
                  <Icon className="mb-4 text-[#E30613]" size={28} />
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">{item.label}</p>
                  <p className="mt-2 text-lg font-extrabold text-neutral-950">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="doi-tuong" className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#0A0A0A] p-8 text-white">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-200">Đối tượng</p>
            <h2 className="text-3xl font-black md:text-4xl">Ai nên tham gia chương trình?</h2>
            <div className="mt-8 space-y-4">
              {[
                "CBCNV cần chứng nhận hoàn thành khóa đào tạo tiêu chuẩn ISO/IEC 27001 để đáp ứng KNL.",
                "CBCNV có nhu cầu tìm hiểu về tiêu chuẩn ISO/IEC 27001 để phục vụ công việc hàng ngày.",
              ].map((text) => (
                <div key={text} className="flex gap-3 rounded-2xl bg-white/10 p-4">
                  <Users className="mt-1 shrink-0 text-white" size={20} />
                  <p className="leading-7 text-white/90">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#E30613]">Chuẩn bị trước</p>
            <h2 className="text-3xl font-black md:text-4xl">Cần chuẩn bị trước khi học</h2>
            <div className="mt-8 space-y-4">
              {[
                "Nghiên cứu trước tài liệu tiêu chuẩn ISO/IEC 27001 trên LXP.",
                "Chuẩn bị một số ví dụ về bảo mật, biện pháp/nguy cơ an toàn thông tin đã gặp hoặc các rủi ro an toàn thông tin trong thực tế.",
              ].map((text) => (
                <div key={text} className="flex gap-3 rounded-2xl bg-[#F5F5F5] p-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#E30613]" size={20} />
                  <p className="leading-7 text-neutral-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="noi-dung" className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <SectionHeader eyebrow="Chương trình" title="Nội dung chương trình đào tạo">
            Bốn phần nội dung trọng tâm, bao gồm tổng quan tiêu chuẩn, các điều khoản yêu cầu, Phụ lục A và hướng dẫn đánh giá viên nội bộ.
          </SectionHeader>
          <div className="space-y-4">
            {curriculum.map((item, index) => (
              <div key={item.title} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
                <button
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setOpenCurriculum(openCurriculum === index ? -1 : index)}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E30613] text-lg font-black text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-extrabold text-neutral-950 md:text-xl">{item.title}</h3>
                  </div>
                  <ChevronDown className={`shrink-0 transition ${openCurriculum === index ? "rotate-180" : ""}`} />
                </button>
                {openCurriculum === index && <p className="px-6 pb-6 pl-[88px] leading-7 text-neutral-600">{item.content}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader eyebrow="Lộ trình" title="Lộ trình tham gia và hoàn thành khóa học" />
          <div className="grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="relative rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="mb-4 text-4xl font-black text-[#E30613]">{String(index + 1).padStart(2, "0")}</div>
                <p className="text-sm font-semibold leading-7 text-neutral-700">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button>Đăng ký tham gia trước 25/5/2026 <ArrowRight size={18} /></Button>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeader eyebrow="Hoàn thành khóa học" title="Điều kiện hoàn thành và quyền lợi học viên">
            <span className="text-neutral-300">Thông tin cần nắm rõ trước khi đăng ký tham gia chương trình.</span>
          </SectionHeader>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 text-neutral-950">
              <FileText className="mb-5 text-[#E30613]" size={34} />
              <h3 className="text-2xl font-black">Điều kiện hoàn thành</h3>
              <ul className="mt-5 space-y-4 text-neutral-700">
                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[#E30613]" />Tham gia đầy đủ khóa học.</li>
                <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[#E30613]" />Thi đạt bài thi cuối khóa với điểm đạt từ 7 điểm trở lên.</li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-[#E30613] p-8 text-white">
              <Award className="mb-5" size={34} />
              <h3 className="text-2xl font-black">Quyền lợi học viên</h3>
              <ul className="mt-5 space-y-4 text-white/95">
                <li className="flex gap-3"><CheckCircle2 className="shrink-0" />Nhận chứng nhận hoàn thành nội bộ khi hoàn thành khóa học Tiêu chuẩn ISO/IEC 27001:2022.</li>
                <li className="flex gap-3"><CheckCircle2 className="shrink-0" />Nhận tài liệu đào tạo nội dung khóa học Tiêu chuẩn ISO/IEC 27001:2022.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="dang-ky" className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#E30613]">Đăng ký</p>
            <h2 className="text-4xl font-black tracking-tight text-neutral-950">Đăng ký thông tin tham gia</h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Học viên đăng ký thông tin qua biểu mẫu khảo sát. Hạn cuối đăng ký: <strong className="text-[#E30613]">25/5/2026</strong>.
            </p>
            <div className="mt-8 rounded-3xl bg-[#F5F5F5] p-6">
              <p className="font-bold text-neutral-950">Đầu mối liên hệ</p>
              <p className="mt-2 text-neutral-700">Đ/c Mai Ngọc Minh – Phòng Nhân sự – Tổng Công ty Mạng lưới</p>
              <div className="mt-4 space-y-2 text-sm font-semibold text-neutral-800">
                <p className="flex items-center gap-2"><Phone size={16} className="text-[#E30613]" /> 0989 208 017</p>
                <p className="flex items-center gap-2"><Mail size={16} className="text-[#E30613]" /> minhmn@viettel.com.vn</p>
              </div>
            </div>
          </div>

          <form className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-xl md:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-neutral-800">Mã nhân viên</span>
                <input className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-[#E30613] focus:ring-4 focus:ring-red-100" placeholder="Nhập mã nhân viên" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-neutral-800">Họ và tên</span>
                <input className="rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-[#E30613] focus:ring-4 focus:ring-red-100" placeholder="Nhập họ và tên" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-neutral-800">Mục đích tham gia chương trình</span>
                <textarea className="min-h-[120px] rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-[#E30613] focus:ring-4 focus:ring-red-100" placeholder="Chia sẻ ngắn gọn mục đích tham gia" />
              </label>
              <button type="button" className="rounded-xl bg-[#E30613] px-5 py-4 text-base font-black text-white transition hover:bg-[#B30000] focus:outline-none focus:ring-4 focus:ring-red-200">
                Gửi đăng ký
              </button>
              <p className="text-center text-xs text-neutral-500">[CẦN BỔ SUNG] URL form khảo sát hoặc cấu hình form nhúng.</p>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeader eyebrow="FAQ" title="Câu hỏi thường gặp" />
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="rounded-2xl border border-neutral-200 bg-white">
                <button
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="font-extrabold text-neutral-950">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && <p className="px-5 pb-5 leading-7 text-neutral-600">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E30613] py-16 text-white md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Sẵn sàng tham gia chương trình đào tạo ISO/IEC 27001:2022?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/95">
            Đăng ký tham gia để nâng cao nhận thức về an toàn thông tin, hiểu các yêu cầu cốt lõi của tiêu chuẩn và chuẩn bị cho hoạt động áp dụng trong công việc thực tế.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#dang-ky" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-black text-[#E30613] transition hover:scale-[1.02]">
              Đăng ký tham gia ngay <ArrowRight size={18} />
            </a>
            <a href="mailto:minhmn@viettel.com.vn" className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-4 text-base font-black text-white transition hover:bg-white/10">
              Liên hệ đầu mối chương trình
            </a>
          </div>
          <p className="mt-4 text-sm font-bold text-white">Hạn cuối đăng ký: 25/5/2026</p>
        </div>
      </section>

      <footer className="bg-[#0A0A0A] px-4 py-12 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">Chương trình đào tạo nội bộ – ISO/IEC 27001:2022</p>
          </div>
          <div>
            <p className="font-black">Menu</p>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-black">Thông tin liên hệ</p>
            <p className="mt-4 text-sm leading-7 text-white/70">Đ/c Mai Ngọc Minh – Phòng Nhân sự – Tổng Công ty Mạng lưới</p>
            <p className="mt-2 text-sm text-white/70">0989 208 017 · minhmn@viettel.com.vn</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/50">
          © 2025 Tổng Công ty Mạng lưới Viettel (VTNet). [CẦN BỔ SUNG] Link Chính sách Bảo mật và Điều khoản Sử dụng nếu cần hiển thị.
        </div>
      </footer>

      <div className="fixed bottom-3 left-3 right-3 z-40 rounded-2xl border border-neutral-200 bg-white p-3 shadow-2xl md:left-auto md:right-6 md:flex md:w-auto md:items-center md:gap-4">
        <p className="mb-2 text-center text-xs font-bold text-neutral-800 md:mb-0 md:text-left">
          Đăng ký chương trình ISO/IEC 27001:2022 trước 25/5/2026
        </p>
        <a href="#dang-ky" className="flex items-center justify-center rounded-xl bg-[#E30613] px-4 py-2 text-sm font-black text-white hover:bg-[#B30000]">
          Đăng ký tham gia
        </a>
      </div>
    </main>
  );
}

export default App;
