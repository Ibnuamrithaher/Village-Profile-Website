import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      <section className="text-center py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight"
          >
            Hubungi <span className="gradient-text">Pemerintah Desa</span>
          </motion.h1>
          <p className="text-lg opacity-75 max-w-2xl mx-auto">
            Kantor Layanan Administratif Desa Petung, Kecamatan Dongko, Kab. Trenggalek - Kami siap melayani keperluan Anda.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Jadwal Operasional</h2>
              <p className="opacity-75 text-lg">
                Pemerintah desa membuka layanan secara tatap muka pada setiap hari kerja.
              </p>
              <div className="mt-4 p-4 glass inline-block border-l-4 border-blue-500 rounded-r-xl">
                <span className="font-bold text-blue-500">Senin - Jumat: </span>
                <span className="opacity-80">08:00 WIB - 14:00 WIB</span>
              </div>
            </div>

            <div className="space-y-8">
              {[
                { icon: <MapPin />, title: "Peta Lokasi & Alamat", text: "Jl. Raya Trenggalek - Panggul KM 34, Desa Petung, Trenggalek" },
                { icon: <Phone />, title: "Nomor Kontak", text: "(0355) 123-4567" },
                { icon: <Mail />, title: "Email Surel", text: "desa.petung@trenggalekkab.go.id" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-blue-500 shrink-0 border border-white/5 shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="opacity-70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-[300px] glass rounded-[2rem] border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center text-xs opacity-30 tracking-widest uppercase text-center p-10">
                Peta Google Maps Integration Area
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/5 blur-3xl rounded-full" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-80 ml-1">Nama Lengkap</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-blue-500 focus:outline-none transition-all placeholder:opacity-30" placeholder="Sesuai KTP" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-80 ml-1">NIK (16 Digit)</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-blue-500 focus:outline-none transition-all placeholder:opacity-30" placeholder="3503xxxxxxxxxxxx" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-80 ml-1">Subjek Laporan</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-blue-500 focus:outline-none transition-all placeholder:opacity-30" placeholder="Keluhan / Permohonan / Informasi" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold opacity-80 ml-1">Detail Pesan</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-blue-500 focus:outline-none transition-all placeholder:opacity-30" placeholder="Tuliskan detail permintaan Anda..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full py-4 text-lg font-bold shadow-blue-500/20 group">
                Kirim Laporan <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
