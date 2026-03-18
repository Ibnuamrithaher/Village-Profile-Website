import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const logoUrl = "https://petung-dongko.trenggalekkab.go.id/assets/files/logo/logo%201.jpg"
  
  return (
    <footer className="mt-auto pt-16 glass border-t border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src={logoUrl} alt="Logo Desa Petung" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight">
                Desa<span className="gradient-text">Petung</span>
            </span>
          </Link>
          <p className="opacity-70 leading-relaxed text-sm">
            Website resmi Pemerintah Desa Petung, Kecamatan Dongko, Kabupaten Trenggalek. Mewujudkan transparansi layanan publik berbasis digital.
          </p>
          <div className="flex gap-4">
            {[Twitter, Linkedin, Github].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:scale-110 hover:text-blue-500 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Profil Desa</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li><Link to="/about" className="hover:text-blue-500 transition-colors">Sejarah & Asal Usul</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 transition-colors">Visi & Misi Desa</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 transition-colors">Struktur Organisasi</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Hubungi Kami</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Layanan Publik</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Administrasi Kependudukan</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Layanan Mandiri Online</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Pengumuman & Agenda</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Transparansi Dana Desa</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Info Kontak</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 opacity-70">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span>Jl. Raya Trenggalek-Panggul KM 34, Kec. Dongko, Trenggalek</span>
            </li>
            <li className="flex gap-3 opacity-70">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <span>(0355) 123-4567</span>
            </li>
            <li className="flex gap-3 opacity-70">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <span>desa.petung@trenggalekkab.go.id</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6 border-t border-white/5 text-center text-xs opacity-50">
        <p>&copy; {new Date().getFullYear()} Pemerintah Desa Petung. Developed with Modern Stack.</p>
      </div>
    </footer>
  )
}
