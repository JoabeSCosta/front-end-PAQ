import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-4 text-white sm:px-6'>
      {/* Área esquerda: logo */}
      <div className='flex items-center gap-2'>
        <Link to='/' className='text-sm font-bold tracking-[0.24em] uppercase text-sky-200'>
          <img src="PaqJobsLogo.png" alt="PaqJobsLogo" className='h-14 w-14 object-contain' />
        </Link>
      </div>

      {/*
        Área central: navegação principal com 4 itens alinhados no centro.
        - Usamos uma <nav> com <ul> horizontal para manter a semântica.
        - Cada item aponta para uma rota interna (Home, Sobre, Vagas, Contatenos).
      */}
      <nav className='flex-1 flex justify-center'>
        <ul className='flex items-center gap-6'>
          <li>
            <Link to='/' className='text-sm font-medium text-slate-200 hover:text-white'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/sobre' className='text-sm font-medium text-slate-200 hover:text-white'>
              Sobre
            </Link>
          </li>
          <li>
            <Link to='/vagas' className='text-sm font-medium text-slate-200 hover:text-white'>
              Vagas
            </Link>
          </li>
          <li>
            <Link to='/contatenos' className='text-sm font-medium text-slate-200 hover:text-white'>
              Contate-nos
            </Link>
          </li>
        </ul>
      </nav>

      {/* Área direita: botão de login */}
      <div>
        <Link
          to='/login'
          className='rounded-full bg-white px-4 py-2 font-semibold text-slate-950 transition hover:bg-slate-200'
        >
          Entrar
        </Link>
      </div>
    </header>
  )
}

export default Header
