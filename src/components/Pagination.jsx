export default function Pagination({
  page,
  totalPages,
  setPage,
  getPageNumbers,
}) {

  const baseButtonClass = `
    px-4
    py-2
    rounded-xl
    border
    border-white/10
    bg-white/5
    text-white
    transition
    hover:border-[#FF9BD2]/40
    hover:bg-[#FF9BD2]/10
    disabled:opacity-50
  `

  const activePageClass =
    "bg-[#FF9BD2] text-white"

  const inactivePageClass = `
    bg-white/5
    border
    border-white/10
    text-white
    hover:border-[#FF9BD2]/40
    hover:bg-[#FF9BD2]/10
  `

  const handlePrevPage = () => {
    setPage((prev) =>
      Math.max(prev - 1, 1)
    )
  }

  const handleNextPage = () => {
    setPage((prev) =>
      Math.min(
        prev + 1,
        totalPages
      )
    )
  }

  return (
    <div
      className="
        mt-12
        flex
        flex-wrap
        items-center
        justify-center
        gap-2
      "
    >

      <button
        onClick={() => setPage(1)}
        disabled={page === 1}
        className={baseButtonClass}
      >
        First
      </button>

      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className={baseButtonClass}
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
            className={`
              px-4
              py-2
              rounded-xl
              transition
              ${
                page === pageNumber
                  ? activePageClass
                  : inactivePageClass
              }
            `}
          >
            {pageNumber}
          </button>
        )
      )}

      <button
        onClick={handleNextPage}
        disabled={
          page === totalPages
        }
        className={baseButtonClass}
      >
        Next
      </button>

      <button
        onClick={() =>
          setPage(totalPages)
        }
        disabled={
          page === totalPages
        }
        className={baseButtonClass}
      >
        Last
      </button>

    </div>
  )
}