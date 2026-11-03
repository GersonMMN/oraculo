import type { Source } from '../types/api'

export const CARTILHA_TRT4: Source = {
  title: 'Cartilha de Direitos e Obrigações no Trabalho — TRT4',
  url: 'https://www.trt4.jus.br',
}

export interface MockEntry {
  keywords: string[] // sem acento e em minúsculas
  answer: string // parágrafos separados por linha em branco
  relatedQuestions: string[]
}

// A ordem importa: a primeira entrada que casar com a pergunta é usada.
export const mockEntries: MockEntry[] = [
  {
    keywords: ['pagamento das ferias'],
    answer:
      'As férias são pagas com o salário do período e um adicional de, no mínimo, um terço (1/3) do valor.\n\nO pagamento deve ser feito até 2 dias antes do início das férias.',
    relatedQuestions: ['Tenho direito a férias depois de quanto tempo?', 'Como funciona o FGTS?'],
  },
  {
    keywords: ['tirar minhas ferias', 'quando posso tirar'],
    answer:
      'Depois de completar o período de direito, o empregador tem até 12 meses para conceder as férias.\n\nQuem escolhe a data, em regra, é o empregador, que deve avisar o trabalhador com pelo menos 30 dias de antecedência.',
    relatedQuestions: ['Como funciona o pagamento das férias?', 'Como funciona o 13º salário?'],
  },
  {
    keywords: ['ferias'],
    answer:
      'Em regra, o direito a férias surge depois de 12 meses de trabalho para o mesmo empregador.\n\nCompletado esse período, o empregador tem mais 12 meses para conceder 30 dias de descanso, com pagamento adicional de pelo menos um terço do salário.\n\nOs prazos podem variar conforme o caso.',
    relatedQuestions: ['Quando posso tirar minhas férias?', 'Como funciona o pagamento das férias?'],
  },
  {
    keywords: ['13', 'decimo terceiro', 'gratificacao natalina'],
    answer:
      'O 13º salário corresponde a 1/12 da remuneração para cada mês trabalhado no ano (contam meses com 15 dias ou mais de trabalho).\n\nÉ pago em duas parcelas: a primeira até 30 de novembro e a segunda até 20 de dezembro.',
    relatedQuestions: ['Quais são meus direitos em uma demissão?', 'Como funciona o FGTS?'],
  },
  {
    keywords: ['demiss', 'demitid', 'rescisao', 'dispensa'],
    answer:
      'Os direitos dependem do tipo de desligamento. Na dispensa sem justa causa, em regra, o trabalhador recebe saldo de salário, aviso prévio, férias proporcionais com 1/3, 13º proporcional e multa de 40% sobre o FGTS.\n\nTambém pode ter direito ao saque do FGTS e ao seguro-desemprego, se cumprir os requisitos.',
    relatedQuestions: ['Como funciona o FGTS?', 'Como funciona o 13º salário?'],
  },
  {
    keywords: ['fgts', 'fundo de garantia'],
    answer:
      'O FGTS é um fundo formado por depósitos mensais feitos pelo empregador, equivalentes a 8% do salário, em conta em nome do trabalhador.\n\nO saque é permitido em situações previstas em lei, como a dispensa sem justa causa e a compra da casa própria.',
    relatedQuestions: ['Quais são meus direitos em uma demissão?', 'Qual é a jornada de trabalho?'],
  },
  {
    keywords: ['jornada', 'hora extra', 'horas extras', 'horario de trabalho'],
    answer:
      'A jornada padrão é de até 8 horas por dia e 44 horas por semana.\n\nHoras trabalhadas além disso são horas extras e devem ser pagas com adicional de, no mínimo, 50% sobre a hora normal.',
    relatedQuestions: ['Tenho direito a férias depois de quanto tempo?', 'Como funciona o 13º salário?'],
  },
]

export const suggestedQuestions: string[] = [
  'Tenho direito a férias?',
  'Como funciona o 13º salário?',
  'Quais são meus direitos em uma demissão?',
  'Como funciona o FGTS?',
  'Qual é a jornada de trabalho?',
]
