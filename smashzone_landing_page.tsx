import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronDown,
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Calendar,
  Star,
  Quote,
  Activity,
  History,
  Tag,
  HelpCircle,
  Trophy,
  Coffee,
  ShoppingBag,
  Wind
} from 'lucide-react';
import profileImg from './assets/profile.png';
import heroImg from './assets/hero-bg.jpg';
import lapanganImg from './assets/lapangan.webp';
import proshopImg from './assets/proshop.webp';
import cafeImg from './assets/cafe.webp';
import lokerImg from './assets/loker.webp';

const pageData = {
  name: "SmashZone",
  phone: "6289529605601",
  address: "Jl. Sudirman No. 88, Palangka Raya, Kalteng.",
  title: "Arena Badminton Premium & Nyaman di Kotamu",
  description: "Tingkatkan performa permainanmu di SmashZone! Nikmati fasilitas lapangan berstandar internasional, karpet anti-slip (BWF Standard), pencahayaan optimal, dan sirkulasi udara terbaik untuk pengalaman bermain maksimal.",
  profileImg: profileImg, 
  heroImg: heroImg,
  links: {
    instagram: "https://www.instagram.com/solusilokal.id/",
    maps: "https://maps.google.com/?cid=1769949229246127960", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  highlights: [
    { text: "BWF Standard", icon: "Trophy" },
    { text: "Buka 08:00 - 00:00", icon: "Clock" },
    { text: "Premium Vinyl", icon: "Activity" }
  ],
  catalog: [
    { title: "Lapangan Vinyl Premium", desc: "Ketebalan 4.5mm, empuk dan aman untuk lutut.", img: lapanganImg },
    { title: "Pro-Shop & Senar", desc: "Tersedia raket, shuttlecock, dan layanan tarik senar digital.", img: proshopImg },
    { title: "Cafe & Lounge", desc: "Tempat bersantai nyaman dengan aneka minuman energi.", img: cafeImg },
    { title: "Loker & Shower", desc: "Kamar mandi bersih dengan air panas dan loker aman.", img: lokerImg },
  ],
  pricing: [
    { time: "Senin - Jumat (08:00 - 16:00)", price: "Rp 50.000", unit: "/ Jam" },
    { time: "Senin - Jumat (16:00 - 00:00)", price: "Rp 80.000", unit: "/ Jam" },
    { time: "Sabtu, Minggu & Libur", price: "Rp 90.000", unit: "/ Jam" }
  ],
  faqs: [
    { q: "Apakah bisa menyewa sepatu badminton?", a: "Ya, kami menyewakan sepatu badminton dengan berbagai ukuran di area kasir (Rp 20.000/main)." },
    { q: "Berapa lama proses tarik senar raket?", a: "Proses tarik senar memakan waktu sekitar 30-45 menit tergantung antrean, menggunakan mesin digital akurasi tinggi." },
    { q: "Apakah lapangan bisa di-booking bulanan (member)?", a: "Tentu, kami menyediakan paket member bulanan dengan potongan harga khusus. Hubungi admin via WhatsApp untuk detailnya." },
    { q: "Apakah tersedia tempat parkir mobil?", a: "Ya, SmashZone memiliki area parkir yang luas, cukup untuk menampung puluhan mobil dan motor dengan keamanan CCTV 24 jam." }
  ],
  testimonials: [
    { name: "Andi Pratama", rating: 5, text: "Lapangan paling enak di Palangka Raya! Karpetnya kesat banget, pencahayaan juga pas gak bikin silau pas mau smash." },
    { name: "Rina Sugiarto", rating: 5, text: "Fasilitasnya lengkap, habis main bisa langsung mandi air hangat dan nongkrong di cafenya. Pelayanannya top!" },
    { name: "Klub BPP", rating: 4, text: "Sirkulasi udaranya lumayan bagus karena atap tinggi. Jadwal booking sangat teratur dan on time." }
  ],
  history: [
    { year: "2021", event: "SmashZone didirikan dengan 3 lapangan karpet standar BWF." },
    { year: "2023", event: "Ekspansi fasilitas dengan penambahan Pro-Shop dan Cafe Lounge." },
    { year: "2025", event: "Membuka perluasan 3 lapangan tambahan dan menjadi host turnamen lokal terbesar." }
  ]
};

const navItems = [
  { label: 'Tentang', id: 'tentang' },
  { label: 'Katalog', id: 'katalog' },
  { label: 'Harga', id: 'harga' },
  { label: 'Lokasi', id: 'lokasi' },
  { label: 'FAQ', id: 'faq' },
];

export default function App() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeNav, setActiveNav] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }

      // Highlight active nav based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 150; // offset for sticky nav

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveNav(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100; // offset
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const date = formData.get('date');
    const time = formData.get('time');
    const duration = formData.get('duration');
    const notes = formData.get('notes');
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20ingin%20booking%20lapangan%20pada%20tanggal%20${date}%20jam%20${time}%20selama%20${duration}%20jam.%20Catatan:%20${notes || '-'}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank');
  const shareToFacebook = () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  const shareToTwitter = () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        
        body {
          background-color: #0b1d3a; /* Navy Blue dari logo */
          color: #f8fafc;
          margin: 0;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3, h4 {
          font-family: 'Space Grotesk', sans-serif;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .accent-gradient {
          background: linear-gradient(135deg, #d31a22 0%, #a8151b 100%); /* Merah dari logo */
        }
        .text-accent { color: #38bdf8; } /* Biru Muda dari logo untuk icon/text */
        .bg-accent { background-color: #d31a22; }
        
        /* Sticky Nav Active State */
        .nav-active {
          background-color: #d31a22 !important;
          color: #ffffff !important;
          font-weight: 600;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#0b1d3a] min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-8 px-6 bg-[#0b1d3a]">
          
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-[#0b1d3a]/40 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-[#0b1d3a]/80 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a] via-[#0b1d3a]/75 to-[#0b1d3a]/35"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-28 h-28 rounded-3xl p-2 bg-white shadow-2xl border border-white/20 rotate-3 transform hover:rotate-0 transition-transform flex items-center justify-center">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-slate-300 font-normal text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.title}
            </p>

            <div className="flex flex-col w-full max-w-sm gap-3 mb-8">
              <div className="grid grid-cols-2 gap-3 w-full">
                <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/60 backdrop-blur-md border border-white/10 hover:bg-slate-700 transition-all text-white shadow-sm text-sm font-medium">
                  <Instagram size={18} className="text-accent" /> Instagram
                </a>
                <a href={pageData.links.tiktok} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/60 backdrop-blur-md border border-white/10 hover:bg-slate-700 transition-all text-white shadow-sm text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-accent" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <a href={pageData.links.maps} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800/60 backdrop-blur-md border border-white/10 hover:bg-slate-700 transition-all text-white shadow-sm text-sm font-medium">
                <MapPin size={18} className="text-accent" /> Lokasi Arena
              </a>
            </div>

            <button 
              onClick={() => scrollToSection('booking-form')}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 accent-gradient text-white rounded-2xl font-bold text-[14px] uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_rgba(211,26,34,0.4)]"
            >
              Booking Lapangan
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* HIGHLIGHTS BAR */}
        <div className="py-4 px-6 bg-slate-800/30 flex justify-between items-center border-b border-white/5">
          {pageData.highlights.map((hl, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5 text-center">
              {hl.icon === 'Trophy' && <Trophy size={18} className="text-accent" />}
              {hl.icon === 'Clock' && <Clock size={18} className="text-accent" />}
              {hl.icon === 'Activity' && <Activity size={18} className="text-accent" />}
              <span className="text-[10px] text-slate-300 font-medium uppercase tracking-wider">{hl.text}</span>
            </div>
          ))}
        </div>

        {/* TENTANG KAMI */}
        <section id="tentang" className="pt-12 px-6 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-800 rounded-lg"><Activity className="text-accent" size={20} /></div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Tentang SmashZone</h2>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            {pageData.description}
          </p>

          {/* HISTORY / SEJARAH */}
          <div id="history" className="mt-8">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
              <History size={16} /> Perjalanan Kami
            </h3>
            <div className="flex flex-col gap-0 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-slate-700/50"></div>
              {pageData.history.map((hist, idx) => (
                <div key={idx} className="flex gap-4 relative mb-4 last:mb-0">
                  <div className="w-6 h-6 rounded-full bg-slate-800 border-2 border-accent flex-shrink-0 z-10 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{hist.year}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{hist.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KATALOG / FASILITAS */}
        <section id="katalog" className="py-10 bg-slate-800/20 border-y border-white/5">
          <div className="px-6 mb-6">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 bg-slate-800 rounded-lg"><Trophy className="text-accent" size={20} /></div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Fasilitas Kami</h2>
            </div>
            <p className="text-slate-400 text-xs">Jelajahi kenyamanan yang tersedia di arena kami.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.catalog.map((item, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[260px] bg-slate-800/50 border border-white/10 rounded-2xl overflow-hidden group">
                <div className="h-40 w-full overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-[15px] mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HARGA */}
        <section id="harga" className="py-10 px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-slate-800 rounded-lg"><Tag className="text-accent" size={20} /></div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Daftar Harga</h2>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.pricing.map((price, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/40 border border-white/10 rounded-2xl hover:bg-slate-800/60 transition-colors">
                <span className="text-[13px] font-medium text-slate-200">{price.time}</span>
                <div className="text-right">
                  <div className="text-accent font-bold text-lg">{price.price}</div>
                  <div className="text-slate-500 text-[10px] uppercase tracking-wide">{price.unit}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOKASI */}
        <section id="lokasi" className="py-10 px-6 bg-slate-800/20 border-y border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-slate-800 rounded-lg"><MapPin className="text-accent" size={20} /></div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Lokasi Arena</h2>
          </div>
          
          <div className="w-full h-48 bg-slate-800 rounded-2xl border border-white/10 overflow-hidden relative mb-4">
            {/* Map Placeholder Graphic */}
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <MapPin size={32} className="text-accent mb-2 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
              <p className="text-white text-sm font-medium">{pageData.address}</p>
            </div>
          </div>
          
          <a href={pageData.links.maps} target="_blank" rel="noreferrer" className="w-full block text-center py-3.5 bg-slate-800 border border-white/10 text-white rounded-xl text-sm font-medium hover:bg-slate-700 transition-colors">
            Buka di Google Maps
          </a>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-10 px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-slate-800 rounded-lg"><HelpCircle className="text-accent" size={20} /></div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Tanya Jawab</h2>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="border border-white/10 rounded-2xl overflow-hidden bg-slate-800/30">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-4 overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-400 text-xs leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI */}
        <section className="py-10 px-6 bg-slate-800/20 border-y border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-slate-800 rounded-lg"><Quote className="text-accent" size={20} /></div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Kata Pemain</h2>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-slate-800/50 p-5 rounded-2xl border border-white/10 flex flex-col gap-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 text-6xl font-serif text-white leading-none">"</div>
                <div className="flex items-center gap-1 z-10">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic z-10">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-3 z-10">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-accent font-bold text-xs border border-white/10">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-white">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING FORM */}
        <section id="booking-form" className="py-12 px-6">
          <div className="bg-slate-800/40 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full"></div>
            
            <div className="relative z-10 mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Booking Lapangan</h2>
              <p className="text-slate-400 text-sm leading-relaxed">Isi form di bawah ini untuk cek ketersediaan & reservasi otomatis via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide ml-1">Nama Penyewa</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama / klub Anda"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col gap-1.5 w-[60%]">
                  <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide ml-1">Tanggal Main</label>
                  <input 
                    type="date" 
                    name="date" 
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all [color-scheme:dark]"
                  />
                </div>
                <div className="flex flex-col gap-1.5 w-[40%]">
                  <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide ml-1">Jam</label>
                  <input 
                    type="time" 
                    name="time" 
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide ml-1">Durasi Bermain</label>
                <select 
                  name="duration" 
                  required
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
                >
                  <option value="" className="bg-slate-900">Pilih durasi...</option>
                  <option value="1" className="bg-slate-900">1 Jam</option>
                  <option value="2" className="bg-slate-900">2 Jam</option>
                  <option value="3" className="bg-slate-900">3 Jam</option>
                  <option value="4" className="bg-slate-900">4 Jam Lebih</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide ml-1">Catatan Tambahan (Opsional)</label>
                <textarea 
                  name="notes" 
                  rows="2"
                  placeholder="Cth: Ingin lapangan yang dekat kipas angin..."
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-[#25D366] text-white font-bold text-[14px] tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20b858] transition-colors shadow-lg"
              >
                Kirim via WhatsApp
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-white/10 mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-white/20 flex items-center justify-center mb-4 p-2 overflow-hidden transform rotate-3">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain" />
          </div>
          
          <div className="text-slate-400 text-xs flex flex-col gap-1 items-center">
            <span className="font-bold text-white text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-500 text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 text-[10px] mt-2 tracking-wide font-medium hover:text-slate-300 transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-30 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={() => scrollToSection('booking-form')}
            className="w-full flex items-center justify-between px-6 py-4 bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-2xl text-white shadow-[0_10px_40px_rgba(11,29,58,0.8)] hover:bg-slate-700 active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-white">Booking Sekarang</span>
            <div className="bg-accent text-white p-2 rounded-xl">
              <Calendar size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/80 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-[#0b1d3a] sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-white font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-slate-800/50 border border-white/10 rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-sm">
              <div className="w-[72px] h-[72px] rounded-2xl bg-white border border-white/20 mb-4 p-2 overflow-hidden transform rotate-3 flex items-center justify-center">
                <img src={pageData.profileImg} alt="Profile" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-white font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-accent text-sm mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button onClick={copyToClipboard} className="w-[60px] h-[60px] rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-all border border-white/10">
                  {copied ? <Check size={26} className="text-accent" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-slate-400 text-center">{copied ? 'Tersalin' : 'Salin Tautan'}</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button onClick={shareToTwitter} className="w-[60px] h-[60px] rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-all border border-white/10">
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-slate-400 text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button onClick={shareToFacebook} className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all">
                  <Facebook size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-400 text-center">Facebook</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button onClick={shareToWhatsApp} className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all">
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-400 text-center">WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}