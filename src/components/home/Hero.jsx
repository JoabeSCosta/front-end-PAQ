import { Briefcase, GraduationCap, Rocket, Search } from 'lucide-react'

function Hero() {
  return (
    <section className='relative overflow-hidden bg-linear-to-b from-slate-50 to-slate-100 py-16 md:py-24'>
      {/* Decoração de fundo para dar profundidade sem poluir a leitura */}
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl' />
        <div className='absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl' />
      </div>

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          {/* Selo de abertura da página */}
          <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur'>
            <Rocket className='h-4 w-4' />
            Seu primeiro passo profissional começa aqui
          </div>

          <h1 className='text-balance text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl'>
            Encontre a vaga perfeita para{' '}
            <span className='text-sky-700'>iniciar sua carreira</span>
          </h1>

          <p className='text-pretty mt-6 text-lg leading-relaxed text-slate-600 md:text-xl'>
            Conectamos jovens talentos às melhores oportunidades de estágio, jovem aprendiz e
            posições júnior. Use a IA para descobrir vagas que combinam com o seu perfil.
          </p>

          {/* Ações principais da página */}
          <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <a
              href='#vagas'
              className='inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto'
            >
              <Search className='h-4 w-4' />
              Explorar vagas
            </a>
            <a
              href='#como-funciona'
              className='inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-50 sm:w-auto'
            >
              Como funciona
            </a>
          </div>
        </div>

        {/* Bloco de métricas para reforçar credibilidade */}
        <div className='mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3'>
          <div className='flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm'>
            <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100'>
              <Briefcase className='h-6 w-6 text-sky-700' />
            </div>
            <span className='text-3xl font-bold text-slate-900'>500+</span>
            <span className='text-sm text-slate-500'>Vagas disponíveis</span>
          </div>

          <div className='flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm'>
            <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100'>
              <GraduationCap className='h-6 w-6 text-emerald-700' />
            </div>
            <span className='text-3xl font-bold text-slate-900'>10k+</span>
            <span className='text-sm text-slate-500'>Jovens contratados</span>
          </div>

          <div className='flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm'>
            <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100'>
              <Rocket className='h-6 w-6 text-amber-700' />
            </div>
            <span className='text-3xl font-bold text-slate-900'>200+</span>
            <span className='text-sm text-slate-500'>Empresas parceiras</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero