// Arquivo: Vagas.jsx
// Propósito: página principal de listagem de vagas.
// Seções:
//  - importações e dependências
//  - estado local (vagas, loading, erro, paginação, pesquisa)
//  - efeitos para carregar dados do backend
//  - lógica de filtragem e paginação (client-side)
//  - renderização da grade de vagas e componentes auxiliares
import { useEffect, useState } from 'react'
import Hero from '../components/home/Hero'
import HowItWorks from '../components/home/HowItWorks'
import JobCard from '../components/JobCard'
import Pagination from '../components/Pagination'
import SearchInput from '../components/SearchInput'
import { getVagas } from '../services/vagasApi'

function Vagas() {
  // Estado: dados trazidos da API
  const [vagas, setVagas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Estado: paginação e pesquisa locais
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const itemsPerPage = 6
  const searchTermNormalizado = searchTerm.trim().toLowerCase()

  // Filtragem client-side: procura por título, nome, empresa, local ou descrição
  const vagasFiltradas = vagas.filter((vaga) => {
    if (!searchTermNormalizado) return true

    const textoBase = [vaga.title, vaga.name, vaga.company, vaga.location, vaga.description]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    return textoBase.includes(searchTermNormalizado)
  })

  // Cálculo de páginas a partir dos resultados filtrados
  const totalPages = Math.ceil(vagasFiltradas.length / itemsPerPage)
  const paginaAtual = totalPages === 0 ? 1 : Math.min(currentPage, totalPages)

  // Fatia os resultados para a página atual
  const vagasDaPagina = vagasFiltradas.slice(
    (paginaAtual - 1) * itemsPerPage,
    paginaAtual * itemsPerPage,
  )

  // Efeito: carregar vagas na montagem do componente
  useEffect(() => {
    let ativo = true

    async function carregarVagas() {
      try {
        setLoading(true)
        setError('')
        const data = await getVagas()

        if (ativo) setVagas(data)
      } catch {
        if (ativo) setError(<div className='min-h-screen bg-slate-200 pb-10 flex justify-center items-center'>
          <p>'Não foi possível carregar as vagas no momento.'</p>
        </div>)
      } finally {
        if (ativo) setLoading(false)
      }
    }

    carregarVagas()

    return () => {
      ativo = false
    }
  }, [])

  // Handler: atualiza o termo de pesquisa e reseta a página para 1
  function handleSearchChange(valor) {
    setSearchTerm(valor)
    setCurrentPage(1)
  }

  // Renderizações simples para loading/erro
  if (loading) return <div className='min-h-screen bg-slate-200 pb-10 flex justify-center items-center'>Carregando vagas...</div>
  if (error) return <div>{error}</div>

  // JSX: composição da página com SearchInput, grade e paginação
  return (
    <div className='min-h-screen bg-white pb-10'>
      {/* Hero principal da página */}
      <Hero />

      {/* Explicação rápida de como a plataforma funciona */}
      <HowItWorks />

      {/* Seção da listagem de vagas */}
      <section id='vagas' className='bg-slate-200 py-12 scroll-mt-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-balance text-2xl font-bold text-slate-900 md:text-3xl'>
              Vagas disponíveis
            </h2>
            <p className='text-pretty mt-3 text-sm text-slate-600 md:text-base'>
              Use a busca abaixo para filtrar as oportunidades que mais combinam com o seu perfil.
            </p>
          </div>

          <div className='mt-8'>
            <SearchInput value={searchTerm} onChange={handleSearchChange} />
          </div>

          <div className='mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {vagasDaPagina.map((job) => {
              const jobId = String(job._id ?? job.id_vaga_external)

              return (
                <JobCard
                  key={jobId}
                  id={jobId}
                  title={job.title || job.name}
                  company={job.company}
                  location={job.location}
                  description={job.description}
                />
              )
            })}
          </div>

          {vagasFiltradas.length === 0 && (
            <p className='mx-auto mt-10 max-w-6xl text-center text-sm text-slate-600'>
              Nenhuma vaga encontrada com esse filtro.
            </p>
          )}

          <div className='mt-10'>
            <Pagination currentPage={paginaAtual} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Vagas