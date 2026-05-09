import SearchBar from "./SearchBar"
import FavoritesButton from "./FavoritesButton"

export default function HeroSection({
  search,
  setSearch,
  showFavorites,
  setShowFavorites,
  favorites,
  setFavorites,
  getFavorites,
}) {
  return (
    <div
      className="
      flex
      flex-col
      lg:flex-row
      lg:items-center
      lg:justify-between
      gap-8
      "
    >
      <div>

        <div
          className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
          mb-5
          "
        >
          <div
            className="
            w-2
            h-2
            rounded-full
            bg-pink-400
            animate-pulse
            "
          ></div>

          <span
            className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-zinc-400
            "
          >
            Smart Movie Platform
          </span>
        </div>

        <h1
          className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          font-black
          tracking-[-0.06em]
          leading-none
          text-white
          "
        >
          Smart Movie
          <span className="text-[#FF9BD2]">
            {" "}Search
          </span>
        </h1>

        <p
          className="
          mt-4
          text-sm
          md:text-base
          text-zinc-500
          max-w-lg
          leading-relaxed
          font-light
          "
        >
          Discover trending movies and explore cinematic experiences from around the world.
        </p>

      </div>

      <div
        className="
        flex
        items-center
        gap-4
        w-full
        lg:w-auto
        "
      >
        <div className="w-full lg:w-[430px]">

          <SearchBar
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <FavoritesButton
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
          favorites={favorites}
          setFavorites={setFavorites}
          getFavorites={getFavorites}
        />

      </div>

    </div>
  )
}