import { Search } from "lucide-react"

export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="relative group">

      <div
        className="
        absolute
        inset-0
        rounded-2xl
        bg-gradient-to-r
        from-pink-500/20
        to-fuchsia-500/20
        blur-xl
        opacity-0
        group-focus-within:opacity-100
        transition
        duration-500
        "
      ></div>

      <Search
        size={18}
        className="
        absolute
        left-5
        top-1/2
        -translate-y-1/2
        text-zinc-500
        "
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search movies..."
        className="
        w-full
        h-14
        pl-14
        pr-5
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        text-white
        placeholder:text-zinc-500
        text-sm
        outline-none
        transition-all
        duration-300
        focus:border-[#FF9BD2]/60
        focus:bg-white/[0.07]
        focus:shadow-[0_0_30px_rgba(255,155,210,0.15)]
        "
      />
    </div>
  )
}