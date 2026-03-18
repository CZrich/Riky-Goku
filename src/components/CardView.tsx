import type { ICardProps } from "../types/ICard";

export function CardView({ title, subtitle, image, badge, description, footerInfo }: ICardProps) {
    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1">
            
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                <img
                    src={image||""}
                 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
               
                {badge && (
                    <div className="absolute top-3 right-3">
                        <span className="bg-white/90 backdrop-blur-sm text-blue-900 text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg shadow-lg">
                            {badge}
                        </span>
                    </div>
                )}
                
          
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                    <p className="text-[10px] font-black uppercase tracking-tighter text-blue-500 mb-1">{subtitle}</p>
                    <h3 className="text-2xl font-extrabold text-gray-900 leading-tight group-hover:text-blue-700 transition-colors italic uppercase">
                        {title}
                    </h3>
                </div>

                {description && (
                    <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed">
                        {description}
                    </p>
                )}

               
                {footerInfo && (
                    <div className="pt-4 border-t border-gray-100 mt-auto flex justify-between items-center">
                        <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                            Stats
                        </span>
                        <span className="text-xs text-gray-700 font-mono bg-gray-100 px-2 py-1 rounded">
                            {footerInfo}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}