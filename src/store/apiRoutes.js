// Arquivo: apiRoutes.js
// Propósito: armazenar as rotas / endpoints usados pelo front-end.
// Nota: originalmente isto era um `atom` do Jotai; foi substituído por
// um objeto simples para evitar dependência de estado global apenas para rotas.
// Se o backend evoluir para suporte a query params (busca/paginação), aqui
// é um bom lugar para centralizar esses padrões.
export const apiRoutes = {
  // URL base do backend por ambiente.
  // No desenvolvimento, o Vite proxy usa `/api` para evitar CORS.
  // Em produção, usamos a URL direta do backend porque o Netlify não aplica o proxy do Vite.
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.DEV
      ? '/api'
      : 'https://prototipando-a-quebrada-paq-production.up.railway.app'),

  // Endpoints de vagas no banco de dados
  vagasList: '/vaga/',
  vagaCreate: '/vaga/',

  // Base para pegar uma vaga por id (usado como `${vagaByIdBase}/${id}`)
  vagaByIdBase: '/vaga',

  // Integrações com provedores externos
  vagasJooble: '/vaga/jooble',
  vagasAdzuna: '/vaga/adzuna',

  // Endpoint do chatbot
  chatConverse: '/chat/converse',
}