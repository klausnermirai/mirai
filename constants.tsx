import { 
  Image as ImageIcon, 
  Video, 
  Workflow, 
  Globe, 
  Cpu
} from 'lucide-react';
import { ServiceCategory, SubscriptionPackage } from './types';

// Individual Service Exports for flexible usage
export const SERVICE_VISUAL: ServiceCategory = {
  id: 'visual',
  title: 'Identidade Visual & Imagens',
  subtitle: 'Do conceito à arte final',
  icon: ImageIcon,
  description: 'Imagens que vendem. Acabe com a aleatoriedade da IA.',
  items: [
    {
      service: 'Criação de Imagem Comum',
      description: 'Geração de imagem de alto impacto visual sem edição complexa.',
      price: 'R$ 15,00',
      additional: '+ R$ 5,00 por Movimento'
    },
    {
      service: 'Imagem Trabalhada (Comercial)',
      description: 'Pronta para uso corporativo. Inserção de logo, ajuste de cores, templates.',
      price: 'R$ 20,00',
      additional: '+ R$ 5,00 por Movimento'
    },
    {
      service: 'Personagens & Avatares',
      description: 'Desenvolvimento de mascotes ou humanos virtuais com consistência.',
      price: 'R$ 25,00',
      additional: '+ R$ 5,00 por Movimento'
    }
  ]
};

export const SERVICE_VIDEO: ServiceCategory = {
  id: 'video',
  title: 'Vídeo & Mídia Sintética',
  subtitle: 'O Padrão 8 Segundos',
  icon: Video,
  description: 'Clips de alto impacto visual para conectar sua marca.',
  items: [
    {
      service: 'Vídeo Short AI (8s)',
      description: 'Geração de 1 clipe de até 8s a partir de imagem ou texto.',
      price: 'R$ 35,00 / vídeo',
      additional: 'Limite de 3 vídeos por semana por cliente'
    },
    {
      service: 'Adicional de Edição',
      description: 'Unir 2 ou mais clips, colocar trilha sonora e legendas.',
      price: '+ R$ 5,00 / clip',
      additional: '+ R$ 5,00 por clipe extra'
    }
  ],
  extraInfo: 'Política de Refação: Nova geração custa R$ 5,00.'
};

export const SERVICE_SITES: ServiceCategory = {
  id: 'sites',
  title: 'Sites & Landing Pages',
  subtitle: 'Sua vitrine digital',
  icon: Globe,
  description: 'Páginas leves e otimizadas focadas em converter visitantes.',
  items: [
    {
      service: 'Taxa de Criação (Setup)',
      description: 'Design, organização de conteúdo e publicação.',
      price: 'R$ 100,00',
      additional: 'Único'
    },
    {
      service: 'Infraestrutura',
      description: 'Hospedagem + Domínio (Isento se cliente já tiver).',
      price: 'R$ 40,00 / mês',
      additional: ''
    },
    {
      service: 'Manutenção Mensal',
      description: 'Monitoramento, renovação de certificados e backups.',
      price: 'R$ 20,00 / mês',
      additional: ''
    }
  ],
  extraInfo: 'Pacote Starter: R$ 60,00 mensais (Hospedagem + Manutenção) se não tiver nada.'
};

export const SERVICE_AUTOMATION: ServiceCategory = {
  id: 'automation',
  title: 'Automação & Processos',
  subtitle: 'Conecte seus aplicativos',
  icon: Workflow,
  description: 'Faça com que uma ação em um lugar dispare uma reação em outro (Make/Zapier).',
  items: [
    {
      service: 'Taxa de Criação (Setup)',
      description: 'Estudo do fluxo, desenho da lógica e implementação.',
      price: 'R$ 75,00',
      additional: 'Pagamento Único'
    },
    {
      service: 'Mensalidade (Manutenção)',
      description: 'Manter o robô ativo e disponível 24h.',
      price: 'R$ 20,00 / mês',
      additional: 'Fixo'
    },
    {
      service: 'Custo por Processamento',
      description: 'Custo a cada 1.000 Operações realizadas pelo robô.',
      price: 'R$ 6,00',
      additional: 'Por 1.000 ops'
    }
  ]
};

export const SERVICE_SYSTEMS: ServiceCategory = {
  id: 'web',
  title: 'Sistemas Web & Apps',
  subtitle: 'Soluções sob medida',
  icon: Cpu,
  description: 'Nós construímos a ferramenta exata que seu negócio precisa.',
  items: [
    {
      service: 'Desenvolvimento (Setup)',
      description: 'Construção da estrutura, design e lógica inicial.',
      price: 'R$ 20,00 - R$ 300,00',
      additional: 'Dependendo do escopo'
    },
    {
      service: 'Mensalidade',
      description: 'Hospedagem, segurança e manutenção do sistema.',
      price: 'R$ 15,00 - R$ 250,00',
      additional: 'Por mês'
    },
    {
      service: 'Evolução e Ajustes',
      description: 'Custo de alteração pontual (botões, campos novos).',
      price: 'R$ 15,00',
      additional: 'Por Movimento'
    }
  ]
};

export const SERVICES = [
  SERVICE_VISUAL,
  SERVICE_VIDEO,
  SERVICE_AUTOMATION,
  SERVICE_SYSTEMS,
  SERVICE_SITES
];

export const PACKAGES: SubscriptionPackage[] = [
  {
    name: 'MIRAI START',
    price: 'R$ 50',
    subtitle: 'Manutenção básica',
    features: [
      'Criação de Linha Editorial',
      '3 Imagens Trabalhadas',
      'Ideal para: Feed organizado'
    ],
    idealFor: 'Manutenção básica'
  },
  {
    name: 'MIRAI MOTION',
    price: 'R$ 80',
    subtitle: 'Entrada no mundo dos vídeos',
    features: [
      'Criação de Linha Editorial',
      '3 Imagens Trabalhadas',
      '1 Vídeo Short AI (8s)',
      'Ideal para: Quem quer começar Reels'
    ],
    idealFor: 'Vídeos Iniciais',
    highlight: true
  },
  {
    name: 'MIRAI PRO',
    price: 'R$ 120',
    subtitle: 'Volume de postagem',
    features: [
      'Criação de Linha Editorial',
      '5 Imagens Trabalhadas',
      '1 Vídeo Short AI (8s)',
      'Ideal para: Comércios ativos'
    ],
    idealFor: 'Volume'
  },
  {
    name: 'MIRAI ELITE',
    price: 'R$ 200',
    subtitle: 'Autoridade total',
    features: [
      'Criação de Linha Editorial',
      '5 Imagens Trabalhadas',
      '3 Vídeos Short AI (8s)',
      'Ideal para: Crescimento acelerado'
    ],
    idealFor: 'Crescimento'
  }
];