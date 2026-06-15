// Arquivo: SearchInput.jsx
// Propósito: input controlado para pesquisa local na lista de vagas.
// Recebe `value` e `onSearch` para permitir controle completo pela página pai.
// A busca ocorre apenas quando o usuário clica no botão ou pressiona Enter.
import { useState } from 'react'
import { Search } from 'lucide-react'

function SearchInput({ onSearch, placeholder = 'Buscar vagas por cargo, empresa ou local' }) {
  const [inputValue, setInputValue] = useState('')

  // Handler: atualiza o valor local do input sem disparar busca
  function handleInputChange(event) {
    setInputValue(event.target.value)
  }

  // Handler: dispara busca e reseta o input
  function handleSearch() {
    onSearch(inputValue)
  }

  // Handler: dispara busca ao pressionar Enter
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className='flex gap-2'>
      <input
        type='search'
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className='flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100'
      />
      <button
        onClick={handleSearch}
        className='rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-sky-100'
      >
        <Search className='h-4 w-4' />
      </button>
    </div>
  )
}

export default SearchInput
