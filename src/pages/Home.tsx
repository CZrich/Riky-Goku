import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#8A9294]/10 flex flex-col items-center justify-center p-6 overflow-hidden">
      
      {/* --- DECORACIÓN DE FONDO (AURAS) --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F85B1A]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#072083]/10 rounded-full blur-[120px]"></div>

      <main className="relative z-10 max-w-5xl w-full text-center space-y-12">
        
        {/* --- TÍTULO PRINCIPAL --- */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter text-[#072083]">
            Uky <span className="text-[#F85B1A]">Wiki</span>
          </h1>
          <p className="text-[#8A9294] font-bold text-lg md:text-xl uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed">
            Explora los límites del <span className="text-[#44281d]">Multiverso</span> y el <span className="text-[#F85B1A]">Poder Saiyan</span>
          </p>
        </div>

        {/* --- CARDS DE NAVEGACIÓN --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          {/* Opción Dragon Ball */}
          <Link 
            to="/dragonball" 
            className="group relative bg-[#072083] p-10 rounded-[3rem] overflow-hidden shadow-2xl transition-all hover:-translate-y-4 border-b-[10px] border-[#F85B1A]"
          >
            <div className="relative z-20 space-y-4">
              <h2 className="text-[#FFD7C1] text-4xl font-black uppercase italic tracking-tighter group-hover:scale-110 transition-transform">
                Dragon Ball
              </h2>
              <p className="text-white/60 text-sm font-medium">Consulta niveles de Ki, transformaciones y guerreros legendarios.</p>
              <div className="inline-block bg-[#F85B1A] text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
                Elevar Ki
              </div>
            </div>
            {/* Efecto de brillo interno */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F85B1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>

          {/* Opción Rick & Morty */}
          <Link 
            to="/rickandmorty" 
            className="group relative bg-white p-10 rounded-[3rem] overflow-hidden shadow-2xl transition-all hover:-translate-y-4 border-b-[10px] border-[#97ce4c]"
          >
            <div className="relative z-20 space-y-4">
              <h2 className="text-[#44281d] text-4xl font-black uppercase italic tracking-tighter group-hover:scale-110 transition-transform">
                Rick & Morty
              </h2>
              <p className="text-[#8A9294] text-sm font-medium">Viaja por dimensiones, planetas y especies de todo el multiverso.</p>
              <div className="inline-block bg-[#97ce4c] text-[#44281d] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
                Abrir Portal
              </div>
            </div>
            {/* Efecto de brillo interno */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#97ce4c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>

        </div>

        {/* --- SECCIÓN DE COMENTARIOS / COMUNIDAD --- */}
        <div className="pt-12">
            <Link 
                to="/comments" 
                className="inline-flex items-center gap-3 text-[#072083] font-black uppercase italic hover:text-[#F85B1A] transition-colors"
            >
                <span className="w-12 h-1 bg-[#F85B1A]"></span>
                Dejar un comentario en el radar
                <span className="w-12 h-1 bg-[#F85B1A]"></span>
            </Link>
        </div>

      </main>

      {/* --- FOOTER SUTIL --- */}
      <footer className="absolute bottom-6 text-[10px] font-black uppercase tracking-[0.5em] text-[#8A9294]">
        Sistemas Uky-OS // v2.0.26
      </footer>
    </div>
  );
}