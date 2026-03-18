import { motion } from 'framer-motion'
import { FileText, Briefcase, Calendar, FolderOpen, PieChart, Info, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    { icon: <FileText size={24} />, title: 'Administrasi Penduduk', desc: 'Pembuatan surat keterangan lahir, mati, pindah, permohonan akta, dsb.' },
    { icon: <FolderOpen size={24} />, title: 'Produk Hukum Desa', desc: 'Akses transparansi terkait SK Kades, Perdes, dsb.' },
    { icon: <PieChart size={24} />, title: 'Perencanaan APBDes', desc: 'Transparansi RPJMDes, RKPDes untuk seluruh warga.' },
    { icon: <Briefcase size={24} />, title: 'Produk Usaha Desa', desc: 'Direktori BUMDes, UMKM, dan potensi usaha warga Petung.' },
    { icon: <Calendar size={24} />, title: 'Agenda Kegiatan', desc: 'Berita penyuluhan terkini dan agenda rapat warga terpadu.' },
    { icon: <Info size={24} />, title: 'Layanan Mandiri', desc: 'Sistem mandiri berbasis PIN/NIK warga untuk layanan di luar jam.' }
  ]

  return (
    <div className="pt-24 pb-20">
      <section className="text-center py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Layanan <span className="gradient-text">Masyarakat</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl opacity-75 max-w-2xl mx-auto leading-relaxed"
          >
            Berbagai panduan layanan dan administrasi secara online bagi kemakmuran warga Desa Petung.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass p-10 rounded-3xl border border-white/10 flex flex-col items-start gap-6 group hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">{service.title}</h3>
              <p className="opacity-70 leading-relaxed flex-grow">{service.desc}</p>
              <Link to="/contact" className="btn btn-outline px-6 py-2 text-sm border-white/20 hover:border-blue-500 group-hover:bg-blue-500/5 group-hover:text-blue-500 transition-all">
                Cek Ketentuan <ArrowRight size={14} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-16 rounded-[3rem] max-w-5xl mx-auto relative overflow-hidden bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Akses Layanan Mandiri</h2>
            <p className="opacity-70 text-lg mb-10 max-w-2xl mx-auto">
              Silakan datang ke balai desa untuk pendaftaran NIK dan PIN login mandiri Anda agar dapat mengakses surat-surat secara daring 24/7.
            </p>
            <Link to="/contact" className="btn btn-primary px-10 py-4 text-lg">Pusat Bantuan Desa</Link>
            
            {/* Background accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
