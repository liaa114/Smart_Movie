export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search movies..."
      className="w-full p-4 rounded-xl text-white border border-[#FF9BD2] 
      outline-none focus:ring-2 focus:ring-[#FF9BD2] bg-black/40 backdrop-blur-sm"
    />
  )
}