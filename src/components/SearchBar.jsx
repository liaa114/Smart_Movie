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
      className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}