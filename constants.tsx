import { 
  Image as ImageIcon, 
  Video, 
  Workflow, 
  Globe, 
  Cpu
} from 'lucide-react';
import { ServiceCategory, SubscriptionPackage, PortfolioItem } from './types';

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

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 3 IMAGES
  {
    category: 'image',
    title: 'Design de Produto AI',
    description: 'Renderização realista de embalagens utilizando ferramentas generativas.',
    tag: 'Design AI',
    mediaUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'image',
    title: 'Mascote Corporativo',
    description: 'Criação de personagem consistente para branding digital.',
    tag: 'Identidade',
    mediaUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'image',
    title: 'Campanha Social Media',
    description: 'Artes de alto impacto para engajamento em redes sociais.',
    tag: 'Marketing',
    mediaUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
  },
  
  // 2 VIDEOS (8s and 1min)
  {
    category: 'video',
    title: 'Motion Short (8s)',
    description: 'Vídeo rápido de 8 segundos focado em conversão e impacto visual.',
    tag: 'Short Video',
    mediaUrl: '#', // User will replace with their uploaded file
    thumbnailUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'video',
    title: 'Institucional AI (1min)',
    description: 'Apresentação completa de 1 minuto com narração e trilha inteligente.',
    tag: 'Vídeo Longo',
    mediaUrl: '#', // User will replace with their uploaded file
    thumbnailUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop'
  },

  // 2 AUTOMATION VIDEOS
  {
    category: 'automation',
    title: 'Automação de CRM',
    description: 'Vídeo demonstrativo de integração automática entre redes e funil de vendas.',
    tag: 'Automação',
    mediaUrl: '#', // User will replace with their uploaded file
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'automation',
    title: 'Fluxo de Atendimento',
    description: 'IA qualificando leads e respondendo dúvidas frequentes em tempo real.',
    tag: 'Automação',
    mediaUrl: '#', // User will replace with their uploaded file
    thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop'
  },

  // 2 SYSTEM VIDEOS
  {
    category: 'system',
    title: 'Sistema de Gestão Interna',
    description: 'Painel administrativo personalizado para controle total do negócio.',
    tag: 'Software',
    mediaUrl: '#', // User will replace with their uploaded file
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'system',
    title: 'App de Cliente',
    description: 'Interface exclusiva para clientes acompanharem pedidos e suporte.',
    tag: 'App Web',
    mediaUrl: '#', // User will replace with their uploaded file
    thumbnailUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop'
  }
];