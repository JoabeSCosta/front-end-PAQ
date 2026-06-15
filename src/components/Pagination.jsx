// Arquivo: Pagination.jsx
// Propósito: componente de paginação reutilizável.
// Separa a renderização de botões da lógica de paginação presente nas páginas.
import { useState, useEffect } from 'react'

function Pagination({ currentPage, totalPages, onPageChange }) {
  // Se não houver mais de uma página, não renderiza o componente.
  if (totalPages <= 1) return null

  const [maxPagesShown, setMaxPagesShown] = useState(3)

  // Detecta o tamanho da tela e ajusta quantas páginas mostrar
  useEffect(() => {
    function handleResize() {
      setMaxPagesShown(window.innerWidth >= 640 ? 5 : 3)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calcula quais páginas mostrar
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesShown / 2))
  let endPage = Math.min(totalPages, startPage + maxPagesShown - 1)

  // Ajusta startPage se endPage chegou ao limite
  if (endPage - startPage + 1 < maxPagesShown) {
    startPage = Math.max(1, endPage - maxPagesShown + 1)
  }

  const pagesToShow = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  )

  // Navbar com botões Previous / números / Next
  return (
    <nav className='mx-auto mt-8 flex max-w-6xl items-center justify-center gap-1 px-2 py-4 sm:gap-2 sm:px-4 sm:py-8'>
      {/* Botão anterior */}
      <button
        type='button'
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className='rounded-lg bg-white px-2 py-1 text-xs transition hover:bg-slate-900 hover:text-white disabled:opacity-50 disabled:hover:bg-white sm:px-4 sm:py-2 sm:text-base'
      >
        Anterior
      </button>

      {/* Reticências se não começa na página 1 */}
      {startPage > 1 && (
        <span className='px-1 text-xs sm:px-2 sm:text-base'>...</span>
      )}

      {/* Botões numerados */}
      {pagesToShow.map((page) => (
        <button
          type='button'
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded-lg px-1.5 py-1 text-xs transition sm:px-4 sm:py-2 sm:text-base ${
            currentPage === page
              ? 'bg-slate-900 text-white shadow-inner'
              : 'bg-white hover:bg-slate-500 hover:text-white'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Reticências se não termina na última página */}
      {endPage < totalPages && (
        <span className='px-1 text-xs sm:px-2 sm:text-base'>...</span>
      )}

      {/* Botão próxima */}
      <button
        type='button'
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className='rounded-lg bg-white px-2 py-1 text-xs transition hover:bg-slate-900 hover:text-white disabled:opacity-50 disabled:hover:bg-white sm:px-4 sm:py-2 sm:text-base'
      >
        Próxima
      </button>
    </nav>
  )
}

export default Pagination