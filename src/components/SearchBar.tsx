interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <div className="relative flex-grow group">
      
      
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 pl-10 pr-10 border-2 rounded-xl outline-none focus:ring-2  border-[#072083] bg-white text-[#44281d] font-medium placeholder:text-gray-400 transition-all" 
        placeholder={placeholder}
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")} 
          aria-label="Limpiar búsqueda"
          className="absolute inset-y-0 right-0 pr-3 flex items-center group/btn"
        >
        
          <div className="p-1 rounded-full hover:bg-red-50 transition-colors">
            <svg 
              className="w-5 h-5 text-red-500 hover:text-red-700 transition-colors filter drop-shadow-sm" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="3" // Un poco más gruesa para que resalte
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}