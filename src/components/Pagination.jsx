export default function Pagination({
  page,
  totalPages,
  setPage,
  getPageNumbers,
}) {
  return (
    <div
      className="
      flex
      items-center
      justify-center
      gap-2
      mt-12
      flex-wrap
      "
    >
      <button
        onClick={() => setPage(1)}
        disabled={page === 1}
        className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white hover:border-[#FF9BD2]/40 hover:bg-[#FF9BD2]/10 disabled:opacity-50 transition"
      >
        First
      </button>

      <button
        onClick={() =>
          setPage((prev) =>
            Math.max(prev - 1, 1)
          )
        }
        disabled={page === 1}
        className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white hover:border-[#FF9BD2]/40 hover:bg-[#FF9BD2]/10 disabled:opacity-50 transition"
      >
        Prev
      </button>

      {getPageNumbers().map(
        (pageNumber) => (
          <button
            key={pageNumber}
            onClick={() =>
              setPage(pageNumber)
            }
            className={`px-4 py-2 rounded-xl transition ${
              page === pageNumber
                ? "bg-[#FF9BD2] text-white"
                : "bg-white/5 border border-white/10 text-white hover:border-[#FF9BD2]/40 hover:bg-[#FF9BD2]/10"
            }`}
          >
            {pageNumber}
          </button>
        )
      )}

      <button
        onClick={() =>
          setPage((prev) =>
            Math.min(
              prev + 1,
              totalPages
            )
          )
        }
        disabled={page === totalPages}
        className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white hover:border-[#FF9BD2]/40 hover:bg-[#FF9BD2]/10 disabled:opacity-50 transition"
      >
        Next
      </button>

      <button
        onClick={() =>
          setPage(totalPages)
        }
        disabled={page === totalPages}
        className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white hover:border-[#FF9BD2]/40 hover:bg-[#FF9BD2]/10 disabled:opacity-50 transition"
      >
        Last
      </button>
    </div>
  )
}