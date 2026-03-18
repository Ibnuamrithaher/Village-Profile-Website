import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Map, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  const heroImg = "https://petung-dongko.trenggalekkab.go.id/assets/files/artikel/sedang_1572492207IMG-20180510-WA0006.jpg"

  const features = [
    { icon: <BookOpen />, title: 'Berita & Informasi', desc: 'Dapatkan berita terkini seputar kegiatan dan perkembangan di Desa Petung.' },
    { icon: <Map />, title: 'Potensi Wisata', desc: 'Jelajahi potensi alam dan produk usaha unggulan di wilayah dan desa kami.' },
    { icon: <Users />, title: 'Layanan Mandiri', desc: 'Kemudahan akses layanan administrasi secara online bagi seluruh masyarakat desa.' }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Pemandangan Desa Petung"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))/80] via-transparent to-[hsl(var(--background))]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
            >
              Selamat Datang di <span className="gradient-text">Desa Petung</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl opacity-80 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              Kecamatan Dongko, Kabupaten Trenggalek. Kami hadir dengan semangat memberikan pelayanan transparan, cepat, dan inovatif untuk seluruh warga.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/services" className="btn btn-primary btn-lg px-8 py-4 text-lg">
                Layanan Publik <ArrowRight size={22} className="ml-2" />
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg px-8 py-4 text-lg">
                Profil Desa Terbaru
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Abstract animated light spots */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full"
        />
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-4">Fokus <span className="gradient-text">Sistem Desa</span></h2>
            <p className="opacity-70 text-lg max-w-2xl mx-auto">Meningkatkan kesejahteraan warga melalui transparansi digitalisasi layanan dan informasi publik.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative"
              >
                <div className="glass p-10 rounded-3xl h-full border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center text-blue-500 mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">{feature.title}</h3>
                  <p className="opacity-70 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
