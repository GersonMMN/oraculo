# Oráculo dos Direitos Trabalhistas

Frontend inicial do projeto acadêmico (requisito PB04). Funciona sem backend, com respostas mockadas.

## Tecnologias

- React 18
- TypeScript
- Vite
- CSS puro (um único arquivo, `src/styles/global.css`)

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:5173).

Outros comandos: `npm run build` (verifica TypeScript e gera `dist/`) e `npm run preview`.

## Como testar os estados

- **Sucesso:** use uma pergunta sugerida ou digite algo com "férias", "13º", "demissão", "FGTS" ou "jornada".
- **Informação insuficiente:** digite um assunto fora da base, como "Como funciona o seguro de carro?".
- **Erro:** digite qualquer texto contendo "simular erro".

## Estrutura do projeto

```text
src/
├── components/   Peças reutilizáveis da interface (Header, SearchBox, AnswerCard, Feedback...)
├── pages/Home/   A tela principal; ConversationView mostra a pergunta e o resultado
├── hooks/        useQuestion: guarda o estado da consulta (idle, loading, success, insufficient, error)
├── services/     api.ts: único ponto de contato com o "backend" (hoje retorna mocks)
├── mocks/        Respostas e perguntas sugeridas de exemplo
├── types/        Contrato da API (AskRequest, AskResponse, FeedbackRequest)
└── styles/       CSS global com tokens de cor e tipografia
```

Fluxo atual: `Componente → useQuestion → services/api.ts → mocks`.
Fluxo futuro: `Componente → useQuestion → services/api.ts → API → Backend → RAG → LLM`.

## Conectando a API real

Só `src/services/api.ts` muda. Exemplo:

```ts
export async function askQuestion(request: AskRequest): Promise<AskResponse> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  })
  if (!response.ok) throw new Error('Falha na consulta')
  return response.json()
}
```

O campo `found: false` em `AskResponse` representa o caso em que o RAG não encontra base suficiente.

## Próximos passos

- Integração com o backend (`services/api.ts`)
- RAG e IA (o frontend já trata "informação insuficiente")
- Banco de dados
- Feedback persistido (`sendFeedback` já existe como ponto de envio)
- Área administrativa em `/admin` (adicionar `react-router-dom` nesse momento) com login, base de conhecimento, auditoria, perguntas e feedbacks
- Autenticação
- WhatsApp
