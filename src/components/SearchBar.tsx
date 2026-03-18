interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;

  placeholder?: string;
}
export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {


  return (


    // Dentro de SearchBar.tsx
    <div className="relative flex-grow">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 pl-10 pr-10 border rounded-xl" // Añadimos padding a la derecha (pr-10)
        placeholder={placeholder}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")} // Limpia el estado
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}