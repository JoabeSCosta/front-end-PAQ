import { MessageSquare, Rocket, Search, UserPlus } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Crie seu perfil',
    description: 'Cadastre suas informações, habilidades e objetivos de carreira em poucos minutos.',
  },
  {
    icon: Search,
    title: 'Explore vagas',
    description: 'Navegue por oportunidades filtradas para o seu nível de experiência.',
  },
  {
    icon: MessageSquare,
    title: 'Converse com a IA',
    description: 'Use nosso assistente inteligente para encontrar vagas que combinam com o seu perfil.',
  },
  {
    icon: Rocket,
    title: 'Candidate-se',
    description: 'Aplique para as vagas ideais e comece sua jornada profissional com o pé direito.',
  },
]

function HowItWorks() {
  return (
    <section id='como-funciona' className='bg-slate-100 py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-balance text-3xl font-bold text-slate-900 md:text-4xl'>
            Como funciona
          </h2>
          <p className='text-pretty mt-4 text-slate-600'>
            Em quatro passos simples, você encontra a oportunidade perfeita para iniciar sua carreira.
          </p>
        </div>

        <div className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div key={step.title} className='relative'>
                {/* Linha conectora entre os passos no desktop */}
                {index < steps.length - 1 && (
                  <div className='absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-slate-300 lg:block' />
                )}

                <div className='relative flex flex-col items-center text-center'>
                  <div className='relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg'>
                    <Icon className='h-7 w-7' />
                    <span className='absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white'>
                      {index + 1}
                    </span>
                  </div>

                  <h3 className='text-lg font-semibold text-slate-900'>{step.title}</h3>
                  <p className='text-pretty mt-2 text-sm text-slate-600'>{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks