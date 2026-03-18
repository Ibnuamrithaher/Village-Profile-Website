import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { number: '34', label: 'KM dari Panggul' },
    { number: '24/7', label: 'Layanan Bantuan' },
    { number: '100%', label: 'Transparansi' },
    { number: '10+', label: 'Inovasi Unggulan' }
  ]

  const landscapeImg = "https://petung-dongko.trenggalekkab.go.id/assets/files/galeri/sedang_IMG_20180107_100122.jpg"

  return (
    <div className="pt-24 pb-20">
      <section className="text-center py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Profil <span className="gradient-text">Desa Petung</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl opacity-75 max-w-2xl mx-auto leading-relaxed"
          >
            Mewujudkan desa yang mandiri, sejahtera, dan berbudaya dengan mengedepankan pelayanan prima berdasar digitalisasi.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <img 
              src={landscapeImg} 
              alt="Pemandangan Desa Petung" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold">Lintasan Sejarah</h2>
            <div className="space-y-6 opacity-80 leading-relaxed text-lg">
              <p>
                Desa Petung berlokasi di Kecamatan Dongko, Kabupaten Trenggalek, Provinsi Jawa Timur. Menjadi titik temu strategis di Jl. Raya Trenggalek-Panggul KM 34, desa kami diberkahi tata letak dan kekayaan alam yang asri.
              </p>
              <p>
                Pemerintah Desa Petung terus berkomitmen mengelola APBDes secara transparan demi kemajuan sarana prasarana, pelestarian lingkungan, dan layanan administrasi penduduk yang lebih efisien via SID (Sistem Informasi Desa).
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-2xl border border-white/5"
                >
                  <h3 className="text-3xl font-bold gradient-text">{stat.number}</h3>
                  <p className="text-sm opacity-60 font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
