// Arquivo: vagasApi.js
// Propósito: cliente HTTP local para consumir os endpoints de vagas.
// Contém funções utilitárias que retornam dados prontos para uso pelos componentes.
import axios from 'axios'
import { apiRoutes } from '../store/apiRoutes'

function createApiClient() {
  // Cria uma instância do axios com a `baseURL` centralizada.
  // Isso facilita testes ou mudanças de ponto de entrada da API.
  return axios.create({
    baseURL: apiRoutes.baseURL,
  })
}

function extrairPayloadResposta(response) {
  // Normaliza formatos comuns de resposta para facilitar o consumo no front.
  return response?.data?.reply ?? response?.data?.message ?? response?.data?.resposta ?? response?.data
}

function formatarHistoricoConversa(messages = []) {
  // Converte o estado do chat para um formato simples de mensagens.
  return messages
    .filter((message) => message?.role === 'user' || message?.role === 'assistant')
    .map((message) => ({
      role: message.role,
      content: message.text,
    }))
}

export async function createVaga(payload) {
  // Cria uma vaga no banco de dados.
  const api = createApiClient()
  const response = await api.post(apiRoutes.vagaCreate, payload)
  return response.data
}

export async function getVagas() {
  // Retorna a lista completa de vagas (o backend atual entrega tudo em uma rota).
  const api = createApiClient()
  const response = await api.get(apiRoutes.vagasList)
  return response.data
}

export async function getVagaById(id) {
  // Retorna os detalhes de uma vaga específica a partir do identificador.
  const api = createApiClient()
  const response = await api.get(`${apiRoutes.vagaByIdBase}/${id}`)
  return response.data
}

export async function getVagasJooble() {
  // Busca vagas na integração com a API Jooble.
  const api = createApiClient()
  const response = await api.get(apiRoutes.vagasJooble)
  return response.data
}

export async function getVagasAdzuna() {
  // Busca vagas na integração com a API Adzuna.
  const api = createApiClient()
  const response = await api.get(apiRoutes.vagasAdzuna)
  return response.data
}

export async function converseWithChatbot(message, history = []) {
  // Envia a mensagem do usuário para o chatbot e devolve a resposta normalizada.
  const api = createApiClient()
  const response = await api.post(apiRoutes.chatConverse, {
    message,
    history: formatarHistoricoConversa(history),
    messages: formatarHistoricoConversa(history),
    conversation: formatarHistoricoConversa(history),
    prompt: message,
    input: message,
  })

  return extrairPayloadResposta(response)
}