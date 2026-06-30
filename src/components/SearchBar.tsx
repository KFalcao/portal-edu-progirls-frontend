type SearchBarProps = {
  placeholder?: string;
};

export function SearchBar({ placeholder = "Buscar..." }: SearchBarProps) {
  return (
    <label className="group relative block max-w-[312px]">
      <span className="absolute inset-y-0 left-4 flex items-center text-neutral-400 transition group-focus-within:text-purple-link">
        <span aria-hidden="true">🔍</span>
      </span>
      <input
        type="search"
        placeholder={placeholder}
        className="w-full rounded-full border border-neutral-700/80 bg-neutral-900/90 py-3 pl-12 pr-4 text-sm text-text placeholder:text-neutral-400 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple/20"
      />
    </label>
  );
}
